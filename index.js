import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import store from './src/store/configureStore';

const Redux = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

AppRegistry.registerComponent('AwesomeApp', () => Redux);
