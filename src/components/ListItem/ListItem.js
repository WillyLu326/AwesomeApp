import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.name}</Text>
    </View>
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