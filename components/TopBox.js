import * as React from "react";
import { Center, Image, Text, HStack, Box } from "native-base";
import constants from "../constants/constants";
import { TouchableHighlight } from "react-native";
import { NavigationContext } from "@react-navigation/native";

const TopBox = () => {
  const navigation = React.useContext(NavigationContext);

  return (
    <Box>
      <Center w={"100%"} h={"15%"} bg={"#84D31E"} />
      <HStack h={"64px"} bg="#84D31E" alignItems="center">
        <Center w={"25%"}>
          <Image
            w={"17.49px"}
            h={"12px"}
            source={require("../assets/icons/menu.png")}
            alt=""
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
          <TouchableHighlight onPress={() => navigation.navigate("Login")}>
            <Image
              w={"24px"}
              h={"24px"}
              source={require("../assets/icons/account_circle.png")}
              alt=""
            />
          </TouchableHighlight>
        </Center>
      </HStack>
    </Box>
  );
};

export default TopBox;
