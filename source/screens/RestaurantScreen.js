import React, { useEffect } from "react";
import { FlatList, Text, View, Image, Dimensions } from "react-native";
import useRestaurant from "../Hooks/useRestaurant";


export default function RestaurantScreen({ navigation }){
    const id = navigation.getParam("id");
    const [{data,loading,error}, searchRestaurant] = useRestaurant();
    console.log(id);
    const dimensions = Dimensions.get("window")
    const imageWidth = dimensions.width
    const imageHeight = Math.round((dimensions * 9)/16)
    useEffect(() => {
        searchRestaurant(id);
    },[]);

    if(loading) return <Text>Loading...</Text>

    if(error) return <Text>{error}</Text>
    console.log({data,loading,error});
    return( 
            <View>
                {Data && (
                    <FlatList 
                        data = {data.photos}
                        keyExtractor={(photo) => photo}
                        renderItem = {(item) => 
                            <Image source={{uri:item}}  style={{height: imageHeight, width: imageWidth}}/> }
                    />
                )}
             </View>
    );
}
