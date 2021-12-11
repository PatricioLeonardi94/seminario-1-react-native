import React, { useState, useContext } from "react";
import * as Google from "expo-google-app-auth";
import constants from "../constants/constants";
import {
  Box,
  Button,
  Text,
  Flex,
  View,
  Image,
  Center,
  Stack,
  Divider,
  HStack,
} from "native-base";
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

  const { photoUrl, x_access_token, player } = storedCredentials;

  console.log(player);

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
      <Flex alignItems="center">
        <Center mb="2.5" top={5}>
          <Image
            source={{
              uri: photoUrl,
            }}
            borderRadius={100}
            alt="Image"
            size="xl"
          />
          <Text
            fontFamily="body"
            fontWeight={500}
            fontSize={24}
            lineHeight={24}
            letterSpacing={0.25}
            color="rgba(0, 0, 0, 0.4)"
            top={3}
          >
            {player.user.fullname}
          </Text>
        </Center>
        <Box top={10}>
          <Stack mb="3.5" mt="1.5" direction="column" space={3}>
            <Text color="#84D31E" fontSize={20} fontWeight={500}>
              Puntos totales
            </Text>
            <Box
              width={"310px"}
              height={"50px"}
              bg="#FFFFFF"
              rounded="sm"
              _text={{
                color: "#84D31E",
                fontWeight: "medium",
                fontSize: "25px",
              }}
              shadow={"3"}
              borderWidth="5"
              borderRadius="5"
              borderColor="#84D31E"
            >
              <Text color="#84D31E" fontWeight={500} fontSize={26} left={3}>
                {player.points}
              </Text>
            </Box>
            <Text color="#84D31E" fontSize={20} fontWeight={500}>
              Puntos del mes
            </Text>
            <Box
              bg="#FFFFFF"
              rounded="sm"
              shadow={"3"}
              borderWidth="5"
              borderRadius="5"
              borderColor="#84D31E"
              height={"50px"}
            >
              <Text color="#84D31E" fontWeight={500} fontSize={26} left={3}>
                {player.month_points}
              </Text>
            </Box>
            <Text color="#FFC700" fontSize={20} fontWeight={500}>
              Monedas
            </Text>
            <Box
              bg="#FFFFFF"
              rounded="sm"
              shadow={"3"}
              borderWidth="5"
              borderRadius="5"
              borderColor="#FFC700"
              height={"50px"}
            >
              <HStack>
                <Image
                  w="10"
                  h="10"
                  source={require("../assets/images/dollar_coin.png")}
                  alt="dollar coin"
                  left={1}
                />
                <Text color="#FFC700" fontWeight={500} fontSize={26} left={3}>
                  {player.coins}
                </Text>
              </HStack>
            </Box>
          </Stack>
        </Box>
        <Box>
          <Center top={100}>
            <Button
              size="lg"
              colorScheme="red"
              onPress={() => clearLogin()}
              shadow={"3"}
            >
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
      </Flex>
    </Box>
  );
};

export default UserScreen;
