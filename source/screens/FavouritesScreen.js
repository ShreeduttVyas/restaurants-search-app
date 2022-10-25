import { View, Text, FlatList, StyleSheet, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import useUserprofile from "../Hooks/useUserprofile";
import { getAuth } from "firebase/auth";
import RestaurantItem from "../Components/HomeScreen/RestaurantItem";
import { useNavigation } from "@react-navigation/native";
import useFavorites from "../Hooks/useFavorites";

export default function FavouritesScreen() {
  const navigation = useNavigation();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [profileData, getProfile] = useUserprofile();
  const [data, searchFavRestaurant] = useFavorites();
  const user = getAuth().currentUser;

  const useHookForRid = (rid) => {
    searchFavRestaurant(rid);
    console.log("HOOK");
  };
  const onRefresh = React.useCallback(() => {
    setIsRefreshing(true);
    if (user) {
      getProfile({ uid: user.uid });
      if (profileData) {
        console.log(profileData.rid);
        setIsRefreshing(true);
        useHookForRid(profileData.rid);
      }
    }
    setIsRefreshing(false);
  }, []);

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
  }, [profileData]);

  if (data == null)
    return (
      <View style={styles.container}>
        <Text style={styles.Header}>Favourites</Text>
        <View style={styles.elseContainer}>
          <Text>loading...</Text>
        </View>
      </View>
    );

  return (
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
          ListEmptyComponent={() => (
            <View style={styles.elseContainer}>
              <Text>
                Looks like you dont have any favourite restaurant yet...
              </Text>
              <Text>Add a restaurant and refresh</Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          initialNumToRender={1}
          refreshControl={
            <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </>
  );
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
