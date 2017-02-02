import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Image, Linking } from 'react-native'
import colors from 'HSColors'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  Card,
  Button,
  Text
} from 'react-native-elements'

let styles = {}

const About = () => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.headingContainer}>
        <Image source={require('../images/dailydrip.png')} />
        <Text style={styles.heading}>About</Text>
      </View>
      <View style={styles.container}>
      <Card
          title='Contribute with us'>
          <Text style={{marginBottom: 10}}>
            This project is totally open source by DailyDrip.
          </Text>
          <Button
            icon={{name: 'code'}}
            backgroundColor='#03A9F4'
            onPress={() => Linking.openURL('https://github.com/dailydrip/react-native-docs').catch(err => console.error('An error occurred', err)) }
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='Check the code' />
        </Card>
      </View>
    </ScrollView>
  )
}

About.navigationOptions = {
  tabBar: {
    icon: () =>(
      <Icon style={{paddingBottom: 4 }} name='question-answer' size={26} />
    )}
};

styles = StyleSheet.create({
  container: {
    margin: 15
  },
  headingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.grey2
  },
  aboutImage: {
    height: 19.21,
    width: 100
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22
  }
})

export default About
