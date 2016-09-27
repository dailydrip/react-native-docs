import React, { PropTypes } from 'react';
import { StyleSheet, View, AsyncStorage } from 'react-native';
import Button from 'react-native-button';
import { Actions as RouterActions } from 'react-native-router-flux';
import { connect } from 'react-redux';

const contextTypes = {
  drawer: React.PropTypes.object,
};

const propTypes = {
  name: PropTypes.string,
  sceneStyle: View.propTypes.style,
  title: PropTypes.string,
  topics: PropTypes.arrayOf(
    PropTypes.shape(
      {
        title: PropTypes.string.isRequired,
      }
    )
  ),
};

const styles = StyleSheet.create({
  container: {
    marginTop: 90,
    height: 400,
    backgroundColor: 'red',
  },
  navLink: {
    color: '#ffffff',
    textAlign: 'left',
    padding: 10,
  },
});

const TabView = (props, context) => {
  const drawer = context.drawer;
  const topics = props.topics || [];

  let topicButtons = topics.map((topic, i) => {
    let onButtonPress = () => {
      drawer.close();
      RouterActions.topicScreen({ topic });
    };
    return <Button style={styles.navLink} key={i} onPress={onButtonPress}>{topic.title}</Button>;
  });

  return (
    <View style={[styles.container, props.sceneStyle]}>
      <Button style={styles.navLink} onPress={() => { drawer.close(); RouterActions.mainScreen({ type: 'reset' }); }}>Home</Button>
      {topicButtons}
      <Button style={styles.navLink} onPress={() => { drawer.close(); RouterActions.settingsScreen({ type: 'reset' }); }}>Settings</Button>
      <Button style={styles.navLink} onPress={() => { drawer.close(); RouterActions.loginScreen({ type: 'reset' }); }}>Logout</Button>
    </View>
  );
};

TabView.contextTypes = contextTypes;
TabView.propTypes = propTypes;


export default TabView;