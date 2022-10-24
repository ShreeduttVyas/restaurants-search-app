import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import FavouritesScreen from "../screens/FavouritesScreen";
import HomeScreen from "../screens/HomeScreen";
import RestaurantScreen from "../screens/RestaurantScreen";
const Stack = createNativeStackNavigator();

const SignedinStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Favorite"
      screenOptions={{ headerShown: false, swipeEnabled: false }}
    >
      <Stack.Screen name="Favorite" component={FavouritesScreen} />
      <Stack.Screen
        name="RestaurantfromFavorite"
        component={RestaurantScreen}
      />
    </Stack.Navigator>
  );
};

export default SignedinStack;
