import * as React from "react";
import { Center, Image, Text, HStack } from "native-base";
import constants from "../constants/constants";

const TopBox = () => {
  return (
    <HStack w={"360px"} h={"64px"} bg="#84D31E" alignItems="center">
      <Center w={"25%"}>
        <Image
          w={"17.49px"}
          h={"12px"}
          source={require("../assets/icons/menu.png")}
        />
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
        <Image
          w={"24px"}
          h={"24px"}
          source={require("../assets/icons/account_circle.png")}
        />
      </Center>
    </HStack>
  );
};

export default TopBox;
