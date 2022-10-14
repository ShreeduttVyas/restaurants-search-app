import { NavigationContainer } from "@react-navigation/native";
import SigninStack from "./SigninStack";
import React, { useEffect, useState } from "react";
//import SignedinStack from "./SignedinStack";
import { getAuth, onAuthStateChanged } from "firebase/auth";
//import DrawerNavigator from "./DrawerNavigator";
import BottomTab from "./BottomTab";

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
      {currentUser ? <BottomTab /> : <SigninStack />}
    </NavigationContainer>
  );
}
