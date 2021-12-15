import React from 'react';
import { Center, Box, Text, VStack, HStack, Stack, Button, Image } from "native-base";
import BottomImageWithExitButton from "../../components/BottomImageWithExitButton";
import TopBox from '../TopBox';
import DoubleStepPage from './DoubleStepPage';
import FinalStepPage from './FinalStepPage';

const ThrowIntoRegularBin = ({navigation,step}) => {
    const [finalStep,setFinalStep] = React.useState(false)

    const preStep = {
        "stepName":"Separar",
        "stepNumber": step,
        "stepType": 2,
        "images": ["../../assets/images/greenBag.png","../../assets/images/greenBin.png"],
        "texts": ["Usa bolsa verde para tu producto","Arrojalo en un cesto de reciclables"]
    }

    return(
        <>
            <TopBox navigation={navigation}/>
            <Center>
                {!finalStep? (
                    <DoubleStepPage step={preStep} handleNextStep={() => setFinalStep(true)} handleNegativeStep={false}/>
                ): (
                    <FinalStepPage nav={navigation}/>
                )}
            </Center>

        </>
    )
}

export default ThrowIntoRegularBin;