package com.izakdvlpr.chaty.navigation

import androidx.compose.animation.ExperimentalAnimationApi
import androidx.compose.animation.core.tween
import androidx.compose.animation.slideInHorizontally
import androidx.compose.animation.slideOutHorizontally
import androidx.compose.runtime.Composable
import androidx.navigation.NavType
import androidx.navigation.navArgument
import com.google.accompanist.navigation.animation.AnimatedNavHost
import com.google.accompanist.navigation.animation.composable
import com.google.accompanist.navigation.animation.rememberAnimatedNavController
import com.izakdvlpr.chaty.screens.channel.ChannelScreen
import com.izakdvlpr.chaty.screens.guild.GuildScreen
import com.izakdvlpr.chaty.screens.home.HomeScreen
import com.izakdvlpr.chaty.screens.login.LoginScreen

private val startTransition = slideInHorizontally(tween(800)) { fullWidth -> fullWidth }
private val exitTransition = slideOutHorizontally(tween(800)) { fullWidth -> -fullWidth / 2 }
private val popExitTransition = slideOutHorizontally(tween(800)) { fullWidth -> fullWidth / 2 }
private val popEnterTransition = slideInHorizontally(tween(800)) { fullWidth -> -fullWidth }

@OptIn(ExperimentalAnimationApi::class)
@Composable
fun NavigationHost() {
  val navController = rememberAnimatedNavController()

  AnimatedNavHost(
    navController = navController,
    startDestination = "home",
    enterTransition = { startTransition },
    exitTransition = { exitTransition },
    popExitTransition = { popExitTransition },
    popEnterTransition = { popEnterTransition }
  ) {
    composable(route = "home") {
      HomeScreen(navigation = navController)
    }

    composable(route = "login") {
      LoginScreen()
    }

    composable(
      route = "guilds/{guildId}",
      arguments = listOf(
        navArgument("guildId") {
          type = NavType.StringType
        },
      )
    ) {
      GuildScreen(guildId = it.arguments?.getString("guildId")!!)
    }

    composable(
      route = "guilds/{guildId}/channels/{channelId}",
      arguments = listOf(
        navArgument("guildId") {
          type = NavType.StringType
        },
        navArgument("channelId") {
          type = NavType.StringType
        },
      )
    ) {
      ChannelScreen(
        guildId = it.arguments?.getString("guildId")!!,
        channelId = it.arguments?.getString("channelId")!!,
      )
    }
  }
}