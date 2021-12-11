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
  name: "General Vidrio",
  target_points: 80,
  points: 20,
  material: "PLASTICO",
  is_granted: true,
  coins: 10,
  badge: "../assets/images/badges/badge_3.png",
};

const medalVidrio = {
  name: "Mariscal Novato",
  target_points: 100,
  points: 84,
  material: "VIDRIO",
  is_granted: false,
  coins: 6,
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
        <MedalsRowWhite medal={medalVidrio} />
        <MedalsRowGreen medal={medalPlastico} />
      </VStack>
      <BottomImageWithExitButton />
    </Box>
  );
};

export default Medals;
