import TopBox from "../components/TopBox";
import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Animated,
  Pressable,
  ImageBackground,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import {
  NativeBaseProvider,
  Box,
  Text,
  Center,
  Image,
  VStack,
  HStack,
} from "native-base";

const Raking = ({ navigation }) => {
  const [ranking, setRanking] = useState(null);
  const [montlyRanking, setMontlyRanking] = useState(null);

  useEffect(() => {
    if (ranking === null) {
      getRanking();
    }
  });

  // Get Ranking
  function getRanking() {
    var config = {
      method: "get",
      url: "http://glacial-garden-26787.herokuapp.com/api/players/ranking",
    };

    var axios = require("axios");

    axios(config)
      .then(function (response) {
        const { data } = response.data;
        var rankingTotal = data["ranking"];
        setRanking(rankingTotal);
        var ranking_monthly = data["ranking_monthly"];
        setMontlyRanking(ranking_monthly);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function renderInfo() {
    if (ranking !== null) {
      if (index == 0) {
        return (
          <VStack alignItems="center">
            <HStack p="5" space={2}>
              <Center>
                <Image
                  source={require("../assets/images/ranking/ranking_1.png")}
                  alt="medal 1"
                />
              </Center>
              <Center w="30" />
              <Center>
                <Text
                  fontSize={20}
                  lineHeight={30}
                  opacity={0.4}
                  letterSpacing={0.16}
                >
                  {JSON.stringify(ranking[0].user.fullname)}
                </Text>
                <Text
                  fontSize={20}
                  lineHeight={30}
                  opacity={0.4}
                  letterSpacing={0.16}
                >
                  {JSON.stringify(ranking[0].points)}
                </Text>
              </Center>
            </HStack>
            <HStack p="5" space={2}>
              <Center>
                <Text
                  fontSize={20}
                  lineHeight={30}
                  opacity={0.4}
                  letterSpacing={0.16}
                >
                  {JSON.stringify(ranking[1].user.fullname)}
                </Text>
                <Text
                  fontSize={20}
                  lineHeight={30}
                  opacity={0.4}
                  letterSpacing={0.16}
                >
                  {JSON.stringify(ranking[1].points)}
                </Text>
              </Center>
              <Center w="30" h="30" />
              <Center>
                <Image
                  source={require("../assets/images/ranking/ranking_2.png")}
                  alt="medal 2"
                />
              </Center>
            </HStack>
            <HStack p="5" space={2}>
              <Center>
                <Image
                  source={require("../assets/images/ranking/ranking_3.png")}
                  alt="medal 1"
                />
              </Center>
              <Center w="30" h="30" />
              <Center>
                <Text
                  fontSize={20}
                  lineHeight={30}
                  opacity={0.4}
                  letterSpacing={0.16}
                >
                  "Mariana Diaz"
                </Text>
                <Text
                  fontSize={20}
                  lineHeight={30}
                  opacity={0.4}
                  letterSpacing={0.16}
                >
                  54
                </Text>
              </Center>
            </HStack>
            <HStack space={2}>
              <Center w="70" h="30" />
              <Text
                fontSize={15}
                lineHeight={50}
                opacity={0.4}
                letterSpacing={0.16}
              >
                20
              </Text>
              <Text
                fontSize={15}
                lineHeight={50}
                opacity={0.4}
                letterSpacing={0.16}
              >
                "Martin Gomez"
              </Text>
            </HStack>
            <HStack space={2}>
              <Center w="70" h="30" />
              <Text
                fontSize={15}
                lineHeight={50}
                opacity={0.4}
                letterSpacing={0.16}
              >
                12
              </Text>
              <Text
                fontSize={15}
                lineHeight={50}
                opacity={0.4}
                letterSpacing={0.16}
              >
                "Javier Garcia"
              </Text>
            </HStack>
          </VStack>
        );
      } else if (index == 1) {
        return (
          <VStack alignItems="center">
            <HStack p="5" space={2}>
              <Center>
                <Text
                  fontSize={20}
                  lineHeight={30}
                  opacity={0.4}
                  letterSpacing={0.16}
                >
                  {JSON.stringify(montlyRanking[0].user.fullname)}
                </Text>
                <Text
                  fontSize={20}
                  lineHeight={30}
                  opacity={0.4}
                  letterSpacing={0.16}
                >
                  {JSON.stringify(montlyRanking[0].month_points)}
                </Text>
              </Center>
              <Center w="30" h="30" />
              <Center>
                <Image
                  source={require("../assets/images/ranking/ranking_1.png")}
                  alt="medal 1"
                />
              </Center>
            </HStack>
            <HStack p="5" space={2}>
              <Center>
                <Image
                  source={require("../assets/images/ranking/ranking_2.png")}
                  alt="medal 2"
                />
              </Center>
              <Center w="30" h="30" />
              <Center>
                <Text
                  fontSize={20}
                  lineHeight={30}
                  opacity={0.4}
                  letterSpacing={0.16}
                >
                  {JSON.stringify(montlyRanking[1].user.fullname)}
                </Text>
                <Text
                  fontSize={20}
                  lineHeight={30}
                  opacity={0.4}
                  letterSpacing={0.16}
                >
                  {JSON.stringify(montlyRanking[1].month_points)}
                </Text>
              </Center>
            </HStack>
            <HStack p="5" space={2}>
              <Center>
                <Text
                  fontSize={20}
                  lineHeight={30}
                  opacity={0.4}
                  letterSpacing={0.16}
                >
                  "Mariana Diaz"
                </Text>
                <Text
                  fontSize={20}
                  lineHeight={30}
                  opacity={0.4}
                  letterSpacing={0.16}
                >
                  54
                </Text>
              </Center>
              <Center w="30" h="30" />
              <Center>
                <Image
                  source={require("../assets/images/ranking/ranking_3.png")}
                  alt="medal 1"
                />
              </Center>
            </HStack>
            <HStack space={2}>
              <Text
                fontSize={15}
                lineHeight={50}
                opacity={0.4}
                letterSpacing={0.16}
              >
                20
              </Text>
              <Text
                fontSize={15}
                lineHeight={50}
                opacity={0.4}
                letterSpacing={0.16}
              >
                "Martin Gomez"
              </Text>
              <Center w="70" h="30" />
            </HStack>
            <HStack space={2}>
              <Text
                fontSize={15}
                lineHeight={50}
                opacity={0.4}
                letterSpacing={0.16}
              >
                12
              </Text>
              <Text
                fontSize={15}
                lineHeight={50}
                opacity={0.4}
                letterSpacing={0.16}
              >
                "Javier Garcia"
              </Text>
              <Center w="70" h="30" />
            </HStack>
          </VStack>
        );
      } else {
        return <Box></Box>;
      }
    } else {
      return <Box></Box>;
    }
  }

  var FirstRoute = () => <Box>{renderInfo()}</Box>;

  var SecondRoute = () => <Box>{renderInfo()}</Box>;

  const initialLayout = { width: Dimensions.get("window").width };

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "RANKING GENERAL" },
    { key: "second", title: "RANKING MENSUAL" },
  ]);

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });
          const color = index === i ? "#1f2937" : "#a1a1aa";
          const borderColor = index === i ? "cyan.500" : "coolGray.200";

          return (
            <Box
              borderBottomWidth="5"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              p="4"
            >
              <Pressable
                onPress={() => {
                  setIndex(i);
                }}
              >
                <Animated.Text style={{ color }}>{route.title}</Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <NativeBaseProvider>
      <TopBox navigation={navigation} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={{ marginTop: StatusBar.currentHeight }}
      />
      {/* Podemos comentarlo si queremos y se ven toda la lista de otras personas */}
      <Image
        marginLeft={150}
        source={require("../assets/images/bottom-bubbles.png")}
        alt="bubbles"
      />
    </NativeBaseProvider>
  );
};

export default Raking;
