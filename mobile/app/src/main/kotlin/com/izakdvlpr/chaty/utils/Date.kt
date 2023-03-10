package com.izakdvlpr.chaty.utils

import android.annotation.SuppressLint
import com.github.marlonlom.utilities.timeago.TimeAgo
import com.github.marlonlom.utilities.timeago.TimeAgoMessages
import java.text.SimpleDateFormat
import java.util.*


@SuppressLint("SimpleDateFormat")
fun parseIsoStringToTimestamp(source: String): Long {
  val pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSXXX"
  val date = SimpleDateFormat(pattern).parse(source)

  return date.time
}

fun getRelativeTime(time: Long): String {
  val locale = Locale.forLanguageTag("pt")
  val messages = TimeAgoMessages.Builder().withLocale(locale).build()

  val relative = TimeAgo.using(time, messages)

  return relative
}