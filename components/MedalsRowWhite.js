import React, { useState, useContext } from "react";
import { Box, Center, Image, Text, VStack, HStack } from "native-base";
import * as Progress from "react-native-progress";

const MedalsRow = ({ medal, image }) => {
  const { name, target_points, points, material, is_granted, coins_reward } =
    medal;
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
    >
      <VStack space={4} alignItems="center">
        <HStack alignItems="center" space={1}>
          <Image
            left={1}
            top="1"
            w="20"
            h="20"
            source={image}
            key={material}
            alt="plastic bin"
            right={2}
          />
          <Text
            width={160}
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
            w="10"
            h="10"
            source={require("../assets/images/dollar_coin.png")}
            alt="plastic bin"
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
            {coins_reward}
          </Text>
        </HStack>
        <HStack space={4}>
          <Progress.Bar progress={progress} width={200} height={20} />
          <Text>
            {points}/{target_points} {material}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default MedalsRow;
