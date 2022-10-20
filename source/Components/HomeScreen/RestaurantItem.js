import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { elevation } from "../../SharedStyles/Styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function RestaurantItem({ restaurant, navigation }) {
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
        onPress={() => console.log("Touch: av")}
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
            name={1 == 2 ? "bookmark-plus-outline" : "bookmark-check-outline"}
            size={30}
            style={{}}
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
