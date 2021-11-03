import React from 'react';
import { Center, Box, Text, VStack, HStack, Stack, Button } from "native-base";

const FinalStepPage = ({nav}) => {
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
                        color="#84D31E"
                    >
                        ¡LISTO!
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
                        color="rgba(0, 0, 0, 0.4)"
                    >
                        Una vez hayas separado todos tus residuos, llevalos al contenedor de materiales reciclables más cercano, si es que no los arrojaste en un cesto verde de reciclables aún!
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
                            nav.navigate('Welcome')}
                    >
                        FINALIZAR
                    </Text>
                </Center>
                <Center
                bgColor="#grey"
                >
                    <Text>
                        Here goes image
                    </Text>
                </Center>
            </VStack>
        </Center>
    );

}

export default FinalStepPage;