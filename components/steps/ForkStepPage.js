import React from 'react';
import { Center, Box, Text, VStack, HStack, Stack, Button } from "native-base";
import BottomImageWithExitButton from "../../components/BottomImageWithExitButton";


const ForkStepPage = ({step,handleNextStep,handleNegativeStep}) => {
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
                        Paso {step.stepNumber}
                    </Text>
                </Center>
                <Center mt={"25%"}>
                    <Text
                        fontFamily="body"
                        fontWeight={500}
                        fontSize={20}
                        lineHeight={24}
                        display="flex"
                        alignItems="center"
                        textAlign="center"
                        letterSpacing={0.15}
                        color="rgba(0, 0, 0, 0.4)"
                    >
                        {step.texts[0]}
                    </Text>
                </Center>
                <Center>
                    <HStack >
                        <Center
                            height={"6.5%"}
                            width={"8.5%"}
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
                                    onPress={()=>handleNegativeStep()}
                                >
                                    NO
                                </Text>
                        </Center>
                    </HStack>
                    <HStack >
                        <Center
                        height={"6.5%"}
                        width={"8.5%"}
                        mt={"15%"}
                        borderRadius={"8px"}
                        bgColor="#84D31E"
                        >
                            <Text
                                color="white"
                                font="body"
                                fontWeight={500}
                                fontSize={21}
                                lineHeight={18}
                                display="flex"
                                alignItems="center"
                                textAlign="center"
                                letterSpacing={0.16}
                                onPress={()=>handleNextStep()}
                            >
                            SI
                            </Text>
                        </Center>
                    </HStack>
                </Center>
                <BottomImageWithExitButton />
            </VStack>
        </Center>
    );
}

export default ForkStepPage;