import React from "react";

import { Box, Center } from "native-base";
import ReciclingAssistantSteps from "./ReciclingAssistantSteps";
import TopBox from "../components/TopBox";

import plasticSteps from "./../assets/material-recicling-steps/plastico.json";
import metalSteps from "./../assets/material-recicling-steps/metal.json";
import paperSteps from "./../assets/material-recicling-steps/papel.json";
import glassSteps from "./../assets/material-recicling-steps/vidrio.json";
import cartonSteps from "./../assets/material-recicling-steps/carton.json";

const IdentificationResult = ({ material, navigation }) => {
  const getMaterialReciclingSteps = () => {
    switch (material.toUpperCase()) {
      case "PLASTICO":
        return (
          <ReciclingAssistantSteps nav={navigation} steps={plasticSteps} />
        );
      case "VIDRIO":
        return <ReciclingAssistantSteps nav={navigation} steps={glassSteps} />;
      case "PAPEL":
        return <ReciclingAssistantSteps nav={navigation} steps={paperSteps} />;
      case "CARTON":
        return <ReciclingAssistantSteps nav={navigation} steps={cartonSteps} />;
      case "METAL":
        return <ReciclingAssistantSteps nav={navigation} steps={metalSteps} />;
    }
  };

  return (
    <Box>
      <TopBox />
      <Center>{getMaterialReciclingSteps()}</Center>
    </Box>
  );
};

export default IdentificationResult;
