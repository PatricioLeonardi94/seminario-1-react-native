import React from "react";
import { Center, NativeBaseProvider, Box } from "native-base";
import Instrucciones from "./screens/Instrucciones";

export default function App() {
  return (
    <NativeBaseProvider>
      <Instrucciones />
    </NativeBaseProvider>
  );
}
