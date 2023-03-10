package com.izakdvlpr.chaty.screens.channel.components

import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.izakdvlpr.chaty.services.Message
import com.izakdvlpr.chaty.utils.getRelativeTime
import com.izakdvlpr.chaty.utils.parseIsoStringToTimestamp

@Composable
fun MessageHeader(message: Message) {
  Row(
    modifier = Modifier.fillMaxWidth(),
    verticalAlignment = Alignment.CenterVertically
  ) {
    Text(
      text = message.author.username,
      color = Color(0xFFfcfdff),
      fontWeight = FontWeight.SemiBold
    )

    Text(
      modifier = Modifier.padding(start = 10.dp),
      text = getRelativeTime(parseIsoStringToTimestamp(message.createdAt)),
      color = Color(0xFF8c8f96),
      fontWeight = FontWeight.Normal,
      fontSize = 10.sp,
    )
  }
}