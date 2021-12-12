import * as React from "react";
import TopBox from "../TopBox";
import BottomImageWithExitButton from "../BottomImageWithExitButton";
import { Center, Box, Text, VStack, HStack, Stack, Button } from "native-base";

const QRInstructions = ({navigation,step}) => {
    let nextStep = step+1;
    return (
        <Box>
            <TopBox navigation={navigation}/>
            <Center>
                <VStack alignItems="center">
                    <Center mt={"5%"}>
                        <Text
                            fontFamily="body"
                            fontWeight={500}
                            fontSize={18}
                            lineHeight={24}
                            display="flex"
                            alignItems="center"
                            textAlign="center"
                            letterSpacing={0.15}
                            color="rgba(0, 0, 0, 0.4)"
                        >
                            Paso {step}
                        </Text>
                    </Center>
                    <Center mt={"5%"}>
                        <Text
                            fontFamily="body"
                            fontWeight={500}
                            fontSize={32}
                            lineHeight={24}
                            display="flex"
                            alignItems="center"
                            textAlign="center"
                            letterSpacing={0.15}
                            color="#84D31E"
                        >
                            {"Depositar en Cesto Inteligente"}
                        </Text>
                    </Center>
                </VStack>
            </Center>
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
                        lineHeight={36}
                        display="flex"
                        alignItems="center"
                        letterSpacing={0.15}
                        top={10}
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
                        Acercate al cesto y escanea su QR
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
                        lineHeight={36}
                        display="flex"
                        alignItems="center"
                        letterSpacing={0.15}
                        top={10}
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
                        Deposita tu producto
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
                        lineHeight={36}
                        display="flex"
                        alignItems="center"
                        letterSpacing={0.15}
                        top={10}
                        >
                        3.
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
                        ¡Recibe tus puntos!
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
                onPress={() => navigation.navigate("ThrowIntoSmartBin", {
                    step: nextStep, 
                })}
                bgColor="#84D31E"
                >
                ESCANEAR QR
                </Text>
            </Center>
            <Center
                height={"8.5%"}
                width={"47.5%"}
                mt={"5%"}
                borderRadius={"8px"}
                bgColor="rgba(0, 0, 0, 0.05)"
                >
                <Text
                    color="rgba(0, 0, 0, 0.4)"
                    font="body"
                    fontWeight={500}
                    fontSize={18}
                    lineHeight={18}
                    display="flex"
                    alignItems="center"
                    textAlign="center"
                    letterSpacing={0.16}
                    onPress={()=>navigation.navigate("ThrowIntoRegularBin")}
                >
                    NO TENGO UN CESTO INTELIGENTE CERCA
                </Text>
            </Center>
            <BottomImageWithExitButton mt={"-10%"}/>
        </VStack>
    </Box>
    );
}

export default QRInstructions;