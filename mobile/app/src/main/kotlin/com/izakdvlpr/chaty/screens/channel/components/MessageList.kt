package com.izakdvlpr.chaty.screens.channel.components

import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyListState
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import com.izakdvlpr.chaty.services.Message

@Composable
fun MessageList(messages:  MutableList<Message>,  scroll: LazyListState) {
  LazyColumn(
    modifier = Modifier.fillMaxSize(),
    state = scroll
  ) {
    itemsIndexed(messages) { index, message ->
      MessageRow(message, index, lastIndex = messages.lastIndex)
    }
  }
}