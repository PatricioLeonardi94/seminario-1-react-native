import React, { useState, useContext } from "react";
import * as Google from "expo-google-app-auth";
import constants from "../constants/constants";
import { Box, Button, Text, VStack, View, Image, Center } from "native-base";
import TopBox from "../components/TopBox";
import { AntDesign } from "@expo/vector-icons";

//async-storage
import AsyncStorage from "@react-native-async-storage/async-storage";

//credentialContext
import { CredentialsContext } from "./../components/CredentialsContext";

const UserScreen = ({ navigation }) => {
  //context
  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);

  const clearLogin = () => {
    if (storedCredentials !== null) {
      AsyncStorage.removeItem(constants.ASYNC_STORAGE_CREDENTIALS)
        .then(() => {
          setStoredCredentials("");
          navigation.navigate("Login");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <Box>
      <TopBox navigation={navigation} />
      <VStack alignItems="center">
        <Box>
          <Center>
            <Button size="lg" colorScheme="red" onPress={() => clearLogin()}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <AntDesign name="google" size={24} color="white" />
                <Text color="white">Desconectar Cuenta de Google</Text>
              </View>
            </Button>
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

export default UserScreen;
