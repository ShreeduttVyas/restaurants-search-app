import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Fontisto } from "@expo/vector-icons"
import { elevation } from "../Shared/Styles";
const Search = ({setTerm}) => {
    const [input,setInput] = useState("")

    const handleEndEditing = () => {
        if(!input) return
        setTerm(input)
        setInput("")
    }

    return(
        <View style={[styles.container, elevation]}>
            <Fontisto name="search" size={25}/>
            <TextInput 
                placeholder="Restaurants, food"  
                style={styles.input}
                onChangeText = { (text) => {setInput(text); setTerm(text)}}
                onEndEditing = {handleEndEditing}
                value={input}
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