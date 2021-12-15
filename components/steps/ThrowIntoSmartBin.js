import React, { useState, useEffect, useContext } from "react";
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
import axiosRetry from "axios-retry";

import { MaterialContext } from "../MaterialContext";
import { CredentialsContext } from "../CredentialsContext";
import { QRContext } from "../Contexts/QRContext";

import TopBox from "../TopBox";

// El tacho te espera 1:30 desde que iniciaste la coneccion
// En esta pantalla, el usuario debe tirar
// EL tacho, cuando detecta el diferencial, pasa la sesion a "cerrada" y guarda los datos calculados

const ThrowIntoSmartBin = ({ navigation, step }) => {
  const { material, setMaterial } = React.useContext(MaterialContext);
  const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);
  const { x_access_token } = storedCredentials;
  const { binConnection, setBinConnection } = useContext(QRContext);

  // Ni bien se monta, empezar a escuchar el HEAD de conexiones cerradas (con el id de coneccion)
  // Una vez que se detecto cerrada, se llama al endpoint de conexiones cerradas para obtener sus detalles y cerrar el proceso

  const listenToClosedConection = async () => {
    const urlConnection = `http://glacial-garden-26787.herokuapp.com/api/bins/connections/${binConnection}/ended`;

    var axios = require("axios");
    const axiosRetry = require("axios-retry");

    axiosRetry(axios, {
      retries: 100, // number of retries
      retryDelay: (retryCount) => {
        return retryCount * 2000; // time interval between retries
      },
      retryCondition: (error) => {
        // if retry condition is not specified, by default idempotent requests are retried
        console.log(`retry attempt: ${retryCount}`);
        return error.response.status === 404;
      },
    });
    const response = await axios({
      method: "HEAD",
      url: urlConnection,
      headers: {
        "x-access-token": x_access_token,
      },
    }).catch((err) => {
      if (err.response.status !== 200) {
        throw new Error(
          `API call failed with status code: ${err.response.status} after 3 retry attempts`
        );
      }
    });

    if (response.status === 200) {
      // Devolvio 200 la conexion de el tacho en ended
      console.log(response.status);
      getConnectionDetails();
    }
  };

  const getConnectionDetails = async () => {
    const urlConnection = `http://glacial-garden-26787.herokuapp.com/api/bins/connections/${binConnection}/ended`;

    var config = {
      method: "get",
      url: urlConnection,
      headers: {
        "x-access-token": x_access_token,
      },
    };

    var axios = require("axios");

    axios(config)
      .then(function (response) {
        console.log("GET bin connection ended info", response.data);
        const { data } = response.data;
        const puntosGanados = data.points;
        navigation.navigate("Congratulations", {
          points: puntosGanados,
        });
      })
      .catch(function (error) {
        console.log("Error trying to get bin ended information", error);
      });
  };

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
              lineHeight={32}
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
              w={"220px"}
              h={"180px"}
              style={{borderRadius: '8opx'}}
              source={require("../../assets/images/deposit.png")}
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
              onPress={() => listenToClosedConection()}
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
