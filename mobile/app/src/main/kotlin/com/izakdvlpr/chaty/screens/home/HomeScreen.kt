package com.izakdvlpr.chaty.screens.home

import android.annotation.SuppressLint
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Button
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.navigation.NavHostController

@SuppressLint("UnusedMaterial3ScaffoldPaddingParameter")
@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun HomeScreen(navigation: NavHostController) {
  val guildId = "109ac96e-8c11-4ad7-bcaa-70b8906e0e9a"
  val channelId = "3b408482-44a0-4649-9cae-efb41832ea5f"

  Scaffold(topBar = { }, bottomBar = { }) {
    Column(
      modifier = Modifier.fillMaxSize(),
      horizontalAlignment = Alignment.CenterHorizontally,
      verticalArrangement = Arrangement.Center,
    ) {
      Button(
        onClick = {
          navigation.navigate("guilds/$guildId/channels/$channelId")
        }
      ) {
        Text(text = "Entrar no canal.")
      }
    }
  }
}