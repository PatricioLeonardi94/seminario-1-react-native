import React from "react";

import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../screens/Welcome";
import Instrucciones from "../screens/Instrucciones";
import CameraScreen from "../components/Camera";
import SelectMaterial from "../screens/SelectMaterial";
import MaterialToRecycle from "../screens/MaterialToRecycle";
import IdentificationResult from "../screens/IdentificationResult";
import Login from "../screens/Login";

//credentialContext
import { CredentialsContext } from "./../components/CredentialsContext";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <CredentialsContext.Consumer>
      {({ storedCredentials }) => (
        <NavigationContainer>
          <NativeBaseProvider>
            <Stack.Navigator
              initialRouteName="Welcome"
              screenOptions={{
                headerShown: false,
              }}
            >
              {storedCredentials ? (
                <Stack.Screen name="Welcome">
                  {(props) => <Welcome {...props} />}
                </Stack.Screen>
              ) : (
                <>
                  <Stack.Screen name="Login">
                    {(props) => <Login {...props} />}
                  </Stack.Screen>
                </>
              )}

              <Stack.Screen name="Instrucciones">
                {(props) => <Instrucciones {...props} />}
              </Stack.Screen>

              <Stack.Screen name="Camera">
                {(props) => <CameraScreen {...props} />}
              </Stack.Screen>
              <Stack.Screen name="SelectMaterial">
                {(props) => (
                  <SelectMaterial
                    {...props}
                    material={material}
                    setMaterial={(value) => setMaterial(value)}
                  />
                )}
              </Stack.Screen>
              <Stack.Screen name="MaterialToRecycle">
                {(props) => (
                  <MaterialToRecycle {...props} material={material} />
                )}
              </Stack.Screen>
              <Stack.Screen name="IdentificationResult">
                {(props) => (
                  <IdentificationResult {...props} material={material} />
                )}
              </Stack.Screen>
            </Stack.Navigator>
          </NativeBaseProvider>
        </NavigationContainer>
      )}
    </CredentialsContext.Consumer>
  );
};

export default RootStack;
