import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import React from 'react';
import App from './App';
import configureStore from './src/store/configureStore';

const store = configureStore();

const Redux = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('AwesomeApp', () => Redux);
