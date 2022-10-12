import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import SignOutScreen from "../screens/SignOutScreen";
import { createAppContainer } from "react-navigation";
import SignedinStack from "./SignedinStack";
import HomeScreen from "../screens/HomeScreen";

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeScreen" component={SignedinStack} />
      <Drawer.Screen name="Sign Out" component={SignOutScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
