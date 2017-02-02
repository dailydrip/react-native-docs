import React, { Component } from 'react'
import { View, Image, StyleSheet, ScrollView, ListView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
let styles

import {
  List,
  ListItem,
  Text,
  SearchBar
} from 'react-native-elements'
import Header from '../header'

const list = ['Loading']

class ListDocs extends Component {

  static navigationOptions = {
    tabBar: {
      icon: () =>(
        <Icon style={{paddingBottom: 4 }} name='list' size={26} />
      )}
  };

  constructor (props) {
    super(props)
    props.fetchDocsList()

    this.fetchDocsContent = props.fetchDocsContent;
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    this.state = {
      dataSource: this.ds.cloneWithRows(list)
    }

    this.changeTab = props.changeTab
    this.renderRow = this.renderRow.bind(this)
    this.pressItem = this.pressItem.bind(this)
  }

  pressItem(itemName){
    const { navigate } = this.props.navigation;

    this.fetchDocsContent(itemName)
    navigate('Details', { contentItem: 'contentItem' })
  }

  renderRow (rowDataItem) {
    return (
      <ListItem
        onPress={() => this.pressItem(rowDataItem)}
        title={rowDataItem}
      />
    )
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: this.ds.cloneWithRows(nextProps.docsList)
    })
  }

  render () {
    return (
      <View>
        <Header />
        <ScrollView keyboardShouldPersistTaps="always" style={styles.mainContainer}>
          <List>
            <ListView
              renderRow={this.renderRow}
              dataSource={this.state.dataSource}
              />
          </List>
        </ScrollView>
      </View>
    )
  }
}

styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white'
  },
   tabIcon: {
    width: 16,
    height: 16,
  },
})

export default ListDocs
