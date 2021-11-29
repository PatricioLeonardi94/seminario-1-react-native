import constants from "../constants/constants";
import * as Google from "expo-google-app-auth";
import React, { useState } from "react";
import { Box, Button, Text, VStack, View, Image, Center } from "native-base";
import TopBox from "../components/TopBox";
import { AntDesign } from "@expo/vector-icons";

const Login = ({ navigation }) => {
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();
  const [googleSubmitting, setGoogleSubmitting] = useState(false);

  const handleMessage = (message, type = "FAILED") => {
    setMessage(message);
    setMessageType(type);
  };

  const handleGoogleSignin = () => {
    setGoogleSubmitting(true);
    const config = {
      iosClientId: constants.IOS_CLIENT_ID,
      androidClientId: constants.ANDROID_CLIENT_ID,
      scropes: ["profile", "email"],
    };

    Google.logInAsync(config)
      .then((result) => {
        const { type, user } = result;
        if (type == "success") {
          // We make a set of the GoogleUser attributes we will request to the google API https://docs.expo.dev/versions/latest/sdk/google/
          const { email, name, photoUrl } = user;
          handleMessage("Google sigin was successful", "SUCCESS");
          setTimeout(
            () => navigation.navigate("Welcome", { email, name, photoUrl }),
            1000
          );
        } else {
          handleMessage("Google sigin was cancelled");
        }
        setGoogleSubmitting(false);
      })
      .catch((error) => {
        console.log(error);
        handleMessage("An error ocurred. Check you network and try again");
        setGoogleSubmitting(false);
      });
  };

  return (
    <Box>
      <TopBox />
      <VStack alignItems="center">
        <Box>
          <Center>
            {!googleSubmitting && (
              <Button
                size="lg"
                colorScheme="secondary"
                onPress={handleGoogleSignin}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <AntDesign name="google" size={24} color="white" />
                  <Text color="white">Ingresar con Google</Text>
                </View>
              </Button>
            )}

            {googleSubmitting && (
              <Button size="sm" colorScheme="secondary" disable={true}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <AntDesign name="google" size={24} color="white" />
                  <Text color="white">Ingresar con Google</Text>
                </View>
              </Button>
            )}
          </Center>
        </Box>
        <Image
          w={366.11}
          h={349}
          opacity={0.8}
          source={require("../assets/images/bottom-bubbles.png")}
        />
      </VStack>
    </Box>
  );
};

export default Login;
