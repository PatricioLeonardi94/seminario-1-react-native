import {useState} from 'react';

const ReciclingAssistantSteps = () => {
    // Dynamic Data:

    // Name:
    // Step , StepType => StepType tiene que seguir una convencion: 1 es simple, 2 es double, 3 es choice, 4 es fork (por ejemplo)
    // Image or Images
    const [currentStep, setCurrentStep] = useState(0)
    const [currentData, setCurrentData] = useState({});
    const [negativeStep, setNegativeStep] = useState(false);
    
    const handleNextStep = () => {
        setCurrentStep(currentStep+1);
    }

    return(
        <>
        </>
    );
}

export default ReciclingAssistantSteps;