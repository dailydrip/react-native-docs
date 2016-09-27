import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Drawer from './Drawer/Drawer';
import Main from './Main'
import DetailsDocs from './DetailsDocs/DetailsDocs'

class App extends Component {
  static propTypes = {}
  static defaultProps = {}

  render() {
    return (
      <Router>
        <Scene key="drawer" component={Drawer} open={false} >
          <Scene key="root">
            <Scene key="Main" component={Main} title="" initial />
            <Scene key="DetailsDocs" component={DetailsDocs} title="" />
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default App;