import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from '../../components/PlaceInput/PlaceInput';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';

import { addPlace } from '../../store/actions/index';

import HeadingText from '../../components/UI/HeadingText/HeadingText';
import MainText from '../../components/UI/MainText/MainText';

class SharePlaceScreen extends Component {
    state = {
        placeName: ""
    };
    
    constructor(props) {
        super(props);

        this.props.navigator.setOnNavigatorEvent(this.OnNavigatorEvent);
    }

    OnNavigatorEvent = event => {
        console.log(event);
        if (event.type === "NavBarButtonPress") {
            if (event.id === "sideDrawerToggle") {
                this.props.navigator.toggleDrawer({
                    side: "left"
                });
            }
        }
    }

    placeNameChangedHandler = placeName => {
        this.setState({
            placeName
        });
    };

    onAddPlace = () => {
        if (this.state.placeName.trim() !== "") {
            this.props.onAddPlace(this.state.placeName);
        }
    }

    render () {
        return(
            <ScrollView>
                <View style={styles.container}>
                    <MainText>
                        <HeadingText>Share a Place with us!</HeadingText>
                    </MainText>
                    <PickImage />
                    <PickLocation />
                    <PlaceInput
                        placeName={this.state.placeName}
                        onChangeText={this.placeNameChangedHandler}
                    />
                    <View style={styles.button}>
                        <Button title="Share the Place!"  onPress={this.onAddPlace}/>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    button: {
        margin: 8
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (name) => dispatch(addPlace(name))
    };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
