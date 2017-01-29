import React, { Component } from 'react'
import { StyleSheet, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from 'HSColors'
import fonts from 'HSFonts'

import About from './about/AboutRootContainer'
import ListDocs from './listDocs/ListDocsRootContainer'
import DetailsDocs from './detailsDocs/DetailsDocsRootContainer'

import { Tabs, Tab } from 'react-native-elements'

import API from './api'

let styles = {}

class App extends Component {
  constructor (props) {
    super()

    this.state = {
      selectedTab: 'listdocs',
    }
    props.fetchDocsList()
    this.changeTab = this.changeTab.bind(this)
  }

  changeTab (selectedTab) {
    this.setState({
      selectedTab
    })
  }

  render () {
    const { toggleSideMenu } = this.props
    const { selectedTab, item, itemContent, docsList} = this.state
    return (
      <Tabs hidesTabTouch>
        <Tab
          titleStyle={[styles.titleStyle]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
          title={selectedTab === 'listdocs' ? 'DOCS' : null}
          tabStyle={selectedTab !== 'listdocs' && { marginBottom: -6 }}
          selected={selectedTab === 'listdocs'}
          renderIcon={() => <Icon style={{paddingBottom: 4 }} color={colors.grey2} name='list' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='list' size={26} />}
          onPress={() => this.changeTab('listdocs')}>
          <ListDocs changeTab={this.changeTab} />
        </Tab>

        <Tab
          selected={selectedTab === 'detailsdocs'}
          onPress={() => this.changeTab('detailsdocs')}>
          <DetailsDocs />
        </Tab>

        <Tab
          titleStyle={[styles.titleStyle, {marginTop: -1}]}
          selectedTitleStyle={[styles.titleSelected, {marginTop: -3, marginBottom: 7}]}
          title={selectedTab === 'about' ? 'ABOUT' : null}
          tabStyle={selectedTab !== 'about' && { marginBottom: -6}}
          selected={selectedTab === 'about'}
          renderIcon={() => <Icon style={{paddingBottom: 4 }} color={colors.grey2} name='question-answer' size={26} />}
          renderSelectedIcon={() => <Icon color={colors.primary} name='question-answer' size={26} />}
          onPress={() => this.changeTab('about')}>
          <About />
        </Tab>

      </Tabs>
    )
  }
}

styles = StyleSheet.create({
  titleStyle: {
    ...Platform.select({
      ios: {
        fontFamily: fonts.ios.black
      }
    })
  }
})

export default App
