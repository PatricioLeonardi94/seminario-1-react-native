import React, { useState, useEffect, useContext } from "react";
import TopBox from "../components/TopBox";
import { Box, Button, Text, VStack, View, Image, Center } from "native-base";

//credentialContext
import { CredentialsContext } from "./../components/CredentialsContext";

const QRSender = ({ navigation }) => {
  const [binConnection, setBinConnection] = useState(null);
  const [binConnectionInfo, setBinConnectionInfo] = useState(null);

  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);
  const { x_access_token } = storedCredentials;

  useEffect(() => {
    if (x_access_token !== null && binConnection === null) {
      handleBinConnection();
    }
  }, []);

  const handleBinConnection = () => {
    const binData = {
      connection_code: 123,
      flow_points: 5,
      material: "plastic",
    };

    const urlConnection =
      "http://glacial-garden-26787.herokuapp.com/api/bins/connections" +
      "?" +
      "connection_code=" +
      binData.connection_code +
      "max_resultsflow_points=" +
      binData.flow_points +
      "material=" +
      binData.material;

    var config = {
      method: "post",
      url: urlConnection,
      headers: {
        "x-access-token": x_access_token,
      },
    };

    var axios = require("axios");

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setBinConnection(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getBinConnectionInfo = () => {
    const urlConnection =
      "http://glacial-garden-26787.herokuapp.com/api/bins/connections/dffbcc61-41cb-4c19-a332-9490d2e4113e/ended ";

    var config = {
      method: "get",
      url: urlConnection,
      headers: {
        "x-access-token": x_access_token,
      },
    };

    var axios = require("axios");

    //Deberiamos primero ver el head del mismo para ver si tiene el 200

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setBinConnectionInfo(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Box>
      <Center>hola</Center>
    </Box>
  );
};

export default QRSender;
