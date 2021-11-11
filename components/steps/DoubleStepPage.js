import React from 'react';
import { Center, Box, Text, VStack, HStack, Stack, Button, Image } from "native-base";
import BottomImageWithExitButton from "../../components/BottomImageWithExitButton";

const DoubleStepPage = ({step,handleNextStep,handleNegativeStep}) => {
    return (
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
                        Paso {step.stepNumber}:
                    </Text>
                </Center>
                <Center mt={"7.5%"}>
                    {/*<HStack mr={"35%"}>
                        <Center w={"100%"}
                                h={"100%"} mt={"5%"}>
                            <Image
                                w={"100%"}
                                h={"100%"}
                                source={require("../../assets/images/logo.png")}
                                alt="Imagen"
                            />
                        </Center>
                    </HStack>*/}
                    <HStack w={"45%"}
                        h={"25%"}>
                        <Text
                            fontFamily="body"
                            fontWeight={500}
                            fontSize={20}
                            lineHeight={24}
                            display="flex"
                            alignItems="center"
                            textAlign="center"
                            letterSpacing={0.15}
                            color="#84D31E"
                        >
                            {step.texts[0]}
                        </Text>
                    </HStack>
                </Center>
                <Center mt={"5%"}>
                    <Text > Ó </Text>
                </Center>
                <Center mt={"10%"}>
                    <HStack >
                        <Text
                            fontFamily="body"
                            fontWeight={500}
                            fontSize={20}
                            lineHeight={24}
                            display="flex"
                            alignItems="center"
                            textAlign="center"
                            letterSpacing={0.15}
                            color="#84D31E"
                        >
                            {step.texts[1]}
                        </Text>
                    </HStack>
                    {/*<HStack ml={"15%"}>
                        <Center w={"100%"}
                                h={"100%"} mt={"5%"}>
                            <Image
                                w={"100%"}
                                h={"100%"}
                                source={require("../../assets/images/logo.png")}
                                alt="Imagen"
                            />
                        </Center>
                </HStack>*/}
                </Center>
                <Center
                    height={"8.5%"}
                    width={"47.5%"}
                    mt={"15%"}
                    borderRadius={"8px"}
                    bgColor="#84D31E"
                    >
                    <Text
                        color="white"
                        font="body"
                        fontWeight={500}
                        fontSize={21}
                        lineHeight={21}
                        display="flex"
                        alignItems="center"
                        textAlign="center"
                        letterSpacing={0.16}
                        onPress={() =>
                            handleNextStep()}
                    >
                        SIGUIENTE
                    </Text>
                </Center>
                <BottomImageWithExitButton />
            </VStack>
        </Center>
    );
}

export default DoubleStepPage;