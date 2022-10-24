import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { UserSignOut } from "../Components/SignOut/UserSignOut";
import { Alert } from "react-native";
import SignedinStack from "./SignedinStack";

function CustomDrawercomponent_SignOut(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Sign Out"
        onPress={async () => {
          await UserSignOut()
            .then((msg) => Alert.alert("Alert", msg))
            .catch((msg) => Alert.alert("Alert", msg));
        }}
      />
    </DrawerContentScrollView>
  );
}
const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawercomponent_SignOut {...props} />}
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
        swipeEnabled: false,
      }}
      initialRouteName={"SignedinStack"}
    >
      <Drawer.Screen name="SignedinStack" component={SignedinStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
