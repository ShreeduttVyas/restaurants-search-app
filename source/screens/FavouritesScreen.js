import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import useUserprofile from "../Hooks/useUserprofile";
import { getAuth } from "firebase/auth";
import RestaurantItem from "../Components/HomeScreen/RestaurantItem";
import useRestaurant from "../Hooks/useRestaurant";
import { async } from "@firebase/util";

export default function FavouritesScreen() {
  const [profileData, getProfile] = useUserprofile();
  const [{ restaurant, loading, error }, searchRestaurant] = useRestaurant();
  useEffect(() => {
    const user = getAuth().currentUser;
    if (user) {
      getProfile({ uid: user.uid });
    }
  }, []);

  if (profileData) {
    const add = async (rid) => {
      let e = [];
      await Promise.all(
        rid.map((id, index) => {
          e.push(index);
          //  await searchRestaurant(id);
          //  return restaurant;
        })
      );
      return e;
    };
    let data = null;
    const getData = async () => {
      data = await add(profileData.rid);
    };
    getData();
    return (
      <View style={styles.container}>
        <Text style={styles.Header}>Favourites</Text>
        <FlatList
          data={data}
          keyExtractor={(restaurant) => restaurant}
          renderItem={({ item }) => {
            <RestaurantItem
              restaurant={item}
              navigation={navigation}
              isFavourite={true}
            />;
          }}
          showsVerticalScrollIndicator={false}
          initialNumToRender={20}
        />
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Something Went Wrong...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  Header: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
