import * as React from "react";
import TopBox from "../components/TopBox";
import BottomImageWithExitButton from "../components/BottomImageWithExitButton";
import { Center, Box, Text, VStack, Image } from "native-base";

const Instrucciones = () => {
  return (
    <Box w={"360px"} h={"640px"}>
      <TopBox />
      <VStack alignItems="center">
        <Center>
          <Text
            ml={"13.89%"}
            mr={"13.89%"}
            mt={"20.94%"}
            mb={"65.62%"}
            fontFamily="body"
            fontWeight={500}
            fontSize={24}
            lineHeight={24}
            display="flex"
            alignItems="center"
            textAlign="center"
            letterSpacing={0.15}
            color="rgba(0, 0, 0, 0.4)"
          >
            ¡Bienvenido a tu asistente de reciclado!
          </Text>
        </Center>
        <Center
          pos="absolute"
          height={90}
          width={180}
          ml={"0%"}
          mt={"-10%"}
          borderRadius={"8px"}
          bgColor="#84D31E"
        >
          <Text
            pos="absolute"
            color="white"
            font="body"
            fontWeight={500}
            fontSize={26}
            lineHeight={30}
            display="flex"
            alignItems="center"
            textAlign="center"
            letterSpacing={0.16}
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
