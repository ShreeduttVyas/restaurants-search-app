import React from "react";
import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import HomeScreen from "./source/screens/HomeScreen"
import RestaurantScreen from "./source/screens/RestaurantScreen";

const navigator = createStackNavigator({
    Home: HomeScreen, 
    Restaurant: RestaurantScreen
  }, {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Bussiness Search"
    }
})

export default createAppContainer(navigator);
