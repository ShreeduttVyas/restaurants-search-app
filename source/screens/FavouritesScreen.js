import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import useUserprofile from "../Hooks/useUserprofile";
import { getAuth } from "firebase/auth";
import RestaurantItem from "../Components/HomeScreen/RestaurantItem";
import { useNavigation } from "@react-navigation/native";
import useFavorites from "../Hooks/useFavorites";

export default function FavouritesScreen() {
  const navigation = useNavigation();
  const [profileData, getProfile] = useUserprofile();
  const [data, searchFavRestaurant] = useFavorites();
  const user = getAuth().currentUser;

  const useHookForRid = (rid) => {
    searchFavRestaurant(rid);
  };
  useEffect(() => {
    if (user) {
      getProfile({ uid: user.uid });
    }
  }, []);

  useEffect(() => {
    if (user) {
      if (profileData) {
        useHookForRid(profileData.rid);
      }
    }
  }, []);

  if (data == null)
    return (
      <View style={styles.elseContainer}>
        <Text>No</Text>
      </View>
    );
  if (data == [])
    return (
      <View style={styles.elseContainer}>
        <Text>loading...</Text>
      </View>
    );

  return (
    data && (
      <>
        <View style={styles.container}>
          <Text style={styles.Header}>Favourites</Text>
          <FlatList
            data={data}
            keyExtractor={(restaurant) => restaurant.id}
            renderItem={({ item }) => {
              return (
                <RestaurantItem
                  restaurant={item}
                  navigation={navigation}
                  isFavourite={true}
                  StackTitle={"FavoriteStack"}
                />
              );
            }}
            showsVerticalScrollIndicator={false}
            initialNumToRender={1}
          />
        </View>
      </>
    )
  );
  // } else {
  //   return (
  //     <View style={styles.elseContainer}>
  //       <Text>Something Went Wrong...</Text>
  //     </View>
  //   );
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Header: {
    marginTop: 10,
    fontSize: 40,
    fontWeight: "bold",
  },
  elseContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
