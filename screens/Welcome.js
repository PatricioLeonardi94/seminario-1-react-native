import TopBox from "../components/TopBox";
import { Box, Center, Image, Text, VStack, HStack } from "native-base";
import React, { useState, useContext } from "react";
import { TouchableHighlight } from "react-native";

//credentialContext
import { CredentialsContext } from "../components/CredentialsContext";

const Welcome = ({ navigation }) => {
  return (
    <Box>
      <TopBox navigation={navigation} />
      <Center top={10}>
        <Text
          fontFamily="body"
          fontWeight={500}
          fontSize={24}
          lineHeight={24}
          display="flex"
          letterSpacing={0.15}
          opacity="0.4"
          textAlign="center"
          alignItems="center"
        >
          Bienvenido a tu asistente de reciclado
        </Text>
      </Center>
      <Box p="20">
        <VStack space={10} alignItems="center">
          <HStack space={10} alignItems="center">
            <TouchableHighlight
              onPress={() => navigation.navigate("Recycling")}
              underlayColor="rgba(132, 211, 30, 0.2)"
            >
              <Center
                backgroundColor="rgba(132, 211, 30, 0.2)"
                width="150"
                height="180"
                alignItems="center"
                borderWidth="1px"
                borderColor="#84D31E"
                borderRadius="10px"
              >
                <Image
                  top="0.5"
                  w="32"
                  h="32"
                  source={require("../assets/images/plastic_bin.png")}
                  alt="plastic bin"
                />

                <Text
                  top="3"
                  color="#84D31E"
                  fontFamily="body"
                  fontWeight={500}
                  fontSize={26}
                  lineHeight={24}
                  display="flex"
                  alignItems="center"
                  letterSpacing={0.15}
                  textAlign="center"
                >
                  RECICLAR
                </Text>
              </Center>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => navigation.navigate("Raking")}
              underlayColor="white"
            >
              <Center
                width="150"
                height="180"
                borderWidth="1px"
                borderColor="#84D31E"
                borderRadius="10px"
              >
                <Image
                  top="0.5"
                  w="32"
                  h="32"
                  source={require("../assets/images/scores.png")}
                  alt="scores"
                />
                <Text
                  top="3"
                  color="#84D31E"
                  fontFamily="body"
                  fontWeight={500}
                  fontSize={26}
                  lineHeight={24}
                  display="flex"
                  alignItems="center"
                  letterSpacing={0.15}
                  textAlign="center"
                >
                  RANKING
                </Text>
              </Center>
            </TouchableHighlight>
          </HStack>
          <HStack space={10} alignItems="center">
            <TouchableHighlight
              onPress={() => navigation.navigate("Medals")}
              underlayColor="white"
            >
              <Center
                borderColor="#84D31E"
                width="150"
                height="180"
                borderWidth="1px"
                borderColor="#84D31E"
                borderRadius="10px"
              >
                <Image
                  top="0.5"
                  w="32"
                  h="32"
                  source={require("../assets/images/medals.png")}
                  alt="medals"
                />
                <Text
                  top="3"
                  color="#84D31E"
                  fontFamily="body"
                  fontWeight={500}
                  fontSize={26}
                  lineHeight={24}
                  display="flex"
                  alignItems="center"
                  letterSpacing={0.15}
                  textAlign="center"
                >
                  MEDALLAS
                </Text>
              </Center>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => navigation.navigate("Exchange")}
              underlayColor="rgba(132, 211, 30, 0.2)"
            >
              <Center
                backgroundColor="rgba(132, 211, 30, 0.2)"
                borderRadius="10px"
                width="150"
                height="180"
                borderWidth="1px"
                borderColor="#84D31E"
                borderRadius="10px"
              >
                <Image
                  top="0.5"
                  w="32"
                  h="32"
                  source={require("../assets/images/stars.png")}
                  alt="stars"
                />
                <Text
                  top="3"
                  color="#84D31E"
                  fontFamily="body"
                  fontWeight={500}
                  fontSize={26}
                  lineHeight={24}
                  display="flex"
                  alignItems="center"
                  letterSpacing={0.15}
                >
                  CANJEAR
                </Text>
              </Center>
            </TouchableHighlight>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default Welcome;
