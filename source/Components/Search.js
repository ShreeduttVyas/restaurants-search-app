import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Fontisto } from "@expo/vector-icons"
import { elevation } from "../Shared/Styles";
const Search = () => {
    return(
        <View style={[styles.container, elevation]}>
            <Fontisto name="search" size={25}/>
            <TextInput 
                placeholder="Restaurants, food"  
                style={styles.input}
            />
        </View>
    )
}
export default Search;

 const styles = StyleSheet.create({
    container :{
        flexDirection: "row",
        marginTop: 5,
        marginHorizontal: 5,
        backgroundColor: "white",
        padding: 15,
        borderRadius: 40,
    },
    input :{
        fontSize: 20,
        marginLeft: 10
    }
})