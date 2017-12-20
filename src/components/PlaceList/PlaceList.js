import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from './../ListItem/ListItem';

const PlaceList = (props) => {

  return (
    <FlatList 
      style={styles.placeList}
      data={props.places}
      renderItem={(info) => {
        return (
          <ListItem
            name={info.item.name}
            deleteItem={() => props.deletePlace(info.item.key)}>
          </ListItem>
        );
      }}>
    </FlatList>
  );
}

const styles = StyleSheet.create({
  placeList: {
    width: '100%'
  }
});

export default PlaceList;