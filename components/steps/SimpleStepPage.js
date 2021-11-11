import React from 'react';
import { Center, Box, Text, VStack, HStack, Stack, Button, Image } from "native-base";
import BottomImageWithExitButton from "../../components/BottomImageWithExitButton";

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
                        {step.stepName}
                    </Text>
                </Center>
                <Center w={"75%"}
                        h={"22.5%"} mt={"5%"}>
                    <Image
                        w={"100%"}
                        h={"100%"}
                        source={require("../../assets/images/removeSticker.png")}
                        alt="Imagen"
                    />
                </Center>
                <Center mt={"5%"}>
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
                    height={"8.5%"}
                    width={"47.5%"}
                    mt={"7.5%"}
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
                        SIGUIENTE
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
                        onPress={()=>handleNegativeStep()}
                    >
                        NO PUDE HACERLO
                    </Text>
                </Center>
                <BottomImageWithExitButton mt={"-10%"}/>
            </VStack>
        </Center>
    );
}

export default SimpleStepPage;