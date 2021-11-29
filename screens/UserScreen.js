import React from "react";
import { Box, Center, Image, Text, VStack } from "native-base";

//async-storage
import AsyncStorage from "@react-native-async-storage/async-storage";

//credentialContext
import { CredentialsContext } from "./../components/CredentialsContext";

const UserScreen = () => {
  //context
  const { storedCredentials, setStoredCredentials } =
    useContext(CredentialsContext);

  const clearLogin = () => {
    AsyncStorage.removeItem(constants.ASYNC_STORAGE_CREDENTIALS)
      .then(() => {
        setStoredCredentials("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Box>
      <TopBox />
      <VStack alignItems="center">
        <Box>
          <Center>
            <Button size="lg" colorScheme="red" onPress={clearLogin}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <AntDesign name="google" size={24} color="white" />
                <Text color="white">Desconectar Cuenta de Google</Text>
              </View>
            </Button>
          </Center>
        </Box>
        <Image
          w={366.11}
          h={349}
          opacity={0.8}
          source={require("../assets/images/bottom-bubbles.png")}
        />
      </VStack>
    </Box>
  );
};

export default UserScreen;
