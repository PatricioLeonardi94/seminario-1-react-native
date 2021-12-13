import React from 'react';
import { Center, Box, Text, VStack, HStack, Stack, Button, Image } from "native-base";
import BottomImageWithExitButton from "../../components/BottomImageWithExitButton";
import TopBox from '../TopBox';

const Congratulations = ({navigation}) => {
    const puntos = 253;

    return (
        <Box>
            <TopBox navigation={navigation}/>
            <Center>
                <VStack alignItems="center">
                    <Center mt={"5%"}>
                        <Text
                            fontFamily="body"
                            fontWeight={500}
                            fontSize={28}
                            lineHeight={24}
                            display="flex"
                            alignItems="center"
                            textAlign="center"
                            letterSpacing={0.15}
                            color="#84D31E"
                        >
                            ¡FELICITACIONES! 
                        </Text>
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
                            HAS COMPLETADO EL PROCESO DE RECICLADO, OBTIENES 3 PUNTOS EXTRA.
                        </Text>
                    </Center>
                    <Center mt={"5%"}>
                        <Text
                            fontFamily="body"
                            fontWeight={500}
                            fontSize={34}
                            lineHeight={34}
                            display="flex"
                            alignItems="center"
                            textAlign="center"
                            letterSpacing={0.15}
                            color="#84D31E"
                        >
                            +5 PUNTOS
                        </Text>
                    </Center>
                    <Center w={"75%"}
                            h={"22.5%"} mt={"5%"}>
                        <Image
                            w={"220px"}
                            h={"180px"}
                            source={require("../../assets/images/logo.png")}
                            alt="Imagen"
                            style={{borderRadius: '15px'}}
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
                            Total de Puntos: {puntos}
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
                                navigation.navigate('Welcome')}
                        >
                            VOLVER AL INICIO
                        </Text>
                    </Center>
                    <BottomImageWithExitButton />
                </VStack>
            </Center>
        </Box>
    );
}

export default Congratulations;