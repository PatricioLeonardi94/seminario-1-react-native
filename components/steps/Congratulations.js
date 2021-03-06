import React, {useState, useContext, useEffect} from 'react';
import { Center, Box, Text, VStack, HStack, Stack, Button, Image } from "native-base";
import BottomImageWithExitButton from "../../components/BottomImageWithExitButton";
import TopBox from '../TopBox';

import {CredentialsContext} from '../CredentialsContext';

const Congratulations = ({navigation, route}) => {
    const {points, flowPoints} = route.params;
    const [userInfo, setUserInfo] = useState({
      user: {
        fullname: '',
        photo: "",
      },
      month_points: "0",
      points: "0",
      coins: "0",
    });
  
    //context
    const { storedCredentials, setStoredCredentials } =
      useContext(CredentialsContext);
  
    if (storedCredentials !== null) {
      var { x_access_token } = storedCredentials;
    }
  
    useEffect(() => {
        console.log(x_access_token);
        getUserInfo();
    }, []);
  
    const getUserInfo = () => {
      var config = {
        method: "get",
        url: "http://glacial-garden-26787.herokuapp.com/api/players/me/profile",
        headers: {
          "x-access-token": x_access_token,
        },
      };
  
      var axios = require("axios");
  
      axios(config)
        .then(function (response) {
          var { player } = response.data;
          setUserInfo(player);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    return (
        <Box>
            <TopBox navigation={navigation}/>
            <Center>
                <VStack alignItems="center">
                    <Center mt={"7.55%"}>
                        <Text
                            fontFamily="body"
                            fontWeight={500}
                            fontSize={28}
                            lineHeight={28}
                            display="flex"
                            alignItems="center"
                            textAlign="center"
                            letterSpacing={0.15}
                            color="#84D31E"
                        >
                            ??FELICITACIONES! 
                        </Text>
                    </Center>
                    <Center ml={"2.5%"} mr={"2.5%"} mt={"7.55%"}>
                        <Text
                            fontFamily="body"
                            fontWeight={500}
                            fontSize={18}
                            lineHeight={24}
                            display="flex"
                            alignItems="center"
                            textAlign="center"
                            letterSpacing={0.15}
                            color="rgba(0, 0, 0, 0.4)"
                        >
                            ??HAS COMPLETADO EL PROCESO DE RECICLADO!
                        </Text>
                    </Center>
                    <Center mt={"5%"}>
                        <Text
                            fontFamily="body"
                            fontWeight={500}
                            fontSize={34}
                            lineHeight={34}
                            display="flex"
                            alignItems="center"
                            textAlign="center"
                            letterSpacing={0.15}
                            color="#84D31E"
                        >
                            +{flowPoints?(points):5} PUNTOS
                        </Text>
                    </Center>
                    <Center w={"75%"}
                            h={"22.5%"} mt={"5%"}>
                        <Image
                            w={"220px"}
                            h={"180px"}
                            source={require("../../assets/images/logo.png")}
                            alt="Imagen"
                            style={{borderRadius: '15px'}}
                        />
                    </Center>
                    <Center ml={"2.5%"} mr={"2.5%"} mt={"7.55%"}>
                        <Text
                            fontFamily="body"
                            fontWeight={500}
                            fontSize={18}
                            lineHeight={24}
                            display="flex"
                            alignItems="center"
                            textAlign="center"
                            letterSpacing={0.15}
                            color="rgba(0, 0, 0, 0.4)"
                        >
                            Total de Puntos: {userInfo.points?userInfo.points:253}
                        </Text>
                    </Center>
                    <Center
                    height={"7.5%"}
                    width={"200px"}
                    mt={"10%"}
                    borderRadius={"8px"}
                    bgColor="#84D31E"
                    >
                        <Text
                            color="white"
                            font="body"
                            fontWeight={500}
                            fontSize={21}
                            lineHeight={21}
                            display="flex"
                            alignItems="center"
                            textAlign="center"
                            letterSpacing={0.16}
                            onPress={() =>
                                navigation.navigate('Welcome')}
                        >
                            VOLVER AL INICIO
                        </Text>
                    </Center>
                    <BottomImageWithExitButton />
                </VStack>
            </Center>
        </Box>
    );
}

export default Congratulations;