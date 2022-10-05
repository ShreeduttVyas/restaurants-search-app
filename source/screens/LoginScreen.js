import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import Loginform from '../Components/login/Loginform';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logocontainer}>
        <Image source={require("../../assets/burger.png")} style={styles.logo} />
      </View>
      <Loginform />
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