import React, { Component } from 'react';
import {Text,
        StyleSheet,
        View,
      } from 'react-native';

class Profile extends Component {
  render(){
    return(
      <View style = { styles.container }>
        <Text style = { styles.header }>Welcome to the Member Area !</Text>
      </View>
    );
  }
}

const styles= StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2896d3',
    paddingLeft: 40,
    paddingRight:40
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 60,
    color: '#fff'
  }
});


export default Profile;
