import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import CategoryItem from './source/Components/CategoryItem';
import Header from './source/Components/Header';
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
      <Search />
      <FlatList
        data = {commonCategories}
        renderItem = { ({ item, index }) => {
          return(
            <CategoryItem 
              name={item.name} 
              imageUrl={item.imageUrl} 
              index={index} 
              active={item.name === term }
              handlePress={() => setTerm(item.name)}
            />
          )
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category.name}
      />
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
