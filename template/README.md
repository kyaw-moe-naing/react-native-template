# ReactNativeTemplate

This project is built using the [React Native Template](https://github.com/kyaw-moe-naing/react-native-template.git).

## 📚 Contents

- [Project Structure](#project-structure)
- [Environment Setup](#environment-setup)
- [SVG Icons Usage](#svg-icons-usage)
- [Signing and Release](#signing-and-release)

## Project Structure

Here's a quick overview of the project structure:

```plaintext
src
   ├── app                # RTK (Redux Toolkit)
   │   └── services       # API Endpoints
   │   └── slices         # RTK Slices
   ├── assets             # Static assets
   │   ├── icons          # SVG Icons
   │   └── images         # Graphics
   ├── components         # Reusable components
   │   ├── drawer         # Drawer components
   │   └── tab            # Tab components
   ├── navigation         # App Navigation
   │   ├── containers     # Navigation Containers
   ├── screens            # App screens
   │   ├── auth           # Authentication screens
   │   └── tabs           # Tabbed navigation
   │       └── home       # Home screen
   ├── types              # Type definitions
   │   ├── components     # Props types
   │   └── models         # API Body/Response Models
   └── utils              # Utility functions
       └── hooks          # Custom Hooks
```

### Environment Setup

The environment is configured using [React Native Config](https://www.npmjs.com/package/react-native-config) to support two environments: **development** and **production**.

- **Development**: Loaded from `.env.development` located at [/template/.env.development](./template/.env.development)
- **Production**: Loaded from `.env` located at [/template/.env](./template/.env)

#### 📱 Android

In the [app/build.gradle](/android/app/build.gradle) file, the environments are configured as follows:

```groovy
project.ext.envConfigFiles = [
   debug: ".env.development",
   release: ".env",
]
```

#### 🍏 iOS

In the [ios/Podfile](/ios/Podfile), the environments are configured as follows:

```ruby
ENVFILES = {
   'Debug' => '$(PODS_ROOT)/../../.env.development',
   'Release' => '$(PODS_ROOT)/../../.env',
}
```

### SVG Icons Usage

1. Copy and paste your `.svg` file into [src/assets/icons](/template/src/assets/icons/) folder.
2. Import your `.svg` file inside a React component:

```typescript
import ReactLogo from 'assets/icons/React.svg';
```

3. You can then use your image as a component:

```typescript
<ReactLogo width={120} height={40} />
```

## Signing and Release

### Android

To sign the Android app:

1. Please see [Publishing to Google Play Store](https://reactnative.dev/docs/signed-apk-android) to generate a keystore file.
2. Save the keystore file locally and set the `storeFile` path in [key.properties](/android/key.properties):

```bash
   storeFile=/path/to/key.keystore
```

### iOS

Please see more on [Publishing to Apple App Store](https://reactnative.dev/docs/publishing-to-app-store).
