import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const NavigationHeader = ({ navigation, title }) => {
  console.log(title);
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons size={32} name="chevron-back" style={styles.icon} />
        </Pressable>
        <Text style={styles.Text}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
  },
  Text: {
    fontWeight: "bold",
    fontSize: 16,
    marginRight: "auto",
    marginLeft: "auto",
  },
  icon: {
    position: "absolute",
  },
});

export default NavigationHeader;
