import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

class PlaceInput extends React.Component {

  state = {
    text: ''
  }

  textChangeHandler = value => {
    this.setState({ text: value });
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.placeInput}
          placeholder="Awesome Input"
          value={this.state.text}
          onChangeText={this.textChangeHandler}
        />
        <Button
          style={styles.placeButton}
          title="Add"
          onPress={() => this.props.displayPlace(this.state.text)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  }
});

export default PlaceInput;