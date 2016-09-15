import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  main: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.main}>
          Main Component
        </Text>
      </View>
    );
  }
}