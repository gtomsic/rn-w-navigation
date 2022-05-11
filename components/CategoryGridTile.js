import { View, Text, Pressable, StyleSheet, Platform } from "react-native";
import React from "react";
import { Colors } from "../themes/Colors";

export default function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: Colors.gray }}
        style={({ pressed }) => [
          styles.pressabbleStyle,
          pressed ? styles.iosPressed : null,
        ]}
      >
        <View style={[styles.innerGridItem, [{ backgroundColor: color }]]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: Colors.dark,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  pressabbleStyle: {
    flex: 1,
  },
  iosPressed: {
    opacity: 0.5,
  },
  innerGridItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: Colors.dark,
  },
});
