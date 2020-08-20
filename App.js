import React from 'react';
import { StyleSheet, View } from 'react-native';
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1}
    ,
  map: {
    width: "100%",
    height: "100%"
  }
});
