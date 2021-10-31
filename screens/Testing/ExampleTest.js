import * as React from "react";
import { Box, Image, Text, Center } from "native-base";

const Test = () => {
  return (
    <Box bg="white" alignSelf="center" w={"360px"} h={"640px"} pos="relative">
      <Text
        ml={"13.89%"}
        mr={"13.89%"}
        mt={"20.94%"}
        mb={"65.62%"}
        fontFamily="body"
        fontWeight={500}
        fontSize={24}
        lineHeight={24}
        display="flex"
        alignItems="center"
        textAlign="center"
        letterSpacing={0.15}
        color="rgba(0, 0, 0, 0.4)"
      >
        ¡Bienvenido a tu asistente de reciclado!
      </Text>
      <Center
        pos="absolute"
        height={90}
        width={180}
        ml={"25%"}
        mt={"-10%"}
        borderRadius={"8px"}
        bgColor="#84D31E"
      >
        <Text
          pos="absolute"
          color="white"
          font="body"
          fontWeight={500}
          fontSize={26}
          lineHeight={30}
          display="flex"
          alignItems="center"
          textAlign="center"
          letterSpacing={0.16}
        >
          EMPEZAR
        </Text>
      </Center>
      <Image
        w={"100%"}
        h={349}
        opacity={0.8}
        source={require("../assets/images/bottom-bubbles.png")}
      />
    </Box>
  );
};

export default Test;
