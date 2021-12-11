import React from "react";
import {
  Radio,
  Center,
  Box,
  Text,
  VStack,
  HStack,
  Stack,
  Button,
} from "native-base";
import TopBox from "../components/TopBox";
import BottomImageWithExitButton from "../components/BottomImageWithExitButton";

import { MaterialContext } from "../components/MaterialContext";

const SelectMaterial = ({ navigation }) => {
  const {material,setMaterial} = React.useContext(MaterialContext);

  const handleMaterialChange = (newMaterial) => {
    setMaterial(newMaterial);
  };

  return (
    <Box>
      <TopBox />
      <VStack alignItems="center">
        <Center mt={"7.5%"} ml={"2%"} mr={"2%"}>
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
            Indique el material de su producto:
          </Text>
        </Center>
        <Center mt={"7.5%"}>
          <Radio.Group
            accessibilityLabel="Material Selector"
            value={material}
            defaultValue={"plastico"}
            onChange={(newValue) => {
              handleMaterialChange(newValue);
            }}
          >
            <Radio
              mt={"1.5%"}
              color="rgba(0, 0, 0, 0.4)"
              value="plastico"
              fontSize={20}
            >
              Plástico
            </Radio>
            <Radio
              mt={"1.5%"}
              color="rgba(0, 0, 0, 0.4)"
              value="papel"
              fontSize={20}
            >
              Papel
            </Radio>
            <Radio
              mt={"1.5%"}
              color="rgba(0, 0, 0, 0.4)"
              value="vidrio"
              fontSize={20}
            >
              Vidrio
            </Radio>
            <Radio
              mt={"1.5%"}
              color="rgba(0, 0, 0, 0.4)"
              value="carton"
              fontSize={20}
            >
              Carton
            </Radio>
            <Radio
              mt={"1.5%"}
              color="rgba(0, 0, 0, 0.4)"
              value="metal"
              fontSize={20}
            >
              Metal
            </Radio>
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
            onPress={() => navigation.navigate("MaterialToRecycle")}
          >
            CONFIRMAR
          </Text>
        </Center>
        <BottomImageWithExitButton />
      </VStack>
    </Box>
  );
};

export default SelectMaterial;
