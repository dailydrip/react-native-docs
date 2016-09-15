import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const DetailsDocs = () => {
  return (
    <View style={styles.container}>
      <Text>Details Docs</Text>
    </View>
    );
}

export default DetailsDocs;
