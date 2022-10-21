import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { elevation } from "../../SharedStyles/Styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  AddFirestore_rid,
  DeleteFirestore_rid,
} from "../../Hooks/useCreateUser";
import { getAuth } from "firebase/auth";

function RestaurantItem({ restaurant, navigation, isFavourite }) {
  const [fav, setFav] = useState(isFavourite);
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Restaurant", { id: restaurant.id })}
        style={[styles.container, elevation]}
      >
        <Image source={{ uri: restaurant.image_url }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.header}>{restaurant.name}</Text>
          <View style={styles.info}>
            <Text style={styles.rating}>{restaurant.rating} stars</Text>
            <Text style={styles.money}>{restaurant.price}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setFav(!fav);
          const user = getAuth().currentUser;
          if (user) {
            !fav
              ? AddFirestore_rid(user.uid, restaurant.id)
              : DeleteFirestore_rid(user.uid, restaurant.id);
          }
        }}
        style={{
          position: "absolute",
          right: 50,
          bottom: 20,
          height: 36,
          width: 56,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View>
          <MaterialCommunityIcons
            name={fav ? "bookmark-check-outline" : "bookmark-plus-outline"}
            size={30}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 100,
    alignSelf: "stretch",
    marginLeft: 1,
    marginRight: 3,
    borderRadius: 50,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginLeft: 10,
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  info: {
    flexDirection: "row",
  },
  rating: {
    marginRight: 20,
  },
  money: {
    color: "gold",
  },
});

export default RestaurantItem;
