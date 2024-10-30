# React Native Template

Welcome to the **React Native Template!** This template serves as a robust starting point for your React Native projects, incorporating popular packages to streamline your development process.

## 📚 Table of Contents

1. [Dependencies](#dependencies)
2. [Installation](#installation)
3. [Project Structure](#project-structure)

## Dependencies

This template includes the following essential libraries:

- [React Navigation](https://reactnavigation.org): Navigate easily between screens in your app.
- [RTK (Redux Toolkit)](https://redux-toolkit.js.org): Simplify state management with Redux.
- [RTK Query](https://redux-toolkit.js.org/tutorials/rtk-query): Efficiently fetch, cache, and synchronize data.
- [Day.js](https://day.js.org): A lightweight date manipulation library.
- [React Native Config](https://www.npmjs.com/package/react-native-config): Manage environment variables effortlessly.
- [React Native Pager View](https://github.com/callstack/react-native-pager-view): Implement swipeable views with ease.
- [React Native Spinkit](https://www.npmjs.com/package/react-native-spinkit): Add beautiful loading indicators.
- [React Native SVG](https://www.npmjs.com/package/react-native-svg): Render SVG images and graphics.

## Installation

To get started, run the following command:

```bash
npx @react-native-community/cli@latest init ProjectName --template git@github.com:kyaw-moe-naing/react-native-template.git
```

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
