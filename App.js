import React from "react";
import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import HomeScreen from "./source/screens/HomeScreen"
import RestaurantScreen from "./source/screens/RestaurantScreen";
import LoginScreen from "./source/screens/LoginScreen";

const navigator = createStackNavigator({
    Login: LoginScreen,
    Home: HomeScreen, 
    Restaurant: RestaurantScreen
  }, {
     initialRouteName: "Login",
    // defaultNavigationOptions: {
    //   title: "Bussiness Search"
    // }
})

export default createAppContainer(navigator);

0.