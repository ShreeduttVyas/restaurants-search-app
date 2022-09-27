import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { elevation } from "../Shared/Styles";


export default function CategoryItem(){
    return(
        <View style={[styles.container,elevation]}>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image}
                    source={require("../../assets/burger.png")}
                />
            </View>
            <Text style={styles.header}>Burger</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 100,
        borderRadius: 50,
        marginVertical: 15,
        marginHorizontal: 25,
        backgroundColor: "rgb(241,186,87)",
        alignItems: "center",
        justifyContent: "center",
    },
    image:{
        width: 35,
        height: 35,
    },
    imageContainer:{
        width: 50,
        height: 50,
        backgroundColor: "white",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    },
    header: {
        fontWeight: "bold"
    }
})