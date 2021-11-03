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
                        Selecciona el material del que está hecho tu producto:
                    </Text>
                </Center>
                <Center>
                    <Radio.Group
                        accessibilityLabel="Material Selector"
                        value={material}
                        onChange={(newValue) => {handleMaterialChange(newValue)}}
                        >
                        <Radio value="plastico">Plástico</Radio>
                        <Radio value="papel">Papel</Radio>
                        <Radio value="vidrio">Vidrio</Radio>
                        <Radio value="carton">Carton</Radio>
                        <Radio value="metal">Metal</Radio>
                    </Radio.Group>
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
                            navigation.navigate('MaterialToRecycle')}
                    >
                        CONFIRMAR
                    </Text>
                </Center>
                <Center>
                    <Text>Here goes bottom image</Text>
                </Center>
            </VStack>
        </Box>
    );
}

export default SelectMaterial;