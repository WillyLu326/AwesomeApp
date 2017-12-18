import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = (props) => {
  return (
    <TouchableOpacity>
      <View style={styles.listItem}>
        <Text>{props.name}</Text>
      </View>
    </TouchableOpacity>
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