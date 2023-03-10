plugins {
  id("com.android.application")
  id("org.jetbrains.kotlin.android")
  id("org.jetbrains.kotlin.plugin.serialization") version("1.7.10")
}

android {
  namespace = "com.izakdvlpr.chaty"

  compileSdk = 33

  defaultConfig {
    applicationId = "com.izakdvlpr.chaty"

    minSdk = 26
    targetSdk = 33

    versionName = "0.0.1"
    versionCode = 1

    vectorDrawables {
      useSupportLibrary = true
    }
  }

  sourceSets.all {
    kotlin.srcDir("src/${name}/kotlin")
  }

  buildTypes {
    release {
      isMinifyEnabled = false

      proguardFiles(
        getDefaultProguardFile("proguard-android-optimize.txt"),
        "proguard-rules.pro"
      )
    }
  }

  compileOptions {
    sourceCompatibility = JavaVersion.VERSION_11
    targetCompatibility = JavaVersion.VERSION_11
  }

  kotlinOptions {
    jvmTarget = JavaVersion.VERSION_11.toString()
  }

  buildFeatures {
    compose = true
  }

  composeOptions {
    kotlinCompilerExtensionVersion = "1.2.0"
  }

  packagingOptions {
    resources {
      excludes += "/META-INF/{AL2.0,LGPL2.1}"
    }
  }
}

dependencies {
  implementation(libs.androidx.core.ktx)
  implementation(libs.androidx.lifecycle.runtime.ktx)
  implementation(libs.androidx.activity.compose)

  implementation(libs.androidx.compose.ui)
  implementation(libs.androidx.compose.ui.tooling)
  implementation(libs.androidx.compose.ui.tooling.preview)
  implementation(libs.androidx.compose.material3)

  // navigation
  implementation("com.google.accompanist:accompanist-navigation-animation:0.29.0-alpha")

  // icons
  implementation("androidx.compose.material:material-icons-extended:1.2.0")

  // date
  implementation("com.github.marlonlom:timeago:4.0.3")

  // live data state
  implementation("androidx.compose.runtime:runtime-livedata:1.2.0")

  // socketio
  implementation("io.socket:socket.io-client:2.0.0") {
    exclude(group = "org.json", module = "json")
  }

  // http request
  implementation("io.ktor:ktor-client-core:2.2.1")
  implementation("io.ktor:ktor-client-android:2.2.1")
  implementation("io.ktor:ktor-client-cio:2.2.1")
  implementation("io.ktor:ktor-serialization-kotlinx-json:2.2.1")
  implementation("io.ktor:ktor-client-content-negotiation:2.2.1")
  implementation("io.ktor:ktor-serialization-kotlinx-xml:2.2.1")
  implementation("io.ktor:ktor-client-logging:2.2.1")
}