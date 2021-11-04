import React from 'react';
import { Center, Box, Text, VStack, HStack, Stack, Button } from "native-base";

const NegativeStepPage = ({stepName,handleReturnToPrevious,nav}) => {
    return (
        <Center>
            <VStack alignItems="center">
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
                        Si no pudiste hacer el paso "{stepName}":
                    </Text>
                </Center>
                <Center mt={"10%"}>
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
                        Guarda el producto para reciclarlo mas tarde
                    </Text>
                </Center>
                <Center mt={"5%"}>
                    <Text> Ó </Text>
                    <Text
                        mt={"10%"}
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
                        Arrojalo en un cesto negro de basura
                    </Text>
                </Center>
                <Center
                mt={"15%"}
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
                            nav.navigate('Welcome')}
                    >
                        FINALIZAR
                    </Text>
                </Center>
                <Center
                mt={"10%"}
                height={"90px"}
                width={"180px"}
                ml={"0%"}
                borderRadius={"8px"}
                bgColor="#grey"
                >
                    <Text
                        color="black"
                        font="body"
                        fontWeight={500}
                        fontSize={26}
                        lineHeight={30}
                        display="flex"
                        alignItems="center"
                        textAlign="center"
                        letterSpacing={0.16}
                        onPress={()=>handleReturnToPrevious()}
                    >
                        VOLVER AL PASO ANTERIOR
                    </Text>
                </Center>
            </VStack>
        </Center>
    );
}

export default NegativeStepPage;