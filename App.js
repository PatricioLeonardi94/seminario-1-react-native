import React, { useState } from "react";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

import RootStack from "./navigators/RootStack";
import LoadingScreen from "./screens/LoadingScreen";
import constants from "./constants/constants";

import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

//appLoading
import AppLoading from "expo-app-loading";

//async-storage
import AsyncStorage from "@react-native-async-storage/async-storage";

//credentialContext
import { CredentialsContext } from "./components/CredentialsContext";
import { MaterialContext } from "./components/MaterialContext";
import { QRContext } from "./components/Contexts/QRContext";

export default function App() {
  const [material, setMaterial] = React.useState("PLASTICO");
  const [appReady, setAppReady] = useState(false);
  const [storedCredentials, setStoredCredentials] = useState("");
  const [binConnection, setBinConnection] = useState("");

  const checkLoginCredentials = () => {
    AsyncStorage.getItem(constants.ASYNC_STORAGE_CREDENTIALS)
      .then((result) => {
        if (result !== null) {
          setStoredCredentials(JSON.parse(result));
        } else {
          setStoredCredentials(null);
        }
      })
      .catch((error) => console.log(error));
  };

  //En el caso de necesitar loading screen previo al inicio https://docs.expo.dev/versions/latest/sdk/app-loading/
  if (!appReady) {
    return (
      <AppLoading
        startAsync={checkLoginCredentials}
        onFinish={() => setAppReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <CredentialsContext.Provider
      value={{ storedCredentials, setStoredCredentials }}
    >
      <MaterialContext.Provider value={{ material, setMaterial }}>
        <QRContext.Provider value={{ binConnection, setBinConnection }}>
          <RootStack />
        </QRContext.Provider>
      </MaterialContext.Provider>
    </CredentialsContext.Provider>
  );
}
