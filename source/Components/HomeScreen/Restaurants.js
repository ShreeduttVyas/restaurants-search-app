import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";
import useRestaurants from "../../Hooks/useRestaurants";
import RestaurantItem from "./RestaurantItem";
import useUserprofile from "../../Hooks/useUserprofile";
import { getAuth } from "firebase/auth";

function ceckFav(id, Rid) {
  let checker = false;
  Rid.map((rid, index) => {
    if (rid == id) {
      checker = true;
    }
  });
  return checker;
}

export default function Restaurants({ term, navigation, Screenop }) {
  //
  const [profileData, getProfile] = useUserprofile();

  useEffect(() => {
    const user = getAuth().currentUser;
    if (user) {
      getProfile({ uid: user.uid });
    }
  }, [term]);
  //
  // if (Screenop == "Home") {
  const [{ data, loading, error }, searchRestaurants] = useRestaurants();
  // }
  // if (Screenop == "Fav") {
  //   const [profileData, getProfile] = useUserprofile();
  //   const user = getAuth().currentUser;
  //   useEffect(() => {
  //     if (user) {
  //       getProfile({ uid: user.uid });
  //     }
  //   }, []);
  // }

  useEffect(() => {
    searchRestaurants(term);
  }, [term]);
  //console.log({ data, loading, error });

  if (loading) return <ActivityIndicator size="large" marginVertival={30} />;

  if (error)
    return (
      <View style={styles.conatiner}>
        <Text style={styles.header}>{error}</Text>
      </View>
    );

  if (data && profileData) {
    return (
      <View style={styles.conatiner}>
        <Text style={styles.header}>Top Restaurants</Text>
        <FlatList
          data={data}
          keyExtractor={(restaurant) => restaurant.id}
          renderItem={({ item }) => {
            if (ceckFav(item.id, profileData.rid))
              return (
                <RestaurantItem
                  restaurant={item}
                  navigation={navigation}
                  isFavourite={true}
                />
              );
            return (
              <RestaurantItem
                restaurant={item}
                navigation={navigation}
                isFavourite={false}
              />
            );
          }}
          showsVerticalScrollIndicator={false}
          initialNumToRender={20}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conatiner: {
    marginHorizontal: 25,
    marginVertical: 15,
    paddingBottom: 20,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
  },
});
