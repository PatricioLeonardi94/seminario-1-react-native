import React, { useState, useEffect, useRef } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Camera } from "expo-camera";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import * as FileSystem from "expo-file-system";
import axios from "axios";
import { MaterialContext } from "./MaterialContext";

const CameraScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const { material, setMaterial } = React.useContext(MaterialContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    camera: {
      flex: 1,
    },
    buttonContainer: {
      flex: 1,
      backgroundColor: "transparent",
      flexDirection: "row",
      justifyContent: "space-around",
      margin: 30,
    },
    button: {
      flex: 0.1,
      alignSelf: "flex-end",
      alignItems: "center",
    },
    text: {
      fontSize: 18,
      color: "white",
    },
  });
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const mapIdentifiedValue = (material) => {
    switch (material.toLowerCase()) {
      case "battery":
      case "metal":
        return "METAL";
        break;
      case "brown-glass":
      case "green-glass":
      case "white-glass":
        return "VIDRIO";
        break;
      case "cardboard":
        return "CARTON";
        break;
      case "plastic":
        return "PLASTICO";
        break;
      case "trash":
        return "PAPEL";
        break;
      default:
        return "PLASTICO";
        break;
    }
  };

  const identifyProduct = (image) => {
    var qs = require("qs");

    var data = qs.stringify({
      b64: image,
    });

    var config = {
      method: "post",
      url: "https://seminario1-api.herokuapp.com/predict/",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log("response: " + response.data);
        const material = response.data[0];
        let identifiedMaterial = mapIdentifiedValue(material);
        setMaterial(identifiedMaterial);
        setIsLoading(false);
        setError(false);
        setSuccess(true);
        navigation.navigate("MaterialToRecycle");
      })
      .catch(function (error) {
        console.log(error.toString());
        setIsLoading(false);
        setSuccess(false);
        setError(true);
        navigation.navigate("Instrucciones");
      });
  };

  const cam = useRef();

  const _takePicture = async () => {
    if (cam.current) {
      const option = { quality: 0.5, base64: true, skipProcessing: false };
      let photo = await cam.current.takePictureAsync(option);
      const source = photo.uri;
      if (source) {
        cam.current.resumePreview();
        console.log("\npicture source: ", source);
        //console.log("REQUIRE: " + require(source));
        /*fs.readFile(source, (err, data) => {
          if(err) {
            console.log('error: ', err);
            return;
          } else {
            const image = data.toString("base64");
            identifyProduct(image);
          }
        });*/
        try {
          setIsLoading(true);
          const base64 = await FileSystem.readAsStringAsync(source, {
            encoding: "base64",
          });
          console.log("imagen leida");
          identifyProduct(base64);
        } catch (err) {
          console.log(err.toString());
          setError(true);
          setIsLoading(false);
          setSuccess(false);
        }
      }
    }
  };

  useEffect(async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === "granted");
  }, []);

  if (hasPermission === null) {
    return (
      <View>
        <Text>
          Para acceder a la camara, es neceario que brindes el correspondiente
          permiso
        </Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View>
        <Text>No has concedido acceso a la camera</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={cam}>
        <View
          style={{
            marginTop: "40%",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {isLoading ? (
            <ActivityIndicator size="large" color="#00ff00" />
          ) : (
            <Text>
              {error
                ? "Ocurrió un error al identificar tu producto"
                : success
                ? "Identificacion Exitosa!"
                : ""}
            </Text>
          )}
        </View>
        <View style={styles.buttonContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "flex-end",
            }}
          >
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Instrucciones")}
              >
                <Text style={styles.text}> Go Back </Text>
                <Ionicons name="arrow-back" size={50} color="white" />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => _takePicture()}
              >
                <Text style={styles.text}> Take Photo </Text>
                <MaterialIcons name="camera" size={50} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Camera>
    </View>
  );
};

export default CameraScreen;
