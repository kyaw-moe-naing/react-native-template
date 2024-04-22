# React Native Template
A get-started template for React Native project including popular react native packages.

## Dependencies
- React Navigation https://reactnavigation.org
- RTK https://redux-toolkit.js.org
- RTK Query https://redux-toolkit.js.org/tutorials/rtk-query
- Day.js https://day.js.org
- React Native Config https://www.npmjs.com/package/react-native-config
- React Native Pager View https://github.com/callstack/react-native-pager-view
- React Native Spinkit https://www.npmjs.com/package/react-native-spinkit
- React Native SVG https://www.npmjs.com/package/react-native-svg

## Installation
```
npx react-native@latest init ProjectName --template git@github.com:kyaw-moe-naing/react-native-template.git
```

## Project Structure
```bash
src
   - app (RTK)
      - services (API Endpoints)
   - assets
      - icons (SVG Icons)
      - images (Graphics)
   - components
      - drawer
      - tab
   - navigation
      - containers
   - screens
      - auth
      - tabs
         - home
   - types
      - components (Props)
      - models (API Body/Response Models)
   - utils
      - hooks (Custom Hooks)
```