import TopBox from "../components/TopBox";
import { Box, Center, Image, Text, VStack, HStack } from "native-base";
import React, { useState, useContext } from "react";
import { TouchableHighlight } from "react-native";
import BottomImageWithExitButton from "../components/BottomImageWithExitButton";

const Recycling = ({ navigation }) => {
  return (
    <Box >
      <TopBox navigation={navigation} />
      <Box p="10" mt={"35%"} >
        <VStack space={100} alignItems="center" >
          <TouchableHighlight
            onPress={() => navigation.navigate("Instrucciones")}
            underlayColor="#87DA1E"
          >
            <Center
              w="64"
              h="20"
              bg="#87DA1E"
              rounded="md"
              shadow={3}
              borderRadius="7px"
            >
              <Text
                color="white"
                fontFamily="body"
                fontWeight={500}
                fontSize={23}
                lineHeight={24}
                display="flex"
                letterSpacing={0.15}
                textAlign="center"
                alignItems="center"
              >
                ASISTENTE DE RECICLADO
              </Text>
            </Center>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => navigation.navigate("QRInstructions")}
            underlayColor="#87DA1E"
          >
            <Center
              w="64"
              h="20"
              bg="#87DA1E"
              rounded="md"
              shadow={3}
              borderRadius="7px"
            >
              <Text
                color="white"
                fontFamily="body"
                fontWeight={500}
                fontSize={23}
                lineHeight={24}
                display="flex"
                letterSpacing={0.15}
                textAlign="center"
                alignItems="center"
              >
                DEPOSITAR EN CESTO INTELIGENTE
              </Text>
            </Center>
          </TouchableHighlight>
        </VStack>
      </Box>
    </Box>
  );
};

export default Recycling;
