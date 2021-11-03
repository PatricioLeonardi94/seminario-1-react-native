import React from "react";
import { NativeBaseProvider } from "native-base";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Instrucciones from "./screens/Instrucciones";
import Welcome from "./screens/Welcome";
import IdentificationResult from "./screens/IdentificationResult";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={() => <Welcome />}/>
          <Stack.Screen name="Instructions" component={() => <Instructions />} />
          <Stack.Screen name="IdentificationResults" component={() => <IdentificationResult material={"plastico"} />} />
        </Stack.Navigator>
        <Instrucciones />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
