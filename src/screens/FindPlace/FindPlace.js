import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import PlaceOutput from '../../components/Output/PlaceList';

class FindPlaceScreen extends Component {
    onItemSelected = (key) => {
        const selPlace = this.props.places.find(place => {
            return place.key === key;
        });

        this.props.navigator.push({
            screen: "react-native-starter.PlaceDetailScreen",
            title: selPlace.name,
            passProps: {
                selectedPlace: selPlace 
            }
        });
    }

    render () {
        return(
            <View>
                <PlaceOutput places={this.props.places}
                onItemSelected={this.onItemSelected}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
      places: state.placesData.places,
      selectedPlace: state.placesData.selectedPlace
    };
};

export default connect(mapStateToProps, null)(FindPlaceScreen);
