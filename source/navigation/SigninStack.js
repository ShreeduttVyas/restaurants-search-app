import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import React from "react";
import HomeScreen from '../screens/HomeScreen';
import RestaurantScreen from '../screens/RestaurantScreen'

const Stack = createNativeStackNavigator();

const SigninStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="Home" component={HomeScreen} options={{
                headerShown: false,
            }} />
               <Stack.Screen name="Restaurant" component={RestaurantScreen} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="Signup" component={SignupScreen} options={{
                headerShown: false,
            }}/>
        </Stack.Navigator>
    )
}

export default SigninStack;