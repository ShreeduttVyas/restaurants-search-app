import Navigation from "./source/navigation";
import React from "react";
import useFirebase from "./source/Hooks/useFirebase";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar, View } from "react-native";

export default function App() {
  useFirebase();
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, marginTop: 20 }}>
        <Navigation />
        <StatusBar
          style="auto"
          backgroundColor="#fff"
          barStyle={"dark-content"}
          translucent={true}
        />
      </View>
    </SafeAreaProvider>
  );
}
