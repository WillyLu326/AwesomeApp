/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Button,
  FlatList,
  View
} from 'react-native';

import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  state = {
    places: []
  }

  displayPlaceHandler = (value) => {
    this.setState({ 
      places: this.state.places.concat({ key: Math.random(), name: value }),
     });
  }

  deletePlaceHandler = (key) => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((item) => item.key !== key)
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome
        </Text>
        <PlaceInput displayPlace={this.displayPlaceHandler} />
        <PlaceList places={this.state.places} deletePlace={this.deletePlaceHandler} />
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
