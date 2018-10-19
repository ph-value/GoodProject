/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import Bananas from './Bananas';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Bananas);
