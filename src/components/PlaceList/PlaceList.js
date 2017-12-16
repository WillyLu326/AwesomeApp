import React from 'react';
import { View } from 'react-native';

import ListItem from './../ListItem/ListItem';

const PlaceList = (props) => {
  const places = props.places.map((place, index) => {
    return (
      <ListItem key={index} name={place}></ListItem>
    );
  })

  return (
    <View>{places}</View>
  );
}

export default PlaceList;