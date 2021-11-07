import React from 'react';
import { Center, Box, Text, VStack, HStack, Stack, Button } from "native-base";
import BottomImageWithExitButton from "../../components/BottomImageWithExitButton";

const NegativeStepPage = ({stepName,handleReturnToPrevious,nav}) => {
    return (
        <Center>
            <VStack alignItems="center">
                <Center mt={"5%"}>
                    <Text
                        fontFamily="body"
                        fontWeight={500}
                        fontSize={16}
                        lineHeight={18}
                        display="flex"
                        alignItems="center"
                        textAlign="center"
                        letterSpacing={0.15}
                        color="rgba(0, 0, 0, 0.4)"
                    >
                        Si no pudiste hacer el paso "{stepName}":
                    </Text>
                </Center>
                <Center mt={"10%"}>
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
                        Lo puedes tirar en un tacho negro
                    </Text>
                </Center>
                <Center mt={"5%"}>
                    <Text> Ó </Text>
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
                        color="rgba(0, 0, 0, 0.4)"
                    >
                        Llevatelo con vos y reciclalo más tarde
                    </Text>
                </Center>
                <Center
                mt={"15%"}
                height={"8.5%"}
                width={"47.5%"}
                ml={"0%"}
                borderRadius={"8px"}
                bgColor="#84D31E"
                >
                    <Text
                        color="white"
                        font="body"
                        fontWeight={500}
                        fontSize={20}
                        lineHeight={18}
                        display="flex"
                        alignItems="center"
                        textAlign="center"
                        letterSpacing={0.16}
                        onPress={() =>
                            nav.navigate('Welcome')}
                    >
                        VOLVER AL INICIO
                    </Text>
                </Center>
                <Center
                mt={"10%"}
                height={"8.5%"}
                width={"47.5%"}
                ml={"0%"}
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
                        onPress={()=>handleReturnToPrevious()}
                    >
                        VOLVER AL PASO ANTERIOR
                    </Text>
                </Center>
                <BottomImageWithExitButton />
            </VStack>
        </Center>
    );
}

export default NegativeStepPage;