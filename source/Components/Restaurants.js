import React, { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import useRestaurants from "../Hooks/useRestaurants";


export default function Restaurants({ term }){
    const[{data, loading, error}, searchRestaurants] = useRestaurants();

    useEffect( () => {
            searchRestaurants(term);
        }, [term]);
    
    console.log({ data: data, loading, error });

    if (loading) return <ActivityIndicator size="large"  marginVertival={30}/>

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