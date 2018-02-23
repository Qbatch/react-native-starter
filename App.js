import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import InputPlace from './src/components/Input/PlaceInput';
import PlaceDetail from './src/components/Detail/PlaceDetail';
import OutputPlaces from './src/components/Output/PlaceList';

import Image from './src/assets/clouds.jpeg';

import { addPlace, deletePlace, selectPlace, unselectPlace } from './src/store/actions/index';

class App extends React.Component {
  componentWillMount () {
    console.log(this.props);
  }

  componentWillReceiveProps (nextProps) {
    console.log(nextProps);
  }
  
  onAddPlace = (placeName) => {
    this.props.onAddPlace(placeName);
  }

  onItemDeleted = () => {
    this.props.onDeletePlace();
  }

  onItemSelected = (key) => {
    this.props.onSelectPlace(key);
  }

  onModalClosed = () => {
    this.props.onUnsellectPlace();
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.onItemDeleted}
          onModalClosed={this.onModalClosed}
        />
        <InputPlace onAddPlace={this.onAddPlace} />
        <OutputPlaces places={this.props.places}
        onItemSelected={this.onItemSelected}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});

const mapStateToProps = state => {
  return {
    places: state.placesData.places,
    selectedPlace: state.placesData.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onUnsellectPlace: () => dispatch(unselectPlace())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
