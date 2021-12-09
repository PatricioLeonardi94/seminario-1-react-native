import React, { useState, useContext } from "react";
import * as Google from "expo-google-app-auth";
import constants from "../constants/constants";
import { Box, Button, Text, VStack, View, Image, Center } from "native-base";
import TopBox from "../components/TopBox";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";

//async-storage
import AsyncStorage from "@react-native-async-storage/async-storage";

//credentialContext
import { CredentialsContext } from "./../components/CredentialsContext";

const Login = ({ navigation }) => {
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();
  const [googleSubmitting, setGoogleSubmitting] = useState(false);

  //context
  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);

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
          // We make a set of the Googl eUser attributes we will request to the google API https://docs.expo.dev/versions/latest/sdk/google/
          const { email, name, photoUrl } = user;

          const resultForBack = {
            access_token: result.accessToken,
            id_token: result.idToken,
            refresh_token: result.refreshToken,
          };

          var tokens = JSON.stringify({ tokens: resultForBack }, null, 2);

          var config = {
            method: "post",
            url: "http://glacial-garden-26787.herokuapp.com/api/players/session",
            headers: {
              "Content-Type": "application/json",
            },
            data: tokens,
          };

          var axios = require("axios");

          axios(config)
            .then(function (response) {
              const { x_access_token } = response;
              const { player } = response.data;
              persistLogin(
                { email, name, photoUrl, x_access_token, player },
                message,
                "success"
              );
            })
            .catch(function (error) {
              console.log(error);
            });
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

  const persistLogin = (credentials, message, status) => {
    AsyncStorage.setItem(
      constants.ASYNC_STORAGE_CREDENTIALS,
      JSON.stringify(credentials)
    )
      .then(() => {
        handleMessage(message, status);
        setStoredCredentials(credentials);
      })
      .catch((error) => {
        console.log(error);
        handleMessage("Persisting login failed");
      });
  };

  // const clearLogin = () => {
  //   AsyncStorage.removeItem(constants.ASYNC_STORAGE_CREDENTIALS)
  //     .then(() => {
  //       setStoredCredentials("");
  //     })
  //     .catch((error) => console.log(error));
  // };

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
