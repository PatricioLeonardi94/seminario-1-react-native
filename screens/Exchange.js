import TopBox from "../components/TopBox";
import { Box, Center, Image, Text, VStack, HStack } from "native-base";
import React, { useState, useContext } from "react";
import { TouchableHighlight } from "react-native";
import ExchangeRowWhite from "../components/ExchangeRowWhite";
import ExchangeRowGreen from "../components/ExchangeRowGreen";

const exchangeOne = {
  name: "Medialunas",
  amount: 2,
  image: require("../assets/images/comida/comida_medialuna.png"),
};

const exchangeTwo = {
  name: "Cafe Mediano",
  amount: 1,
  image: require("../assets/images/comida/comida_cafe.png"),
};

const exchangeThree = {
  name: "Burger Simple",
  amount: 2,
  image: require("../assets/images/comida/comida_burger.png"),
};

const exchangeFour = {
  name: "Pizza Chica",
  amount: 1,
  image: require("../assets/images/comida/comida_pizza.png"),
};

const Exchange = ({ navigation }) => {
  return (
    <Box>
      <TopBox navigation={navigation} />
      <VStack space={4}>
        <ExchangeRowWhite exchange={exchangeOne} />
        <ExchangeRowGreen exchange={exchangeTwo} />
        <ExchangeRowWhite exchange={exchangeThree} />
        <ExchangeRowGreen exchange={exchangeFour} />
      </VStack>
    </Box>
  );
};

export default Exchange;
