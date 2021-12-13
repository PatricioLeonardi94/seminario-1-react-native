import React from 'react';
import { Center, Box, Text, VStack, HStack, Stack, Button, Image } from "native-base";
import BottomImageWithExitButton from "../../components/BottomImageWithExitButton";

const DoubleStepPage = ({step,handleNextStep,handleNegativeStep}) => {
    return (
        <Center>
            <VStack alignItems="center">
                <Center mt={"12.5%"}>
                    <Text
                        fontFamily="body"
                        fontWeight={500}
                        fontSize={18}
                        lineHeight={18}
                        display="flex"
                        alignItems="center"
                        textAlign="center"
                        letterSpacing={0.15}
                        color="rgba(0, 0, 0, 0.4)"
                    >
                        Paso {step.stepNumber?step.stepNumber:2}:
                    </Text>
                </Center>
                <HStack>
                    <Center mt={"10%"} w={'45%'} mr={'5%'}>
                        <Text
                            fontFamily="body"
                            fontWeight={500}
                            fontSize={17}
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
                    <Center mt={'5%'} w={'40%'} h={'100px'} >
                        <Image
                            w={"140px"}
                            h={"100px"}
                            source={require('../../assets/images/removeSticker.png')}
                            alt="Imagen"
                            style={{borderRadius: '8px'}} />
                    </Center>
                </HStack>
                <Center mt={'7.5%'}>
                    <Text color="#84D31E"> Ó </Text>
                </Center>
                <HStack mt={'5%'}>
                    <Center w={'40%'} h={'100px'}  mt={'5%'}>
                    <Image
                            w={"140px"}
                            h={"100px"}
                            source={require('../../assets/images/removeSticker.png')}
                            alt="Imagen"
                            style={{borderRadius: '8px'}} />
                    </Center>
                    <Center mt={"5%"} ml={'5%'} w={'45%'}>
                        <Text
                            mt={"10%"}
                            fontFamily="body"
                            fontWeight={500}
                            fontSize={17}
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
                </HStack>
                <Center
                    height={"8.5%"}
                    width={"200px"}
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