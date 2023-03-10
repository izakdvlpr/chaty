package com.izakdvlpr.chaty.screens.guild

import android.annotation.SuppressLint
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.*

@SuppressLint("UnusedMaterial3ScaffoldPaddingParameter")
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun GuildScreen(guildId: String) {
  Scaffold(
    topBar = { },
    bottomBar = { }
  ) {
    Text(text = "Guild")
  }
}