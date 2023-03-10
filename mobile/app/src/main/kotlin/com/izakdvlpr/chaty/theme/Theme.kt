package com.izakdvlpr.chaty.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

private val colorScheme = lightColorScheme(
  primary = Purple40,
  secondary = PurpleGrey40,
  tertiary = Pink40,
  background = Color(0xFF363940)
)

@Composable
fun ChatyTheme(content: @Composable () -> Unit) {
  MaterialTheme(
    colorScheme = colorScheme,
    typography = Typography,
    content = content
  )
}