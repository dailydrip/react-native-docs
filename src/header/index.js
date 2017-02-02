import React, { Component } from 'react'
import { Image, StyleSheet, View } from 'react-native'


let styles = StyleSheet.create({
  container: {
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 60,
    width: 270
  },
});

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
            style={styles.image}
            source={require('../images/logo_gray.png')}
          />
    </View>
  )
}

export default Header
