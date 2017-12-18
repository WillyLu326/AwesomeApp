import React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const ListItem = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.deleteItem}>
      <View style={styles.listItem}>
        <Text>{props.name}</Text>
      </View>
    </TouchableWithoutFeedback>
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