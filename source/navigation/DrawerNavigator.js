import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import { UserSignOut } from "../Components/SignOut/UserSignOut";
import { Alert } from "react-native";
import SignedinStack from "./SignedinStack";
import RestaurantScreen from "../screens/RestaurantScreen";
import { RotateInUpLeft } from "react-native-reanimated";
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

//
//
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
