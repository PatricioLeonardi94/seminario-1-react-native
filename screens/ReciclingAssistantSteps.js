import React from 'react';
import {useState} from 'react';
import { Box } from "native-base";

import ChoiceStepPage from '../components/steps/ChoiceStepPage';
import DoubleStepPage from '../components/steps/DoubleStepPage';
import ForkStepPage from '../components/steps/ForkStepPage';
import NegativeStepPage from '../components/steps/NegativeStepPage';
import SimpleStepPage from '../components/steps/SimpleStepPage';

const ReciclingAssistantSteps = ({nav,steps}) => {
    const [currentStep, setCurrentStep] = useState(steps[0])
    const [negativeStep, setNegativeStep] = useState(false);
    
    const handleNextStep = () => {
        if(currentStep.stepNumber==steps.length){
            nav.navigate("QRInstructions", {
                step: currentStep.stepNumber+1,
            });
        }
        else{
            setCurrentStep(steps[currentStep.stepNumber]);
        }
    }

    const handleReturnToPrevious = () => {
        setNegativeStep(false);
    }

    const displayStep = (stepType) => {
        switch(stepType){
            case 1:
                return <SimpleStepPage step={currentStep} handleNextStep={()=>handleNextStep()} handleNegativeStep={() => setNegativeStep(true)}/>
            case 2:
                return <DoubleStepPage step={currentStep} handleNextStep={()=>handleNextStep()} handleNegativeStep={() => setNegativeStep(true)}/>
            case 3:
                return <ChoiceStepPage step={currentStep} handleNextStep={()=>handleNextStep()} handleNegativeStep={() => setNegativeStep(true)}/>
            case 4:
                return <ForkStepPage step={currentStep} handleNextStep={()=>handleNextStep()} handleNegativeStep={() => setNegativeStep(true)}/>
        }
    }

    return(
        <Box mt={"2%"}>
            {!negativeStep ?
                displayStep(currentStep.stepType) :
                <NegativeStepPage stepName={currentStep.stepName} handleReturnToPrevious={() => handleReturnToPrevious()} nav={nav}/>
            }
        </Box>
    );
}

export default ReciclingAssistantSteps;