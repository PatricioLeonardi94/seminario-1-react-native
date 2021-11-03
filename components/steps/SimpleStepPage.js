import React from 'react';
import TopBox from '../TopBox';
import { Center, Box, Text, VStack, HStack, Stack, Button } from "native-base";

const SimpleStepPage = ({step,handleNextStep,handleNegativeStep}) => {
    return (
        <Center>
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
                        Paso {step.stepNumber}
                    </Text>
                </Center>
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
                        {step.stepName}
                    </Text>
                </Center>
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
                        {step.texts[0]}
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
                        onPress={()=>handleNextStep()}
                    >
                        SIGUIENTE
                    </Text>
                </Center>
                <Center
                pos="absolute"
                height={90}
                width={180}
                ml={"0%"}
                mt={"-10%"}
                borderRadius={"8px"}
                bgColor="#grey"
                >
                    <Text
                        pos="absolute"
                        color="black"
                        font="body"
                        fontWeight={500}
                        fontSize={26}
                        lineHeight={30}
                        display="flex"
                        alignItems="center"
                        textAlign="center"
                        letterSpacing={0.16}
                        onPress={()=>handleNegativeStep()}
                    >
                        No pude hacerlo
                    </Text>
                </Center>
                <Center>
                    <Text>Here goes bottom image</Text>
                </Center>
            </VStack>
        </Center>
    );
}

export default SimpleStepPage;