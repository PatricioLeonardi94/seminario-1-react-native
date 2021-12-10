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
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { Box, Text, Center } from "native-base";

const Raking = ({ navigation }) => {
  // Get Ranking
  const [ranking, setRanking] = useState(null);
  const [montlyRanking, setMontlyRanking] = useState(null);

  useEffect(() => {
    if (ranking === null) {
      getRanking();
    }
  });

  function getRanking(value) {
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
          <Box>
            <Text>{JSON.stringify(ranking[0].name)}</Text>
            <Text>{JSON.stringify(ranking[0].points)}</Text>
            <Text>{JSON.stringify(ranking[1].name)}</Text>
            <Text>{JSON.stringify(ranking[1].points)}</Text>
          </Box>
        );
      } else if (index == 1) {
        return (
          <Box>
            <Text>{JSON.stringify(montlyRanking[0].name)}</Text>
            <Text>{JSON.stringify(montlyRanking[0].month_points)}</Text>
            <Text>{JSON.stringify(montlyRanking[1].name)}</Text>
            <Text>{JSON.stringify(montlyRanking[1].month_points)}</Text>
          </Box>
        );
      } else {
        return <Box></Box>;
      }
    } else {
      return <Box></Box>;
    }
  }

  var FirstRoute = () => <Center flex={1}></Center>;

  var SecondRoute = () => <Center flex={1}></Center>;

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
              borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              p="3"
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
    <Box>
      <TopBox navigation={navigation} />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={{ marginTop: StatusBar.currentHeight }}
      />
      <Box>{renderInfo()}</Box>
    </Box>
  );
};

export default Raking;
