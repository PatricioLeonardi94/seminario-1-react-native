import React from "react";
import { NativeBaseProvider } from "native-base";

import Instrucciones from "./screens/Instrucciones";
import Welcome from "./screens/Welcome";
import IdentificationResult from "./screens/IdentificationResult";

export default function App() {
  return (
    <NativeBaseProvider>
      <Instrucciones />
    </NativeBaseProvider>
  );
}
