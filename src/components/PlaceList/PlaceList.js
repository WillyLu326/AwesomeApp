import React from 'react';
import { View, StyleSheet } from 'react-native';

import ListItem from './../ListItem/ListItem';

const PlaceList = (props) => {
  deleteItemHandler = (index) => {
    alert(index);
  }

  const places = props.places.map((place, index) => {
    return (
      <ListItem 
        key={index} 
        name={place} 
        deleteItem={() => deleteItemHandler(index)}>
      </ListItem>
    );
  })

  return (
    <View style={styles.placeList}>{places}</View>
  );
}

const styles = StyleSheet.create({
  placeList: {
    width: '100%'
  }
});

export default PlaceList;