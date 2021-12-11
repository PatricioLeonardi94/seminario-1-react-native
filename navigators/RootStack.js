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
import UserScreen from "../screens/UserScreen";
import Raking from "../screens/Ranking";
import Medals from "../screens/Medals";
import Exchange from "../screens/Exchange";
import TopBox from "../components/TopBox";
import Recycling from "../screens/Recycling";

//credentialContext
import { CredentialsContext } from "./../components/CredentialsContext";
import QRInstructions from "../components/steps/QRInstructions";
import ThrowIntoSmartBin from "../components/steps/ThrowIntoSmartBin";
import ThrowIntoRegularBin from "../components/steps/ThrowIntoRegularBin";
import Congratulations from "../components/steps/Congratulations";

const Stack = createNativeStackNavigator();

const RootStack = ({ material }) => {
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

              <Stack.Screen name="Recycling">
                {(props) => <Recycling {...props} />}
              </Stack.Screen>

              <Stack.Screen name="Instrucciones">
                {(props) => <Instrucciones {...props} />}
              </Stack.Screen>

              <Stack.Screen name="Raking">
                {(props) => <Raking {...props} />}
              </Stack.Screen>

              <Stack.Screen name="Medals">
                {(props) => <Medals {...props} />}
              </Stack.Screen>

              <Stack.Screen name="Exchange">
                {(props) => <Exchange {...props} />}
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

              <Stack.Screen name="QRInstructions">
                {(props) => (
                  <QRInstructions {...props} step={step} />
                )}
              </Stack.Screen>

              <Stack.Screen name="ThrowIntoSmartBin">
                {(props) => (
                  <ThrowIntoSmartBin {...props} step={step} />
                )}
              </Stack.Screen>

              <Stack.Screen name="ThrowIntoRegularBin">
                {(props) => (
                  <ThrowIntoRegularBin {...props} step={step} />
                )}
              </Stack.Screen>

              <Stack.Screen name="Congratulations">
                {(props) => (
                  <Congratulations {...props} step={step} />
                )}
              </Stack.Screen>

              <Stack.Screen name="UserScreen">
                {(props) => <UserScreen {...props} />}
              </Stack.Screen>

              <Stack.Screen name="TopBox">
                {(props) => <TopBox {...props} />}
              </Stack.Screen>
            </Stack.Navigator>
          </NativeBaseProvider>
        </NavigationContainer>
      )}
    </CredentialsContext.Consumer>
  );
};

export default RootStack;
