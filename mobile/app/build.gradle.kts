plugins {
  id("com.android.application")
  id("org.jetbrains.kotlin.android")
}

android {
  namespace = "com.izakdvlpr.chaty"

  compileSdk = Configurations.compileSdk

  defaultConfig {
    applicationId = "com.izakdvlpr.chaty"

    minSdk = Configurations.minSdk
    targetSdk = Configurations.targetSdk

    versionName = Configurations.versionName
    versionCode = Configurations.versionCode

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

  implementation("androidx.core:core-ktx:1.7.0")
  implementation("androidx.lifecycle:lifecycle-runtime-ktx:2.3.1")
  implementation("androidx.activity:activity-compose:1.3.1")

  implementation("androidx.compose.ui:ui-tooling:1.2.0")
  implementation("androidx.compose.ui:ui:1.2.0")
  implementation("androidx.compose.ui:ui-tooling-preview:1.2.0")

  implementation("androidx.compose.material:material:1.2.0")
}