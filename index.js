/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import { store } from './src/store';

const ReduxApp = ({isHeadless}) => {
    if (isHeadless) {
      // App has been launched in the background by iOS, ignore
      return null;
    }
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  };
  AppRegistry.registerComponent(appName, () => ReduxApp);
