import * as React from "react";
import TopBox from "../components/TopBox";
import BottomImageWithExitButton from "../components/BottomImageWithExitButton";
import { Center, Box, Text, VStack, HStack, Stack, Button } from "native-base";

const Instrucciones = ({ navigation }) => {
  return (
    <Box>
      <TopBox />
      <VStack alignItems="center">
        <VStack>
          <HStack>
            <Center ml={"10%"} mt={"4%"}>
              <Text
                color="#84D31E"
                w={36}
                h={24}
                fontFamily="body"
                fontWeight={500}
                fontSize={36}
                lineHeight={24}
                display="flex"
                alignItems="center"
                letterSpacing={0.15}
              >
                1.
              </Text>
            </Center>
            <Center ml={"-2%"} mt={"6.5%"}>
              <Text
                w={"75.5%"}
                fontFamily="body"
                fontWeight={500}
                fontSize={20}
                lineHeight={24}
                display="flex"
                alignItems="center"
                letterSpacing={0.15}
                color="rgba(0, 0, 0, 0.4)"
              >
                Escaneá el producto que querés reciclar
              </Text>
            </Center>
          </HStack>
          <HStack>
            <Center ml={"10%"} mt={"1.5%"}>
              <Text
                color="#84D31E"
                w={36}
                h={24}
                fontFamily="body"
                fontWeight={500}
                fontSize={36}
                lineHeight={24}
                display="flex"
                alignItems="center"
                letterSpacing={0.15}
              >
                2.
              </Text>
            </Center>
            <Center ml={"-5.5%"} mt={"4.5%"}>
              <Text
                w={"70%"}
                fontFamily="body"
                fontWeight={500}
                fontSize={20}
                lineHeight={24}
                display="flex"
                alignItems="center"
                letterSpacing={0.15}
                color="rgba(0, 0, 0, 0.4)"
              >
                Seguí los pasos que te indique el asistente
              </Text>
            </Center>
          </HStack>
        </VStack>
        <Center
          height={"12.5%"}
          width={"50%"}
          mt={"12.5%"}
          borderRadius={"8px"}
          bgColor="#84D31E"
        >
          <Text
            color="white"
            font="body"
            fontWeight={500}
            fontSize={26}
            lineHeight={30}
            display="flex"
            alignItems="center"
            textAlign="center"
            letterSpacing={0.16}
            onPress={() => navigation.navigate("Camera")}
            bgColor="#84D31E"
          >
            ESCANEAR PRODUCTO
          </Text>
        </Center>
        <BottomImageWithExitButton />
      </VStack>
    </Box>
  );
};

export default Instrucciones;
