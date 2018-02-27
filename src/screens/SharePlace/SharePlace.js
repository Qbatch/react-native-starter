import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from '../../components/Input/PlaceInput';
import { addPlace } from '../../store/actions/index';

class SharePlaceScreen extends Component {
    onAddPlace = (place) => {
        this.props.onAddPlace (place)
    }
    render () {
        return(
            <View>
                <PlaceInput onAddPlace={this.onAddPlace} />
            </View>
        );
    }
}

  
const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (name) => dispatch(addPlace(name))
    };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
