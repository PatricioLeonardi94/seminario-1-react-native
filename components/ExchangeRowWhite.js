import React, { useState, useContext } from "react";
import { Box, Center, Image, Text, VStack, HStack } from "native-base";

const ExchangeRowWhite = ({ exchange }) => {
  const { amount, name, image } = exchange;
  return (
    <Box
      width={"350px"}
      height={"130px"}
      left={"3%"}
      top={"3%"}
      borderColor="#84D31E"
      shadow={1}
      borderRadius="7px"
      borderWidth="1px"
    >
      <HStack alignItems="center" space={10}>
        <Image top={3} left={5} w="100" h="100" source={image} alt="food" />
        <VStack top="3" left={5}>
          <Text
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
            {amount}
          </Text>
          <Text
            top={2}
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
        </VStack>
      </HStack>
    </Box>
  );
};

export default ExchangeRowWhite;
