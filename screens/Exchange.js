import TopBox from "../components/TopBox";
import { Box, Center, Image, Text, VStack, HStack } from "native-base";
import React, { useState, useContext } from "react";
import { TouchableHighlight } from "react-native";

const Exchange = ({ navigation }) => {
  return (
    <Box>
      <TopBox navigation={navigation} />
      Exchange
    </Box>
  );
};

export default Exchange;
