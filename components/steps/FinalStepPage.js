import React from 'react';
import { Center, Box, Text, VStack, HStack, Stack, Button, Image } from "native-base";
import BottomImageWithExitButton from "../../components/BottomImageWithExitButton";

const FinalStepPage = ({nav}) => {
    return (
        <Box mt={"12.5%"}>
            <Center>
                <VStack alignItems="center">
                    <Center mt={"5%"}>
                        <Text
                            fontFamily="body"
                            fontWeight={500}
                            fontSize={28}
                            lineHeight={28}
                            display="flex"
                            alignItems="center"
                            textAlign="center"
                            letterSpacing={0.15}
                            color="#84D31E"
                        >
                            ¡LISTO!
                        </Text>
                    </Center>
                    <Center w={"75%"}
                            h={"22.5%"} mt={"5%"}>
                        <Image
                            w={"220px"}
                            h={"180"}
                            style={{borderRadius:'25px'}}
                            source={require("../../assets/images/logo.png")}
                            alt="Imagen"
                        />
                    </Center>
                    <Center ml={"2.5%"} mr={"2.5%"} mt={"7.55%"} w={"85%"}>
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
                            Una vez hayas separado todos tus residuos, llevalos al contenedor de materiales reciclables más cercano, si es que no los arrojaste en un cesto verde de reciclables aún!
                        </Text>
                    </Center>
                    <Center
                    height={"7.5%"}
                    width={"200px"}
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
                                nav.navigate('Welcome')}
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

export default FinalStepPage;