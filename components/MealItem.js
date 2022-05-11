import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import React from "react";
import { Colors } from "../themes/Colors";

export default function MealItem({ data }) {
  const { title, imageUrl, duration, complexity, affordability } = data;
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: Colors.gray }}
        style={({ pressed }) => (pressed ? styles.iosPressed : null)}
      >
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{duration}m</Text>
          <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    borderRadius: 8,
    margin: 16,
    backgroundColor: Colors.light,
    elevation: 4,
    shadowColor: Colors.dark,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 6,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  image: {
    width: "100%",
    height: 200,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailItem: {
    padding: 8,
    marginHorizontal: 10,
    fontSize: 14,
  },
  iosPressed: {
    opacity: 0.5,
  },
});
