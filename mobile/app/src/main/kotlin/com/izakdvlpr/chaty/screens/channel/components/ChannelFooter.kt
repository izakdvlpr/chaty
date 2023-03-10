package com.izakdvlpr.chaty.screens.channel.components

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowForwardIos
import androidx.compose.material.icons.outlined.Send
import androidx.compose.material3.*
import androidx.compose.runtime.Composable
import androidx.compose.runtime.livedata.observeAsState
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.drawBehind
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.input.KeyboardCapitalization
import androidx.compose.ui.text.input.KeyboardType
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.MutableLiveData
import kotlinx.coroutines.flow.MutableStateFlow

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun ChannelFooter(
  messageContent: String,
  onMessageContentChanged: (String) -> Unit,
  onClickSendButton: () -> Unit = {}
) {
  Row(
    modifier = Modifier
      .fillMaxWidth()
      .drawBehind {
        drawLine(
          color = Color(0xFF27282e),
          start = Offset(0f, 0f),
          end = Offset(size.width, 0f),
          strokeWidth = 1 * density
        )
      }
      .background(color = Color(0xFF363940))
      .padding(15.dp),
    horizontalArrangement = Arrangement.SpaceBetween,
  ) {
    Column(modifier = Modifier.weight(1f, true)) {
      TextField(
        modifier = Modifier
          .fillMaxWidth()
          .padding(end = 8.dp),
        value = messageContent,
        onValueChange = { onMessageContentChanged(it) },
        colors = TextFieldDefaults.textFieldColors(
          focusedIndicatorColor = Color.Transparent,
          disabledIndicatorColor = Color.Transparent,
          unfocusedIndicatorColor = Color.Transparent,
          textColor = Color(0xFFcbcdd1),
          placeholderColor = Color(0xFF8c8f96),
          containerColor = Color(0xFF2a2b2f)
        ),
        maxLines = 2,
        shape = RoundedCornerShape(100),
        placeholder = {
          Text(
            text = "Type your message..",
            color = Color(0xFFcbcdd1)
          )
        },
        keyboardOptions = KeyboardOptions(
          capitalization = KeyboardCapitalization.Sentences,
          autoCorrect = true,
          keyboardType = KeyboardType.Text,
          imeAction = ImeAction.Send
        ),
        keyboardActions = KeyboardActions(
          onSend = { onClickSendButton() }
        )
      )
    }

    Column {
      Box(
        modifier = Modifier
          .size(55.dp)
          .clip(shape = RoundedCornerShape(50.dp))
          .background(color = Color(0xFF8f72da))
          .clickable { onClickSendButton() },
      ) {
        Column(
          modifier = Modifier.fillMaxSize(),
          horizontalAlignment = Alignment.CenterHorizontally,
          verticalArrangement = Arrangement.Center,
        ) {
          Icon(
            Icons.Outlined.Send,
            tint = Color.White,
            contentDescription = null
          )
        }
      }
    }
  }
}