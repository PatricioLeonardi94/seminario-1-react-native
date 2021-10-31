import React from "react";
import { NativeBaseProvider } from "native-base";
import Instrucciones from "./screens/Instrucciones";

export default function App() {
  return (
    <NativeBaseProvider>
      <Instrucciones />
    </NativeBaseProvider>
  );
}
