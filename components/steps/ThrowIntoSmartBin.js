import React from 'react';
import { Center, Box, Text, VStack, HStack, Stack, Button, Image } from "native-base";
import BottomImageWithExitButton from "../../components/BottomImageWithExitButton";

const ThrowIntoSmartBin = ({nav, step}) => {
    return(
        <Box>
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
                            Despoite sus residuos de {material.toUpperCase()}
                        </Text>
                    </Center>
                    <Center w={"75%"}
                                h={"22.5%"} mt={"5%"}>
                            <Image
                                w={"100%"}
                                h={"100%"}
                                source={require("../../assets/images/logo.png")}
                                alt="Imagen"
                            />
                        </Center>
                        <Center ml={"2.5%"} mr={"2.5%"} mt={"7.55%"}>
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
                                ¡Arroja tus residuos al cesto inteligente y presioná el boton “FINALIZAR” para obtener tus puntos!
                            </Text>
                        </Center>
                        <Center
                        height={"7.5%"}
                        width={"45%"}
                        mt={"10%"}
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
                                    nav.navigate('Congratulations')}
                            >
                                FINALIZAR
                            </Text>
                        </Center>
                        <BottomImageWithExitButton />
                </VStack>
            </Center>
        </Box>
    );
}

export default ThrowIntoSmartBin;