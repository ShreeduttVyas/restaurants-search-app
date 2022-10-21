//import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DrawerNavigator from "./DrawerNavigator";
import ProfileScreen from "../screens/ProfileScreen";
import FavouritesScreen from "../screens/FavouritesScreen";
import { StyleSheet, View, Text } from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
const BottomTab = () => {
  const BottomTab = createBottomTabNavigator();
  const ACTIVE_ICON_SIZE = 25;
  const INACTIVE_ICON_SIZE = 20;
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
      initialRouteName={"Home"}
    >
      <BottomTab.Screen
        name="Home"
        component={DrawerNavigator}
        options={{
          tabBarActiveTintColor: "rgb(241,186,87)",
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <View style={styles.tabBarContainer}>
                <MaterialCommunityIcons
                  name="home"
                  color={color}
                  size={ACTIVE_ICON_SIZE}
                />
                <Text style={styles.activeLabelStyle}>Home</Text>
              </View>
            ) : (
              <View style={styles.tabBarContainer}>
                <MaterialCommunityIcons
                  name="home"
                  color={color}
                  size={INACTIVE_ICON_SIZE}
                />
                <Text style={styles.inactiveLabelStyle(color)}>Home</Text>
              </View>
            ),
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={FavouritesScreen}
        options={{
          tabBarActiveTintColor: "rgb(241,186,87)",
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <View style={styles.tabBarContainer}>
                <AntDesign name="staro" color={color} size={ACTIVE_ICON_SIZE} />
                <Text style={styles.activeLabelStyle}>Favorites</Text>
              </View>
            ) : (
              <View style={styles.tabBarContainer}>
                <AntDesign
                  name="staro"
                  color={color}
                  size={INACTIVE_ICON_SIZE}
                />
                <Text style={styles.inactiveLabelStyle(color)}>Favorites</Text>
              </View>
            ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarActiveTintColor: "rgb(241,186,87)",
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <View style={styles.tabBarContainer}>
                <FontAwesome
                  name="user-circle-o"
                  color={color}
                  size={ACTIVE_ICON_SIZE}
                />
                <Text style={styles.activeLabelStyle}>Profile</Text>
              </View>
            ) : (
              <View style={styles.tabBarContainer}>
                <FontAwesome
                  name="user-circle-o"
                  color={color}
                  size={INACTIVE_ICON_SIZE}
                />
                <Text style={styles.inactiveLabelStyle(color)}>Profile</Text>
              </View>
            ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    alignItems: "center",
  },
  activeLabelStyle: {
    fontSize: 10,
    color: "rgb(241,186,87)",
    marginTop: 3,
  },
  inactiveLabelStyle: (color) => ({ fontSize: 8, color: color, marginTop: 3 }),
});
export default BottomTab;
