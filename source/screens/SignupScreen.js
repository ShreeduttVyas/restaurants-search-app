import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import SignupForm from '../Components/Signup/SignupForm';

export default function SignupScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logocontainer}>
        <Image source={require("../../assets/burger.png")} style={styles.logo} />
      </View>
    <SignupForm /> 
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex : 1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12,
    },
    logocontainer:{
        alignItems: "center",
        marginTop: 60,
        overlayColor: 'grey',
        tintColor: 'blue',
        backgroundColor: 'white',
    },
    logo: {
        height: 100,
        width: 100,
        borderRadius: 20
    }
})