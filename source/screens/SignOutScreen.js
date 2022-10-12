import { View, Text, Alert } from "react-native";
import React from "react";
import { getAuth, signOut } from "firebase/auth";
import LoginScreen from "./LoginScreen";

const SignOutScreen = ({ navigation }) => {
  const auth = getAuth();
  let msg = null;
  const userSignout = () => {
    signOut(auth)
      .then(() => {
        Alert.alert(Alert, "Sign-out successful");
      })
      .catch((error) => {
        msg = error;
        Alert.alert(Alert, "Sign-out unsuccessful");
      });
  };
  userSignout();
  return (
    <View>
      <Text>Sorry for the Unexpected Error, error:{msg}</Text>
    </View>
  );
};

export default SignOutScreen;
