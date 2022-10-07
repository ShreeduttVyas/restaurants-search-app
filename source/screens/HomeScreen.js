import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import Categories from "../Components/HomeScreen/Categories";
import Header from "../Components/HomeScreen/Header";
import Restaurants from "../Components/HomeScreen/Restaurants";
import Search from "../Components/HomeScreen/Search";

const HomeScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const commonCategories = [
    {
      name: "Burger",
      imageUrl: require("../../assets/burger.png"),
    },
    {
      name: "Pizza",
      imageUrl: require("../../assets/pizza.png"),
    },
    {
      name: "Dessert",
      imageUrl: require("../../assets/cake.png"),
    },
    {
      name: "Drinks",
      imageUrl: require("../../assets/smoothies.png"),
    },
    {
      name: "Steak",
      imageUrl: require("../../assets/steak.png"),
    },
    {
      name: "Pasta",
      imageUrl: require("../../assets/pasta.png"),
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <Search setTerm={setTerm} />
      <Categories categories={commonCategories} term={term} setTerm={setTerm} />
      <View style={styles.restaurantView}>
        <Restaurants term={term} navigation={navigation} />
      </View>
    </View>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "rgb(253,253,253)",
  },
  restaurantView: {
    flex: 1,
  },
});
