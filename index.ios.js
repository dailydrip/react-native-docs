import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View
} from 'react-native';

import App from './components/App'

const reactNativeDocs = () => {
  return (<App />);
}

AppRegistry.registerComponent('reactNativeDocs', () => reactNativeDocs);
