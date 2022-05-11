import { View, Text, FlatList } from "react-native";
import React from "react";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
export default function CategoryScreen({ navigation }) {
  function renderedCategoryItem(itemData) {
    const onPressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    };
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPressHandler}
      />
    );
  }

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderedCategoryItem}
        numColumns={2}
      />
    </View>
  );
}
