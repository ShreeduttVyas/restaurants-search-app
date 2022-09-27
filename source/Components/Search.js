import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Fontisto } from "@expo/vector-icons"

const Search = () => {
    return(
        <View style={styles.container}>
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
        shadowColor: "black",
        shadowOffset: {width: 5, height: 5 },
        elevation: 3,
        shadowOpacity: 0.1,
        padding: 15,
        borderRadius: 40,
    },
    input :{
        fontSize: 20,
        marginLeft: 10
    }
})