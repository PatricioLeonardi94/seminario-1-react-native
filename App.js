import React from "react";
import { NativeBaseProvider } from "native-base";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from "./screens/Welcome";
import Instrucciones from "./screens/Instrucciones";
import CameraScreen from "./components/Camera";
import SelectMaterial from "./screens/SelectMaterial";
import MaterialToRecycle from "./screens/MaterialToRecycle";
import IdentificationResult from "./screens/IdentificationResult";

const Stack = createNativeStackNavigator();

export default function App() {
  const [material, setMaterial] = React.useState("");

  return (
    <NavigationContainer>
      <NativeBaseProvider>

        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome">
            {props => <Welcome {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Instrucciones">
            {props => <Instrucciones {...props} />}
          </Stack.Screen>
          {/*<Stack.Screen name="Camera">
            {props => <CameraScreen {...props} />}
          </Stack.Screen>*/}
          <Stack.Screen name="SelectMaterial">
            {props => <SelectMaterial {...props} material={material} setMaterial={(value)=>setMaterial(value)}/>}
          </Stack.Screen>
          <Stack.Screen name="MaterialToRecycle">
            {props => <MaterialToRecycle {...props} material={material} />}
          </Stack.Screen>
          <Stack.Screen name="IdentificationResult">
            {props => <IdentificationResult {...props} material={material}  />}
          </Stack.Screen>
        </Stack.Navigator>
        
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
