import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const listItem = (props) => (
  <TouchableOpacity onPress={props.onItemSelected}>
    <View style={styles.listItem}>
      <Image style={styles.image} resizeMode="cover" source={props.image} />
      <Text>{props.name}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
      width: "100%",
      padding: 10,
      backgroundColor: '#eee',
      marginBottom: 5,
      flexDirection: "row",
      alignItems: "center"
    },
    image: {
      margin: 8,
      width: 30,
      height: 30
    }
  });

export default listItem;
