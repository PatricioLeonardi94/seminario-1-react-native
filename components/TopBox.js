import React, { useState, useContext } from "react";
import { Center, Image, Text, HStack, Box } from "native-base";
import constants from "../constants/constants";
import { TouchableHighlight } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const TopBox = ({ navigation }) => {
  return (
    <Box>
      <Center w={"100%"} h={"15%"} bg={"#84D31E"} />
      <HStack h={"64px"} bg="#84D31E" alignItems="center">
        <Center w={"25%"}>
          <TouchableHighlight onPress={() => navigation.navigate("Welcome")}>
            <AntDesign name="home" size={30} color="white" />
          </TouchableHighlight>
        </Center>
        <Center w={"50%"}>
          <Text
            pos="absolute"
            color="white"
            font="body"
            fontWeight={"normal"}
            fontSize={"20px"}
            lineHeight={"24px"}
            display="flex"
            alignItems="center"
            letterSpacing={0.15}
          >
            {constants.PROJECT_NAME}
          </Text>
        </Center>
        <Center w={"25%"}>
          <TouchableHighlight onPress={() => navigation.navigate("UserScreen")}>
            <Image
              w={"24px"}
              h={"24px"}
              source={require("../assets/icons/account_circle.png")}
              alt="User Information"
            />
          </TouchableHighlight>
        </Center>
      </HStack>
    </Box>
  );
};

export default TopBox;
