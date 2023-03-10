package com.izakdvlpr.chaty.screens.channel.components

import androidx.compose.foundation.layout.*
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.izakdvlpr.chaty.services.Message

@Composable
fun MessageRow(message: Message, index: Int, lastIndex: Int) {
  Row(
    modifier = if (index == 0) Modifier
      .fillMaxWidth()
      .padding(horizontal = 20.dp)
      .padding(top = 80.dp, bottom = 10.dp)
    else Modifier
      .fillMaxWidth()
      .padding(horizontal = 20.dp)
      .padding(bottom = if (index == lastIndex) 120.dp else 10.dp),
    horizontalArrangement = Arrangement.Center,
  ) {
    MessageAvatar()
    Spacer(modifier = Modifier.width(10.dp))
    Column {
      MessageHeader(message)
      MessageContent(content = message.content)
    }
  }
}