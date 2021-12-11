import TopBox from "../components/TopBox";
import { Box, Center, Image, Text, VStack, HStack } from "native-base";
import React, { useState, useContext } from "react";
import { TouchableHighlight } from "react-native";
import MedalsRowWhite from "../components/MedalsRowWhite";
import MedalsRowGreen from "../components/MedalsRowGreen";
import BottomImageWithExitButton from "../components/BottomImageWithExitButton";

//credentialContext
import { CredentialsContext } from "../components/CredentialsContext";

const medalPlastico = {
  name: "General Plastico",
  target_points: 80,
  points: 20,
  material: "PLASTICO",
  is_granted: true,
  coins: 10,
  badge: require("../assets/images/badges/badge_1.png"),
};

const medalVidrio = {
  name: "Mariscal Vidrio",
  target_points: 100,
  points: 84,
  material: "VIDRIO",
  is_granted: false,
  coins: 6,
  badge: require("../assets/images/badges/badge_3.png"),
};

const medalMetal = {
  name: "Comandante Metal",
  target_points: 150,
  points: 75,
  material: "METAL",
  is_granted: false,
  coins: 20,
  badge: require("../assets/images/badges/badge_4.png"),
};

const medalCarton = {
  name: "Cadete Carton",
  target_points: 50,
  points: 10,
  material: "CARTON",
  is_granted: false,
  coins: 5,
  badge: require("../assets/images/badges/badge_2.png"),
};

const Medals = ({ navigation }) => {
  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);
  const { email, name, photoUrl, x_access_token, player } = storedCredentials;
  var medals = player.medals;

  return (
    <Box>
      <TopBox navigation={navigation} />
      <VStack space={2}>
        <MedalsRowWhite medal={medalPlastico} />
        <MedalsRowGreen medal={medalVidrio} />
        <MedalsRowWhite medal={medalMetal} />
        <MedalsRowGreen medal={medalCarton} />
      </VStack>
      <BottomImageWithExitButton />
    </Box>
  );
};

export default Medals;
