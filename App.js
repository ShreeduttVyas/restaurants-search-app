import Navigation from "./source/navigation";
import React from "react";
import useFirebase from "./source/Hooks/useFirebase";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";

export default function App() {
  useFirebase();
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, marginTop: 20 }}>
        <Navigation />
      </View>
    </SafeAreaProvider>
  );
}
