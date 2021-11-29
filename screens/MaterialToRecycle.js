import React from "react";
import TopBox from "../components/TopBox";
import { Center, Box, Text, VStack } from "native-base";
import BottomImageWithExitButton from "../components/BottomImageWithExitButton";

const MaterialToRecycle = ({ navigation, material }) => {
  return (
    <Box>
      <TopBox />
      <VStack alignItems="center">
        <Center mt={"7.5%"}>
          <Text
            fontFamily="body"
            fontWeight={500}
            fontSize={20}
            lineHeight={24}
            display="flex"
            alignItems="center"
            textAlign="center"
            letterSpacing={0.15}
            color="rgba(0, 0, 0, 0.4)"
          >
            El producto que escaneaste es de:
          </Text>
        </Center>
        <Center mt={"12.5%"}>
          <Text
            fontFamily="body"
            fontWeight={"bold"}
            fontSize={44}
            lineHeight={44}
            display="flex"
            alignItems="center"
            textAlign="center"
            letterSpacing={0.15}
            color="#84D31E"
          >
            {material.toUpperCase()}
          </Text>
        </Center>
        <Center mt={"12.5%"} ml={"2.5%"} mr={"2.5%"}>
          <Text
            fontFamily="body"
            fontWeight={500}
            fontSize={18}
            lineHeight={18}
            display="flex"
            alignItems="center"
            textAlign="center"
            letterSpacing={0.15}
            color="rgba(0, 0, 0, 0.4)"
          >
            ¡Seguí los pasos a continuación para reciclar tu producto!
          </Text>
        </Center>
        <Center
          height={"8.5%"}
          width={"50%"}
          mt={"17.5%"}
          borderRadius={"8px"}
          bgColor="#84D31E"
        >
          <Text
            color="white"
            font="body"
            fontWeight={500}
            fontSize={21}
            lineHeight={21}
            display="flex"
            alignItems="center"
            textAlign="center"
            letterSpacing={0.16}
            onPress={() => navigation.navigate("IdentificationResult")}
          >
            RECICLAR
          </Text>
        </Center>
        <BottomImageWithExitButton />
      </VStack>
    </Box>
  );
};

export default MaterialToRecycle;
