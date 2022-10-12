import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Header = ({}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "column" }}>
        <Text style={styles.lightHeader}>Grab your</Text>
        <Text style={styles.boldHeader}>delicious meal!</Text>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "flex-end",
          marginTop: 14,
        }}
      >
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <AntDesign name="menufold" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 25,
    flexDirection: "row",
  },
  lightHeader: {
    fontSize: 35,
  },
  boldHeader: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
