import React from 'react';
import TopBox from '../components/TopBox';
import { Center, Box, Text, VStack} from "native-base";

const MaterialToRecycle = ({navigation,material}) => {
    return (
        <Box>
            <TopBox />
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
                        color="rgba(0, 0, 0, 0.4)"
                    >
                        El producto que deseas reciclar está hecho de:
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
                        color="#84D31E"
                    >
                        {material.toUpperCase()}
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
                        Seguí los pasos a continuacion para reciclar tu prodcuto!
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
                            navigation.navigate('IdentificationResult')}
                    >
                        RECICLAR
                    </Text>
                </Center>
                <Center>
                    <Text>Here goes bottom image</Text>
                </Center>
            </VStack>
        </Box>
    );
}

export default MaterialToRecycle;