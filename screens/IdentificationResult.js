import {useState} from 'react';
/*
import { Center } from "native-base";
import ReciclingAssistantSteps from './ReciclingAssistantSteps';

import plasticSteps from './../assets/material-recicling-steps/plastico.json';
import metalSteps from './../assets/material-recicling-steps/metal.json';
import paperSteps from './../assets/material-recicling-steps/paper.json';
import glassSteps from './../assets/material-recicling-steps/vidrio.json';
import cartonSteps from './../assets/material-recicling-steps/carton.json';
*/

const plasticSteps = [
    {
        "stepName":"Lavar",
        "stepNumber": 1,
        "stepType": 1,
        "images": [],
        "texts": ["Asegurate de lavar bien los envases, y que no queden restos de alimentos"]
    },
    {
        "stepName":"Secar",
        "stepNumber": 2,
        "stepType": 1,
        "images": [],
        "texts": ["Asegurate de secar bien, para no estropear el reciclado"]
    }
]

const IdentificationResult = ({material}) => {
    const getMaterialReciclingSteps = () => {
        switch (material.toUpperCase()){
            case "PLASTICO":
                return <ReciclingAssistantSteps steps={plasticSteps} />
            /*case "VIDRIO":
                return <ReciclingAssistantSteps steps={glassSteps} />
            case "PAPEL":
                return <ReciclingAssistantSteps steps={paperSteps} />
            case "CARTON":
                return <ReciclingAssistantSteps steps={cartonSteps} />
            case "METAL":
                return <ReciclingAssistantSteps steps={metalSteps} />*/
        }
    }

    return(
        <Center>
            {getMaterialReciclingSteps()}
        </Center>
    )
    
}

export default IdentificationResult;