import TopBox from "../components/TopBox";
import { Box, Center, Image, Text, VStack, HStack } from "native-base";
import React, { useEffect, useContext, useState } from "react";
import { TouchableHighlight, Vibration } from "react-native";
import MedalsRowWhite from "../components/MedalsRowWhite";
import MedalsRowGreen from "../components/MedalsRowGreen";
import BottomImageWithExitButton from "../components/BottomImageWithExitButton";

//credentialContext
import { CredentialsContext } from "../components/CredentialsContext";

const Medals = ({ navigation }) => {
  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);
  const { player, x_access_token } = storedCredentials;
  // var { medals } = player;

  const [badge, setBadge] = useState([]);

  useEffect(() => {
    getUserBadges();
  }, []);

  const getUserBadges = () => {
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
        const { player } = response.data;
        const { medals } = player;
        setBadge(medals);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  function getBadgeImage(imageNumber) {
    switch (imageNumber) {
      case 0:
        return require("../assets/images/badges/badge_1.png");
      case 1:
        return require("../assets/images/badges/badge_2.png");
      case 2:
        return require("../assets/images/badges/badge_3.png");
      case 3:
        return require("../assets/images/badges/badge_4.png");
    }
  }

  var medalArrayList = badge.map((medal, index) =>
    index % 2 === 0 ? (
      <MedalsRowWhite medal={medal} image={getBadgeImage(index % 4)} />
    ) : (
      <MedalsRowGreen medal={medal} image={getBadgeImage(index % 4)} />
    )
  );

  return (
    <Box>
      <TopBox navigation={navigation} />
      <VStack space={2}>{medalArrayList}</VStack>
      <Box mt={"100px"}>
        <BottomImageWithExitButton />
      </Box>
    </Box>
  );
};

export default Medals;
