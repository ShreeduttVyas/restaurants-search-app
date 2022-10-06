import React from "react";
import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import HomeScreen from "./source/screens/HomeScreen"
import RestaurantScreen from "./source/screens/RestaurantScreen";
import LoginScreen from "./source/screens/LoginScreen";
import SignupScreen from "./source/screens/SignupScreen";

const navigator = createStackNavigator({
    Login: LoginScreen,
    Signup: SignupScreen,
    Home: HomeScreen,
    Restaurant: {
      screen: RestaurantScreen,
      navigationOptions: {
          title : "Restaurant"
        }
    }
  }, {
     initialRouteName: "Signup",
    // defaultNavigationOptions: {
    //   title: "Bussiness Search"
    // }
})

export default createAppContainer(navigator);