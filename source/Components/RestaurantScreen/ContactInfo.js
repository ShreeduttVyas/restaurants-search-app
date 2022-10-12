import React from "react";
import { Linking, Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const ContactInfo = ({ phoneNum }) => {
  return (
    <View>
      <Pressable
        style={styles.container}
        onPress={() => {
          Linking.openURL(`tel:${phoneNum}`);
        }}
      >
        <MaterialIcons name="phone" size={30} style={styles.icon} />
        <Text style={styles.ContactText}>{phoneNum}</Text>
      </Pressable>
    </View>
  );
};

export default ContactInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignContent: "center",
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgb(217,217,217)",
  },
  icon: {
    marginLeft: 5,
    marginRight: 20,
  },
  ContactText: {
    flex: 1,
    fontSize: 13,
    padding: 6,
    textAlignVertical: "center",
  },
});
