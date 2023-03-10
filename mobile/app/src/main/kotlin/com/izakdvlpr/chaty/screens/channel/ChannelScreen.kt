package com.izakdvlpr.chaty.screens.channel

import android.annotation.SuppressLint
import android.util.Log
import androidx.compose.foundation.lazy.rememberLazyListState
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Scaffold
import androidx.compose.runtime.*
import androidx.compose.runtime.livedata.observeAsState
import androidx.lifecycle.MutableLiveData
import com.izakdvlpr.chaty.screens.channel.components.ChannelFooter
import com.izakdvlpr.chaty.screens.channel.components.ChannelHeader
import com.izakdvlpr.chaty.screens.channel.components.MessageList
import com.izakdvlpr.chaty.services.ChatyApiService
import com.izakdvlpr.chaty.services.Message
import com.izakdvlpr.chaty.services.User
import io.socket.client.IO
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow
import org.json.JSONObject

@SuppressLint("UnusedMaterial3ScaffoldPaddingParameter")
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ChannelScreen(guildId: String, channelId: String) {
  val userId = "5fa004a0-5486-4c5f-beb2-30cccb7b7965"
  //val guildId = "109ac96e-8c11-4ad7-bcaa-70b8906e0e9a"
  // val channelId = "3b408482-44a0-4649-9cae-efb41832ea5f"

  val scroll = rememberLazyListState()

  val messageMananger = MessageManager()

  val messages = messageMananger.messages.observeAsState().value
  val messageContent by messageMananger.messageContent.collectAsState()
  val isLoading = messageMananger.isLoading.observeAsState().value

  LaunchedEffect(key1 = Unit) {
    messageMananger.getMessages(guildId, channelId)
  }

  LaunchedEffect(key1 = isLoading) {
    if (isLoading == false) {
      Log.d("Scroll", scroll.layoutInfo.totalItemsCount.toString())
    }
  }

  LaunchedEffect(key1 = Unit) {
    messageMananger.updateMessages(userId, guildId, channelId)
  }

  Scaffold(
    topBar = { ChannelHeader() },
    bottomBar = {
      ChannelFooter(
        messageContent = messageContent,
        onMessageContentChanged = { messageMananger.sendMessage(it) },
        onClickSendButton = {}
      )
    }
  ) {
    if (!messages.isNullOrEmpty()) {
      MessageList(messages, scroll)
    }
  }
}

class MessageManager {
  val messages = MutableLiveData<MutableList<Message>>()
  val _messageContent = MutableStateFlow("")
  val messageContent = _messageContent.asStateFlow()
  val isLoading = MutableLiveData<Boolean>(true)
  val isError = MutableLiveData<Boolean>(false)
  val error = MutableLiveData<String?>(null)

  fun updateMessages(userId: String, guildId: String, channelId: String) {
    try {
      val options = IO.Options.builder()
        .setQuery("userId=$userId&guildId=$guildId&channelId=$channelId")
        .build()

      val socket = IO.socket("http://10.0.0.103:3333", options)

      socket.on("messageCreate") { args ->
        val data = args[0] as JSONObject

        val message = Message(
          id = data.getString("id"),
          content = data.getString("content"),
          author = User(
            id = data.getJSONObject("author").getString("id"),
            username = data.getJSONObject("author").getString("username"),
            discriminator = data.getJSONObject("author").getString("discriminator"),
          ),
          createdAt = data.getString("createdAt")
        )

        messages.value?.add(message)
        messages.postValue(messages.value)
      }

      socket.connect()
    } catch (e: Exception) {
      isLoading.postValue(false)
      isError.postValue(true)

      error.postValue("Houve um erro ao atualizar as mensagens.")
    }
  }

  suspend fun getMessages(guildId: String, channelId: String) {
    try {
      val res = ChatyApiService.getChannelMessages(guildId, channelId)

      val allMessages = res.messages.toMutableStateList()

      messages.postValue(allMessages)

      isLoading.postValue(false)
    } catch (e: Exception) {
      isLoading.postValue(false)
      isError.postValue(true)

      error.postValue("Houve um erro ao obter as mensagens.")
    }
  }

  fun sendMessage(content: String) {
    if (content.isBlank()) {
      return
    }

    _messageContent.value = content
  }
}