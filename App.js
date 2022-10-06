import Navigation from "./source/navigation";
import React from "react";
import useFirebase from "./source/Hooks/useFirebase";
export default function App() {
  useFirebase();
  return <Navigation />;
}
