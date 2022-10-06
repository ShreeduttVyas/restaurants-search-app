import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import { elevation } from "../Shared/Styles";

function RestaurantItem({ restaurant, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Restaurant", { id: restaurant.id })}
    >
      <View style={[styles.conatiner, elevation]}>
        <Image source={{ uri: restaurant.image_url }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.header}>{restaurant.name}</Text>
          <View style={styles.info}>
            <Text style={styles.rating}>{restaurant.rating} stars</Text>
            <Text style={styles.money}>{restaurant.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  conatiner: {
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

export default withNavigation(RestaurantItem);
