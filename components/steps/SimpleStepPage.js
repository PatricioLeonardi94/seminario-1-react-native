import React from "react";
import {
  Center,
  Box,
  Text,
  VStack,
  HStack,
  Stack,
  Button,
  Image,
} from "native-base";
import { StyleSheet } from "react-native";
import BottomImageWithExitButton from "../../components/BottomImageWithExitButton";


 

const SimpleStepPage = ({ step, handleNextStep, handleNegativeStep }) => {
    const getImageUrl = (stepNumber) => {
        switch(stepNumber){
            case 1:
                const image1 = require("../../assets/images/removeSticker.png");
                return image1;
                break;
            case 2:
                const image2 = require("../../assets/images/wash.png");
                return image2;
                break;
            case 3:
                const image3 = require("../../assets/images/dry.png");
                return image3;
                break;
            case 4:
                const image4 = require("../../assets/images/compress.png");
                return image4;
                break;
            default:
                const logo = require("../../assets/images/logo.png");
                return logo;
                break;
        }
    }

  return (
    <Center>
      <VStack alignItems="center">
        <HStack mt={"7.5%"}>
          <Text
            fontFamily="body"
            fontWeight={500}
            fontSize={24}
            lineHeight={24}
            display="flex"
            textAlign="left"
            letterSpacing={0.15}
            color="#84D31E"
            ml={"1%"}
          >
            +1
          </Text>
          <Text
            fontFamily="body"
            fontWeight={500}
            fontSize={24}
            lineHeight={24}
            display="flex"
            alignItems="center"
            textAlign="right"
            letterSpacing={0.15}
            color="#84D31E"
            ml={"70%"}
          >
            {step.stepNumber} Pts
          </Text>
        </HStack>
        <Center mt={"2.5%"}>
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
            Paso {step.stepNumber}
          </Text>
        </Center>
        <Center mt={"5%"}>
          <Text
            fontFamily="body"
            fontWeight={500}
            fontSize={32}
            lineHeight={32}
            display="flex"
            alignItems="center"
            textAlign="center"
            letterSpacing={0.15}
            color="#84D31E"
          >
            {step.stepName}
          </Text>
        </Center>
        <Center w={"75%"} h={"20.5%"} mt={"5%"} style={{ color: "green" }}>
          <Image
            w={"220px"}
            h={"180px"}
            source={getImageUrl(step.stepNumber)}
            alt="Imagen"
          />
        </Center>
        <Center mt={"5%"}>
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
            {step.texts[0]}
          </Text>
        </Center>
        <Center
          height={"7.5%"}
          width={"200px"}
          mt={"7.5%"}
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
            onPress={() => handleNextStep()}
          >
            SIGUIENTE
          </Text>
        </Center>
        <Center
          height={"7.5%"}
          width={"200px"}
          mt={"5%"}
          borderRadius={"8px"}
          bgColor="rgba(0, 0, 0, 0.05)"
        >
          <Text
            color="rgba(0, 0, 0, 0.4)"
            font="body"
            fontWeight={500}
            fontSize={18}
            lineHeight={18}
            display="flex"
            alignItems="center"
            textAlign="center"
            letterSpacing={0.16}
            onPress={() => handleNegativeStep()}
          >
            NO PUDE HACERLO
          </Text>
        </Center>
        <BottomImageWithExitButton mt={"-200px"} />
      </VStack>
    </Center>
  );
};

export default SimpleStepPage;
