import { View, FlatList, StyleSheet } from "react-native";
import React from "react";

import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

export default function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;
  const diplayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  const renderedItems = (itemData) => {
    return <MealItem data={itemData.item} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={diplayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderedItems}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
