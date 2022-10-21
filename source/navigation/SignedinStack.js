import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { RotateInUpLeft } from "react-native-reanimated";
import HomeScreen from "../screens/HomeScreen";
import RestaurantScreen from "../screens/RestaurantScreen";
const Stack = createNativeStackNavigator();

const SignedinStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false, swipeEnabled: false }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
    </Stack.Navigator>
  );
};

export default SignedinStack;
