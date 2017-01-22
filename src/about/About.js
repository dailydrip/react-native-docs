import React, { Component } from 'react'
import { ScrollView, View, StyleSheet, Image } from 'react-native'
import colors from 'HSColors'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  Card,
  Button,
  Text
} from 'react-native-elements'

let styles = {}

class About extends Component {
  render () {
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
              buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
              title='Check the code' />
          </Card>
        </View>
      </ScrollView>
    )
  }
}

styles = StyleSheet.create({
  container: {
    margin: 15
  },
  headingContainer: {
    marginTop: 60,
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
