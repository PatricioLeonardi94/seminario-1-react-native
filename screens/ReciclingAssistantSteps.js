import React from 'react';
import {useState} from 'react';
import { Box } from "native-base";

import ChoiceStepPage from '../components/steps/ChoiceStepPage';
import DoubleStepPage from '../components/steps/DoubleStepPage';
import ForkStepPage from '../components/steps/ForkStepPage';
import NegativeStepPage from '../components/steps/NegativeStepPage';
import SimpleStepPage from '../components/steps/SimpleStepPage';
import FinalStepPage from '../components/steps/FinalStepPage';
import QRInstructions from '../components/steps/QRInstructions';

const ReciclingAssistantSteps = ({nav,steps}) => {
    const [currentStep, setCurrentStep] = useState(steps[0])
    const [negativeStep, setNegativeStep] = useState(false);
    const [finalStep, setFinalStep] = useState(false);
    
    const handleNextStep = () => {
        if(currentStep.stepNumber==steps.length){
            setFinalStep(true);
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
            {!finalStep ?
                (!negativeStep ?
                    displayStep(currentStep.stepType) :
                    <NegativeStepPage stepName={currentStep.stepName} handleReturnToPrevious={() => handleReturnToPrevious()} nav={nav}/>
                ) : 
                <QRInstructions nav={nav} step={steps.length+1} />
            }
        </Box>
    );
}

export default ReciclingAssistantSteps;