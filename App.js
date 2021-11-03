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
    <NavigationContainer>
      <NativeBaseProvider>

        <Stack.Navigator initialRouteName="IdentificationResult">
          <Stack.Screen name="Welcome">
            {props => <Welcome {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Instrucciones">
            {props => <Instrucciones {...props} />}
          </Stack.Screen>
          <Stack.Screen name="IdentificationResult">
            {props => <IdentificationResult {...props} material={"plastico"}  />}
          </Stack.Screen>
        </Stack.Navigator>
        
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
