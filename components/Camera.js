import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const CameraScreen = ({ navigation }) => {
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
      margin: 20,
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

  const cam = useRef();

  const _takePicture = async () => {
    if (cam.current) {
      const option = { quality: 0.5, base64: true, skipProcessing: false };
      let photo = await cam.current.takePictureAsync(option);

      const source = photo.uri;

      if (source) {
        cam.current.resumePreview();
        console.log("\npicture source: ", source);

        //TODO: hacer la validacion de material para el route enviar el material al MaterialToRecycle
        navigation.navigate("IdentificationResult");
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
        <Text>No ahas concedido acceso a la camera</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={cam}>
        <View style={styles.buttonContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Welcome")}
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
