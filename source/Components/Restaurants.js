import React, { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from "react-native";
import useRestaurants from "../Hooks/useRestaurants";
import RestaurantItem from "./RestaurantItem";


export default function Restaurants({ term }){
    const[{data, loading, error}, searchRestaurants] = useRestaurants();

    useEffect( () => {
            searchRestaurants(term);
        }, [term]);
    
    console.log({data: data, loading, error });

    if (loading) return <ActivityIndicator size="large"  marginVertival={30}/>

    if(error) return(
        <View style={styles.conatiner} >
            <Text style={styles.header}>{error}</Text>
        </View>
    );

    return(
       <View style={styles.conatiner}>
            <Text style={styles.header}>Top Restaurants</Text>
            <FlatList
                data={data}
                keyExtractor ={(restaurant) => restaurant.id}
                renderItem={({item}) => (
                   <RestaurantItem restaurant={item}/>
                )}
                showsVerticalScrollIndicator = {false}
                initialNumToRender={20}
            />
       </View>
    );
}

const styles = StyleSheet.create({
    conatiner:{
        marginHorizontal: 25,
        marginVertical: 15,
        paddingBottom: 50
    },
    header:{
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 10,
        
    }
})