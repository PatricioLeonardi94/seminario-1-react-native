import React from 'react';
import { Center, Box, Text, VStack, HStack, Stack, Button, Image } from "native-base";
import BottomImageWithExitButton from "../../components/BottomImageWithExitButton";
import TopBox from '../TopBox';
import DoubleStepPage from './DoubleStepPage';
import FinalStepPage from './FinalStepPage';

const ThrowIntoRegularBin = ({nav,step}) => {
    const [finalStep,setFinalStep] = React.useState(false)
    const step = {
        "stepName":"Separar",
        "stepNumber": 5,
        "stepType": 2,
        "images": [],
        "texts": ["Usa bolsa verde para tu producto","Arrojalo en un cesto de reciclables"]
    }

    return(
        <>
            <TopBox navegation={nav}/>
            <Center>
                {!finalStep? (
                    <DoubleStepPage step={step}/>
                ): (
                    <FinalStepPage nav={nav}/>
                )}
            </Center>

        </>
    )
}

export default ThrowIntoRegularBin;