import React from "react";
import {
  Center,
  Box,
  Text,
  VStack,
  HStack,
  Stack,
  Button,
  Image,
} from "native-base";
import BottomImageWithExitButton from "../../components/BottomImageWithExitButton";

import { MaterialContext } from "../MaterialContext";
import { CredentialsContext } from "../CredentialsContext";
import TopBox from "../TopBox";

// El tacho te espera 1:30 desde que iniciaste la coneccion
// En esta pantalla, el usuario debe tirar 
// EL tacho, cuando detecta el diferencial, pasa la sesion a "cerrada" y guarda los datos calculados

const ThrowIntoSmartBin = ({ navigation, step, connectionId }) => {
  const { material, setMaterial } = React.useContext(MaterialContext);
  const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);
  const { x_access_token } = storedCredentials;

  // Ni bien se monta, empezar a escuchar el HEAD de conexiones cerradas (con el id de coneccion) 
  // Una vez que se detecto cerrada, se llama al endpoint de conexiones cerradas para obtener sus detalles y cerrar el proceso

  const listenToClosedConection = (connectionId) => {
  
      const urlConnection =
        `http://glacial-garden-26787.herokuapp.com/api/bins/connections/${connectionId}/ended`;
  
      var config = {
        method: "head",
        url: urlConnection,
        headers: {
          "x-access-token": x_access_token,
        }
      };
  
      var axios = require("axios");
  
      axios(config)
        .then(function (response) {
          let status = response.status;
          if(status !== 200){
              listenToClosedConection(connectionId);
          }
          else{
            getConnectionDetails(connectionId);
          }
        })
        .catch(function (error) {
          console.log(error);
          navigation.navigate("Welcome", {
            step: step,
          });
        });
  }

  const getConnectionDetails = (connectionId) => {
    const urlConnection =
    `http://glacial-garden-26787.herokuapp.com//api/bins/connections/${connection_id}/ended`;

    var config = {
        method: "get",
        url: urlConnection,
        headers: {
        "x-access-token": x_access_token,
        }
    };

    var axios = require("axios");

    axios(config)
        .then(function (response) {
        
        })
        .catch(function (error) {
            console.log(error);
            navigation.navigate("Welcome", {
                step: step,
            });
        });
    }
  
  return (
    <Box>
      <TopBox navigation={navigation} />
      <Center>
        <VStack alignItems="center">
          <Center mt={"5%"}>
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
              Paso {step}
            </Text>
          </Center>
          <Center mt={"5%"}>
            <Text
              fontFamily="body"
              fontWeight={500}
              fontSize={32}
              lineHeight={24}
              display="flex"
              alignItems="center"
              textAlign="center"
              letterSpacing={0.15}
              color="#84D31E"
            >
              Despoite sus residuos de {material.toUpperCase()}
            </Text>
          </Center>
          <Center w={"75%"} h={"22.5%"} mt={"5%"}>
            <Image
              w={"100%"}
              h={"100%"}
              source={require("../../assets/images/logo.png")}
              alt="Imagen"
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
              ¡Arroja tus residuos al cesto inteligente y presioná el boton
              “FINALIZAR” para obtener tus puntos!
            </Text>
          </Center>
          <Center
            height={"7.5%"}
            width={"45%"}
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
              onPress={() => navigation.navigate("Congratulations")}
            >
              FINALIZAR
            </Text>
          </Center>
          <BottomImageWithExitButton />
        </VStack>
      </Center>
    </Box>
  );
};

export default ThrowIntoSmartBin;
