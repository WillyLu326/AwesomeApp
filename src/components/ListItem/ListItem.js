import React from 'react';
import { Text } from 'react-native';

const ListItem = (props) => {
  return (
    <Text>{props.name}</Text>
  );
}

export default ListItem;