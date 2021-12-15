import React, { useState, useEffect, useContext } from "react";
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
import axiosRetry from "axios-retry";

//credentialContext
import { CredentialsContext } from "./CredentialsContext";
import { MaterialContext } from "./MaterialContext";
import { QRContext } from "./Contexts/QRContext";

const CameraQR = ({ navigation, route }) => {
  const {step} = route.params;
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
    // el escaneo del QR nos devuelve el conection code => lo dejamos hardcodeado mientras

    // for future material: translateMaterial(material)

    if (isNaN(step)) {
      step = 1;
    } else {
      step += 1;
    }

    var qs = require("qs");

    var data = qs.stringify({
      connection_code: "123",
      flow_points: step,
      material: "plastic",
    });

    // console.log(data);

    var config = {
      method: "post",
      url: "http://glacial-garden-26787.herokuapp.com/api/bins/connections",
      headers: {
        "x-access-token": x_access_token,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    var axios = require("axios");

    axios(config)
      .then(function (response) {
        const { data } = response.data;
        console.log("Inside post", data);
        setBinConnection(data.connection_id);
        checkConnectionRetry(data.connection_id);
      })
      .catch(function (error) {
        console.log(error);
        navigation.navigate("Welcome", {
          step: step,
        });
      });
  };

  const checkConnectionRetry = async (connectionId) => {
    const urlConnection = `http://glacial-garden-26787.herokuapp.com/api/bins/connections/${connectionId}/accepted`;

    var axios = require("axios");
    const axiosRetry = require("axios-retry");

    axiosRetry(axios, {
      retries: 100, // number of retries
      retryDelay: (retryCount) => {
        return retryCount * 2000; // time interval between retries
      },
      retryCondition: (error) => {
        // if retry condition is not specified, by default idempotent requests are retried
        return error.response.status === 404;
      },
    });
    const response = await axios({
      method: "HEAD",
      url: urlConnection,
      headers: {
        "x-access-token": x_access_token,
      },
    }).catch((err) => {
      if (err.response.status !== 200) {
        throw new Error(
          `API call failed with status code: ${err.response.status} after 3 retry attempts`
        );
      }
    });

    if (response.status === 200) {
      console.log("We move to thow into smart bin");
      navigation.navigate("ThrowIntoSmartBin", {
        step: step,
      });
    }
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
