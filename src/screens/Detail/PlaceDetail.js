import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, Button } from 'react-native';
import { connect } from 'react-redux';

import { deletePlace } from '../../store/actions/index';

class PlaceDetail extends Component {
    onItemDeleted = () => {
        this.props.onDeletePlace(this.props.selectedPlace.key);
        this.props.navigator.pop();
    }

    render () {
        return (
            <View style={styles.container}>
                <View>
                    <Image style={styles.image} source={this.props.selectedPlace.image} />
                    <Text style={styles.name}>{this.props.selectedPlace.name}</Text>
                </View>
                <View>
                    <Button title="Delete" color="red" onPress={this.onItemDeleted} />
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        margin: 22
    },
    image: {
        width: "100%",
        height: 200
    },
    name: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onDeletePlace: (key) => dispatch(deletePlace(key))
    };
};

export default connect(null, mapDispatchToProps)(PlaceDetail);
