import React from 'react';
import { Radio, Center, Box, Text, VStack, HStack, Stack, Button } from "native-base";
import TopBox from '../components/TopBox';

const SelectMaterial = ({material,setMaterial,navigation}) => {
    const handleMaterialChange = (newMaterial) => {
        setMaterial(newMaterial);
    }

    return (
        <Box>
            <TopBox />
            <VStack alignItems="center">
                <Center mt={"5%"} ml={"2%"} mr={"2%"}>
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
                        Selecciona el material del que está hecho tu producto:
                    </Text>
                </Center>
                <Center mt={"5%"} >
                    <Radio.Group
                        accessibilityLabel="Material Selector"
                        value={material}
                        onChange={(newValue) => {handleMaterialChange(newValue)}}
                        >
                        <Radio color="rgba(0, 0, 0, 0.4)" value="plastico">Plástico</Radio>
                        <Radio color="rgba(0, 0, 0, 0.4)" value="papel">Papel</Radio>
                        <Radio color="rgba(0, 0, 0, 0.4)" value="vidrio">Vidrio</Radio>
                        <Radio color="rgba(0, 0, 0, 0.4)" value="carton">Carton</Radio>
                        <Radio color="rgba(0, 0, 0, 0.4)" value="metal">Metal</Radio>
                    </Radio.Group>
                </Center>
                <Center
                height={"90px"}
                width={"180px"}
                mt={"10%"}
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
                            navigation.navigate('MaterialToRecycle')}
                    >
                        CONFIRMAR
                    </Text>
                </Center>
                <Center mt={"5%"}>
                    <Text>Here goes bottom image</Text>
                </Center>
            </VStack>
        </Box>
    );
}

export default SelectMaterial;