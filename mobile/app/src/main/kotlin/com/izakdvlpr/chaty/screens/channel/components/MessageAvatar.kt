package com.izakdvlpr.chaty.screens.channel.components

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp

@Composable
fun MessageAvatar() {
  Box(
    modifier = Modifier
      .width(40.dp)
      .height(40.dp)
      .clip(shape = RoundedCornerShape(size = 50.dp))
      .background(color = Color(0xFF96989d)),
  )
}