import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

import ListItem from '../ListItem/ListItem';

class InputPlace extends React.Component {
    state = {
      place: ""
    }

    onTextChanged = (place) => {
        this.setState({
          place
        });
    }
    
    addPlace = () => {
        const { place } = this.state;

        if (place.trim() === "")
            return;

        this.props.onAddPlace(place);
    }

    render() {
        const { place } = this.state;

        return (
            <View style={styles.inputContainer}>
                <TextInput
                style={{ width: 350 }}
                placeholder="Enter Place"
                value={place}
                onChangeText={this.onTextChanged}
                style={styles.placeInput}
                />

                <Button
                title="Add"
                onPress={() => this.addPlace()}
                style={styles.placeButton}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
});

export default InputPlace;
