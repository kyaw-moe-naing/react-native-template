import 'react-native-gesture-handler';

import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import ScreensContainer from './src/navigation/ScreensContainer';

function App() {
  return (
    <Provider store={store}>
      <ScreensContainer />
    </Provider>
  );
}

export default App;
