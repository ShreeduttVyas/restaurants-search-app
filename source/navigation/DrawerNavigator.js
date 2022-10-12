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
      screenOptions={{ drawerPosition: "right", headerShown: false }}
      initialRouteName={"HomeScreen"}
    >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
