import React from "react";
import {
  Radio,
  Center,
  Box,
  Text,
  VStack,
  HStack,
  Stack,
  Button,
} from "native-base";
import TopBox from "../components/TopBox";
import BottomImageWithExitButton from "../components/BottomImageWithExitButton";

const PicturePreview = ({navigation, picture}) => {
    return (
        <Box style={{width: '100%', height: '100%'}}>
          <VStack alignItems="center">
            <VStack>
              <HStack>
                <Center ml={"10%"} mt={"4%"}>
                <Image
                    w={"80%"}
                    h={"80%"}
                    opacity={1}
                    source={picture}
                    />
                </Center>
              </HStack>
            </VStack>
            <Center
              height={"7.5%"}
              width={"40%"}
              mt={"12.5%"}
              borderRadius={"8px"}
              bgColor="#84D31E"
            >
              <Text
                color="white"
                font="body"
                fontWeight={500}
                fontSize={22}
                lineHeight={24}
                display="flex"
                alignItems="center"
                textAlign="center"
                letterSpacing={0.16}
                onPress={() => navigation.navigate("IdentificationResult", {
                    material: "PLASTICO",
                  })}
                bgColor="#84D31E"
              >
                ESCANEAR PRODUCTO
              </Text>
            </Center>
          </VStack>
        </Box>
      );
}

export default PicturePreview;