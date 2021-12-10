import TopBox from "../components/TopBox";
import { Box, Center, Image, Text, VStack, HStack } from "native-base";
import React, { useState, useContext } from "react";
import { TouchableHighlight } from "react-native";

const Medals = ({ navigation }) => {
  return (
    <Box>
      <TopBox navigation={navigation} />
      Medals
    </Box>
  );
};

export default Medals;
