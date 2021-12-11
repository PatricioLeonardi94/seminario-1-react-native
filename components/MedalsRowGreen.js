import React, { useState, useContext } from "react";
import { Box, Center, Image, Text, VStack, HStack } from "native-base";
import * as Progress from "react-native-progress";

const MedalsRow = ({ medal }) => {
  const { name, target_points, points, material, is_granted, coins } = medal;
  var progress = points / target_points;
  return (
    <Box
      width={"350px"}
      height={"130px"}
      left={"3%"}
      top={"3%"}
      borderColor="#84D31E"
      shadow={3}
      borderRadius="7px"
      borderWidth="1px"
      backgroundColor="rgba(132, 211, 30, 0.1)"
    >
      <VStack space={4} alignItems="center">
        <HStack alignItems="center" space={1}>
          <Image
            w="10"
            h="10"
            source={require("../assets/images/dollar_coin.png")}
            alt="dollar coin"
          />
          <Text
            top="1"
            fontFamily="body"
            fontWeight={500}
            fontSize={40}
            lineHeight={40}
            alignItems="center"
            color="#FFC700"
          >
            {coins}
          </Text>
          <Text
            top="1"
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
            {name}
          </Text>
          <Image
            top="1"
            w="20"
            h="20"
            source={require("../assets/images/badges/badge_3.png")}
            alt="plastic bin"
          />
        </HStack>
        <HStack space={4}>
          <Text>
            {material} {points}/{target_points}
          </Text>
          <Progress.Bar progress={progress} width={200} height={20} />
        </HStack>
      </VStack>
    </Box>
  );
};

export default MedalsRow;
