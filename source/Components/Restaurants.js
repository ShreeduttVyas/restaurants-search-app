import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Restaurants(){
    return(
       <View style={styles.conatiner} >
            <Text style={styles.header}>Top Restaurants</Text>
       </View>
    );
}

const styles = StyleSheet.create({
    conatiner:{
        marginHorizontal: 25,
        MarginTop: 15,
        flex: 1,
    },
    header:{
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 10,
        height: 100,
    }
})