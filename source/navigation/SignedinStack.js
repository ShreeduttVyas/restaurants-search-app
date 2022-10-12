import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import RestaurantScreen from "../screens/RestaurantScreen";
import DrawerNavigator from "../navigation/DrawerNavigator";
const Stack = createNativeStackNavigator();
const SignedinStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="drawer"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      <Stack.Screen name="drawer" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default SignedinStack;
