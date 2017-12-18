import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

const ListItem = (props) => {
  return (
    <TouchableHighlight onPress={props.deleteItem}>
      <View style={styles.listItem}>
        <Text>{props.name}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    backgroundColor: '#eeeeee',
    padding: 10,
    marginBottom: 5
  }
});

export default ListItem;