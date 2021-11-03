import React from 'react';
import { Center, Box, Text, VStack, HStack, Stack, Button } from "native-base";

const DoubleStepPage = ({step,handleNextStep,handleNegativeStep}) => {
    return (
        <Center>
            <VStack alignItems="center">
                <Center>
                    <Text
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
                        Paso {step.stepNumber}:
                    </Text>
                </Center>
                <Center>
                    <Text
                        fontFamily="body"
                        fontWeight={500}
                        fontSize={24}
                        lineHeight={24}
                        display="flex"
                        alignItems="center"
                        textAlign="center"
                        letterSpacing={0.15}
                        color="#84D31E"
                    >
                        {step.stepName}
                    </Text>
                </Center>
                <Center>
                    <Text
                        fontFamily="body"
                        fontWeight={500}
                        fontSize={24}
                        lineHeight={24}
                        display="flex"
                        alignItems="center"
                        textAlign="center"
                        letterSpacing={0.15}
                        color="#84D31E"
                    >
                        {step.texts[0]}
                    </Text>
                </Center>
                <Center>
                    <Text> Ó </Text>
                    <Text
                        fontFamily="body"
                        fontWeight={500}
                        fontSize={24}
                        lineHeight={24}
                        display="flex"
                        alignItems="center"
                        textAlign="center"
                        letterSpacing={0.15}
                        color="#84D31E"
                    >
                        {step.texts[1]}
                    </Text>
                </Center>
                <Center
                height={"90px"}
                width={"180px"}
                ml={"0%"}
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
                        onPress={() =>
                            handleNextStep()}
                    >
                        SIGUIENTE
                    </Text>
                </Center>
                <Center
                >
                    <Text
                    >
                        Here goes image
                    </Text>
                </Center>
            </VStack>
        </Center>
    );
}

export default DoubleStepPage;