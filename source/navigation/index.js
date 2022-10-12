import { NavigationContainer } from "@react-navigation/native";
import SigninStack from "./SigninStack";
import React, { useEffect, useState } from "react";
import SignedinStack from "./SignedinStack";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import DrawerNavigator from "./DrawerNavigator";

export default function Navigation() {
  const [currentUser, setCurrentUser] = useState(null);

  const userHandler = (user) =>
    user ? setCurrentUser(user) : setCurrentUser(null);

  const auth = getAuth();

  useEffect(
    () => onAuthStateChanged(auth, (user) => userHandler(user)),
    [currentUser]
  );
  return (
    <NavigationContainer>
      {currentUser ? <SignedinStack /> : <SigninStack />}
    </NavigationContainer>
  );
}
