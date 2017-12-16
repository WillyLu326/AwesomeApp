import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ListItem = (props) => {
  return (
    <View>
      <Text>{props.name}</Text>
    </View>
  );
}

export default ListItem;