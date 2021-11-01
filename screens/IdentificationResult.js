import {useState} from 'react';
import plasticSteps from './../assets/material-recicling-steps/plastico.json';
import metalSteps from './../assets/material-recicling-steps/metal.json';
import paperSteps from './../assets/material-recicling-steps/paper.json';
import glassSteps from './../assets/material-recicling-steps/vidrio.json';
import pilasSteps from './../assets/material-recicling-steps/pilas.json';
import cartonSteps from './../assets/material-recicling-steps/carton.json';
import ReciclingAssistantSteps from './ReciclingAssistantSteps';


const IdentificationResult = () => {
    const [material, setMaterial] = useState("");

    const getMaterialReciclingSteps = () => {
        switch (material.toUpperCase()){
            case "PLASTICO":
                return <ReciclingAssistantSteps steps={plasticSteps} />
            case "VIDRIO":
                return <ReciclingAssistantSteps steps={glassSteps} />
            case "Pilas":
                return <ReciclingAssistantSteps steps={pilasSteps} />
            case "PAPEL":
                return <ReciclingAssistantSteps steps={paperSteps} />
            case "CARTON":
                return <ReciclingAssistantSteps steps={cartonSteps} />
            case "METAL":
                return <ReciclingAssistantSteps steps={metalSteps} />
        }
    }
    
}

export default IdentificationResult;