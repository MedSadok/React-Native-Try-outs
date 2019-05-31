import React, { Component } from 'react';
import { StackNavigator, createAppContainer } from 'react-navigation';

import Profile from './src/profile';
import Login from './src/login';


const Application = StackNavigator({
  Home: { screen: Login },
  Profile: { screen: Profile }
  }, {
        navigationOptions: {
            header: false
  }
});

const MainApp = createAppContainer(Application);

export default class App extends Component {
  render() {
    return (
      <MainApp />
    );
  }
}
