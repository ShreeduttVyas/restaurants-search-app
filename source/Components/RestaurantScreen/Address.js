import React from "react";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Address = ({ address }) => {
  return (
    <View>
      <Pressable
        style={styles.container}
        onPress={() => {
          var lat = address.coordinates.latitude;
          var lng = address.coordinates.longitude;
          var scheme =
            Platform.OS === "ios"
              ? "https://maps.apple.com/?daddr="
              : "https://maps.google.com/maps?daddr=";
          var url = scheme + `${lat},${lng}`;
          console.log(url);
          Linking.openURL(url);
        }}
      >
        <MaterialIcons name="location-pin" size={30} style={styles.icon} />
        <Text style={styles.addressText}>
          {address.location.display_address.join(", ")}
        </Text>
      </Pressable>
    </View>
  );
};

export default Address;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignContent: "center",
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgb(217,217,217)",
  },
  addressText: {
    flex: 1,
    fontSize: 13,
    padding: 6,
    textAlignVertical: "center",
  },
  icon: {
    marginLeft: 5,
    marginRight: 20,
  },
});
