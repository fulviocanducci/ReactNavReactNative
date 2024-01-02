import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Gallery() {
  return (
    <View style={styles.container}>
      <Text>Gallery Works</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
});
