import React from "react";
import { StyleSheet, Image, SafeAreaView, Text, View } from "react-native";
import { useFonts } from "expo-font";
import constants from "../constants/constants";

const LoadingScreen = () => {
  const [loaded] = useFonts({
    Ruda: require("../assets/fonts/Ruda-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          style={styles.topWave}
          source={require("../assets/images/green-wave.png")}
          alt=""
        />
        <Image
          style={styles.logo}
          source={require("../assets/images/logo.png")}
          alt=""
        />
        <Text style={styles.text}>{constants.PROJECT_NAME}</Text>
        <Image
          style={styles.bottomWave}
          source={require("../assets/images/green-wave.png")}
          alt=""
        />
      </View>
    </SafeAreaView>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 360,
    height: 640,
    backgroundColor: "#FFFFFF",
  },
  text: {
    color: "#49952E",
    position: "absolute",
    width: 198,
    height: 50,
    left: 81,
    top: 356,

    fontFamily: "Ruda",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 36,
    lineHeight: 50,
    textAlign: "center",
    /* or 100% */
  },
  logo: {
    position: "absolute",
    width: 223,
    height: 160,
    left: 69,
    top: 196,
  },
  topWave: {
    position: "absolute",
    width: 360,
    height: 197,
    left: 0,
    top: 0,
  },
  bottomWave: {
    position: "absolute",
    width: 360,
    height: 197,
    left: 0,
    top: 443,
  },
});
