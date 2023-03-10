package com.izakdvlpr.chaty.screens.channel.components

import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

@Composable
fun MessageContent(content: String) {
  Text(
    text = content,
    color = Color(0xFFcbcdd1)
  )
}