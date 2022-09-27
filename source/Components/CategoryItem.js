import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { elevation } from "../Shared/Styles";


export default function CategoryItem({name, imageUrl,index}){
    return(
        <View style={[styles.container,elevation, index == 0 ? {marginleft: 25} : {marginRight: 25}]}>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image}
                    source={imageUrl}
                />
            </View>
            <Text style={styles.header}>{name}</Text>
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
        backgroundColor: "white",
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