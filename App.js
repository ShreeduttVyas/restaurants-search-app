import { StatusBar } from 'expo-status-bar';
import React,{ useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Categories from './source/Components/Categories';

import Header from './source/Components/Header';
import Restaurants from './source/Components/Restaurants';
import Search from './source/Components/Search';

export default function App() {
  const [term, setTerm] = useState("")
  const commonCategories= [
    {
      name : "Burger",
      imageUrl: require("./assets/burger.png"),
    },
    {
      name : "Pizza",
      imageUrl: require("./assets/pizza.png"),
    },
    {
      name : "Dessert",
      imageUrl: require("./assets/cake.png"),
    },
    {
      name : "Drinks",
      imageUrl: require("./assets/smoothies.png"),
    },
    {
      name : "Steak",
      imageUrl: require("./assets/steak.png"),
    },
    {
      name : "Pasta",
      imageUrl: require("./assets/pasta.png"),
    }
  ]
  return (
    <View >
      <Header />
      <Search 
        setTerm = {setTerm}
      />
      <Categories categories={commonCategories } term={term} setTerm={setTerm}  />
      <Restaurants term={term} />
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
