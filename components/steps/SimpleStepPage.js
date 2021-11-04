import React from 'react';
import { Center, Box, Text, VStack, HStack, Stack, Button } from "native-base";

const SimpleStepPage = ({step,handleNextStep,handleNegativeStep}) => {
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
                <Center mt={"7.5%"}>
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
                        {step.stepName}
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
                <Center
                height={"90px"}
                width={"180px"}
                mt={"15%"}
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
                        onPress={()=>handleNextStep()}
                    >
                        SIGUIENTE
                    </Text>
                </Center>
                <Center
                height={"90px"}
                width={"180px"}
                mt={"5%"}
                borderRadius={"8px"}
                bgColor="#grey"
                >
                    <Text
                        color="black"
                        font="body"
                        fontWeight={500}
                        fontSize={22}
                        lineHeight={30}
                        display="flex"
                        alignItems="center"
                        textAlign="center"
                        letterSpacing={0.16}
                        onPress={()=>handleNegativeStep()}
                    >
                        NO PUDE HACERLO
                    </Text>
                </Center>
                <Center mt={"15%"}>
                    <Text>Here goes bottom image</Text>
                </Center>
            </VStack>
        </Center>
    );
}

export default SimpleStepPage;