import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import PlaceOutput from '../../components/Output/PlaceList';

class FindPlaceScreen extends Component {
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
