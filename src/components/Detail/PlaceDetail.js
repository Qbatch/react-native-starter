import React from 'react';
import { StyleSheet, Modal, View, Image, Text, Button } from 'react-native';

const PlaceDetail = props => {
    let modalContent = null;
    
    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image style={styles.image} source={props.selectedPlace.image} />
                <Text style={styles.name}>{props.selectedPlace.name}</Text>
            </View>
        );
    }
    return (
        <Modal onRequestClose={props.onModalClosed} visible={props.selectedPlace !== null} animationType ="slide">
            <View style={styles.modalContainer}>
                {modalContent}
                <View>
                    <Button title="Delete" color="red" onPress={props.onItemDeleted} />
                    <Button title="Close" onPress={props.onModalClosed}/>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
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

export default PlaceDetail;
