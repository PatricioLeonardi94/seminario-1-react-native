import React, { useState, useEffect } from "react";
import TopBox from "../components/TopBox";
import { Text, View, StyleSheet, Button } from "react-native";
// import {
//   Center,
//   Box,
//   Text,
//   VStack,
//   HStack,
//   Stack,
//   Button,
//   Image,
// } from "native-base";
import { BarCodeScanner } from "expo-barcode-scanner";

//credentialContext
import { CredentialsContext } from "./../components/CredentialsContext";
import { MaterialContext } from "../MaterialContext";
import { QRContext } from "./Contexts/QRContext";

const CameraQR = ({ navigation, step }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const { material, setMaterial } = useContext(MaterialContext);

  const { binConnection, setBinConnection } = useContext(QRContext);

  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);
  const { x_access_token } = storedCredentials;

  function translateMaterial(material) {
    switch (material.toUpperCase()) {
      case "PLASTICO":
        return "plastic";
        break;
      case "CARTON":
        return "cardboard";
        break;
      case "METAL":
        return "metal";
        break;
      case "PAPEL":
        return "paper";
        break;
      case "VIDRIO":
        return "glass";
        break;
      default:
        return "unknown";
        break;
    }
  }

  const handleBinConnection = () => {
    const binData = {
      connection_code: 123,
      flow_points: step + 1,
      material: translateMaterial(material),
    };

    const urlConnection =
      "http://glacial-garden-26787.herokuapp.com/api/bins/connections" +
      "?" +
      "connection_code=" +
      binData.connection_code +
      "max_resultsflow_points=" +
      binData.flow_points +
      "material=" +
      binData.material;

    var config = {
      method: "post",
      url: urlConnection,
      headers: {
        "x-access-token": x_access_token,
      },
    };

    var axios = require("axios");

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        const { data } = response.data;
        console.log(data);
        setBinConnection(data.connection_id);
        checkConnection(data.connection_id);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const checkConnection = (connectionId) => {
    const urlConnection =
      "http://glacial-garden-26787.herokuapp.com/api/bins/connections/dffbcc61-41cb-4c19-a332-9490d2e4113e/accepted" +
      "?" +
      "connection_id=" +
      connectionId;

    var config = {
      method: "get",
      url: urlConnection,
      headers: {
        "x-access-token": x_access_token,
      },
    };

    var axios = require("axios");

    axios(config)
      .then(function (response) {
        navigation.navigate("ThrowIntoSmartBin", {
          step: step,
        });
      })
      .catch(function (error) {
        navigation.navigate("CameraQR", {
          step: step,
        });
      });
  };

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    handleBinConnection();
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
      <Button
        title={"Back"}
        onPress={() => navigation.navigate("QRInstructions")}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
export default CameraQR;
