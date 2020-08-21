import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default function Map({ lon}) {
  return (
    <View style={styles.container}>
      <Text>{lon}</Text>
      <Text>{`😎😎😎😎😎`}</Text>
    </View>
  );
}

Map.propTypes = {
  lon: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});