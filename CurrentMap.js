import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView from 'react-native-map-clustering'
import { Marker } from 'react-native-maps';

const initialRegion = {
  latitude: 37.1544583,
  longitude: 127.1738472,
  latitudeDelta: 0.25,
  longitudeDelta: 0.15
};

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style = {styles.map} initialRegion = {initialRegion}>
        <Marker coordinate = {{latitude: 37.1544583, longitude: 127.1738472}}></Marker>
        <Marker coordinate = {{latitude: 37.1298388, longitude: 127.1738472}}></Marker>
        <Marker coordinate = {{latitude: 37.1298388, longitude: 127.1738472}}></Marker>
        <Marker coordinate = {{latitude: 37.1291231, longitude: 127.1738472}}></Marker>
        <Marker coordinate = {{latitude: 37.1212313, longitude: 127.1738472}}></Marker>
       </MapView>
       <View style = {styles.sideBar}>
          <Text style = {styles.text}>Menu Bar</Text>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1}
    ,
  map: {
    flex: 8
  }, 
  sideBar: {
    flex: 1,
    backgroundColor: "#ffffff",
    backgroundColor: "rgba( 255, 255, 255, 0.5 )"
  },
  text: {
    color: "black",
    fontSize: 20,
    textAlign: "center"
  }
});
