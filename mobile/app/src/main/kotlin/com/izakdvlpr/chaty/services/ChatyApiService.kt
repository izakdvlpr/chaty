package com.izakdvlpr.chaty.services

import android.util.Log
import io.ktor.client.*
import io.ktor.client.call.*
import io.ktor.client.plugins.*
import io.ktor.client.plugins.contentnegotiation.*
import io.ktor.client.plugins.logging.*
import io.ktor.client.request.*
import io.ktor.http.*
import io.ktor.http.ContentType.Application.Json
import io.ktor.serialization.kotlinx.json.*
import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable
import kotlinx.serialization.json.Json

private val client = HttpClient {
  install(ContentNegotiation) {
    json(Json {
      ignoreUnknownKeys = true
      coerceInputValues = true
    })
  }

  install(Logging) {
    level = LogLevel.ALL
    logger = object : Logger {
      override fun log(message: String) {
        Log.d("Chaty", message)
      }
    }
  }

  defaultRequest {
    url {
      protocol = URLProtocol.HTTP
      host = "10.0.0.103:3333"
    }
  }
}

object ChatyApiService {
  suspend fun getChannelMessages(guildId: String, channelId: String): ChannelMessagesResponse {
    val res = client.get {
      url {
        appendPathSegments("guilds", guildId, "channels", channelId, "messages")
      }
    }

    return res.body<ChannelMessagesResponse>()
  }
}

@Serializable
data class ChannelMessagesResponse(
  val messages: List<Message>
)

@Serializable
data class User(
  val id: String,
  val username: String,
  val discriminator: String
)

@Serializable
data class Guild(
  val id: String,
  val name: String,
  val owner: User,
)

enum class ChannelType {
  TEXT
}

@Serializable
data class Channel(
  val id: String,
  val type: ChannelType,
  val name: String,
  val description: String,
)

@Serializable
data class Message(
  val id: String,
  val content: String,
  val author: User,
//  val channel: Channel? = null,
//  val guild: Guild? = null,
  val createdAt: String,
)