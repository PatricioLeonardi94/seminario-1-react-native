import * as React from "react";
import TopBox from "../components/TopBox";
import BottomImageWithExitButton from "../components/BottomImageWithExitButton";
import { Center, Box, Text, VStack, HStack, Stack, Button } from "native-base";

const Instrucciones = ({navigation}) => {
  return (
    <Box>
      <TopBox />
      <VStack alignItems="center" >
        <VStack>
          <HStack>
            <Center ml={"10%"} mt={"2.5%"}>
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
            <Center ml={"85px"} mr={"35px"} mt={"35px"} position="absolute">
              <Text
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
            <Center ml={"10%"} mt={"2.5%"}>
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
            <Center w={"240px"} ml={"10px"} mt={"15px"} mr={"35px"}>
              <Text
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
          pos="absolute"
          height={90}
          width={180}
          ml={"0%"}
          mt={"10%"}
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
            onPress={() =>
              navigation.navigate('SelectMaterial')
            }
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
