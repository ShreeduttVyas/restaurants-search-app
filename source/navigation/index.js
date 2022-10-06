import { NavigationContainer } from "@react-navigation/native";
import SigninStack from "./SigninStack";
import React from "react";

export default function Navigation() {
  return (
    <NavigationContainer>
      <SigninStack />
    </NavigationContainer>
  );
}
