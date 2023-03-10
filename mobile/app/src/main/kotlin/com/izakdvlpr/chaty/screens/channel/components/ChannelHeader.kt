package com.izakdvlpr.chaty.screens.channel.components

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBackIosNew
import androidx.compose.material.icons.filled.Group
import androidx.compose.material.icons.filled.Menu
import androidx.compose.material.icons.outlined.Tag
import androidx.compose.material3.Text
import androidx.compose.material3.Icon
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.drawBehind
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun ChannelHeader() {
  Row(
    modifier = Modifier
      .height(60.dp)
      .fillMaxWidth()
      .drawBehind {
        drawLine(
          color = Color(0xFF27282e),
          start = Offset(0F, size.height),
          end = Offset(size.width, size.height),
          strokeWidth = 1 * density
        )
      }
      .background(color = Color(0xFF303136))
      .padding(horizontal = 20.dp),
    horizontalArrangement = Arrangement.SpaceBetween,
    verticalAlignment = Alignment.CenterVertically
  ) {
    Icon(
      imageVector = Icons.Filled.ArrowBackIosNew,
      modifier = Modifier
        .width(30.dp)
        .height(30.dp),
      tint = Color(0xFFb6b7bc),
      contentDescription = null
    )

    ChannelName()

    Icon(
      imageVector = Icons.Filled.Group,
      modifier = Modifier
        .width(30.dp)
        .height(30.dp),
      tint = Color(0xFFb6b7bc),
      contentDescription = null
    )
  }
}

@Composable
private fun ChannelName() {
  Row(horizontalArrangement = Arrangement.Center) {
    Icon(
      imageVector = Icons.Outlined.Tag,
      modifier = Modifier
        .width(25.dp)
        .height(25.dp),
      tint = Color(0xFF75767c),
      contentDescription = null
    )
    Spacer(modifier = Modifier.width(5.dp))
    Text(
      text = "programadores",
      color = Color(0xFFf5f6f8),
      fontWeight = FontWeight.Normal,
      fontSize = 17.sp
    )
  }
}