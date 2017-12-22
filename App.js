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
import { connect } from 'react-redux';
import { addPlace, deletePlace } from './src/store/actions/placesAction';
 
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component {

  displayPlaceHandler = (value) => {
    this.props.onAddPlace(value);
  }

  deletePlaceHandler = (key) => {
    this.props.onAddPlace(key);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome
        </Text>
        <PlaceInput displayPlace={this.displayPlaceHandler} />
        <PlaceList places={this.props.places} deletePlace={this.deletePlaceHandler} />
      
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

const mapStateToProps = state => {
  return {
    places: state.placeReducer.places
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName) => dispatch(addPlace(placeName)),
    onDeletePlace: (key) => dispatch(deletePlace(key))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);