import * as React from "react";
import { Center, Image } from "native-base";

const BottomImageWithExitButton = () => {
  return (
    <Center>
      <Image
        w={"366.11px"}
        h={"349px"}
        source={require("../assets/images/bottom-bubbles.png")}
        alt=""
      />
      <Image
        position="absolute"
        zIndex={1}
        w={"40px"}
        h={"40px"}
        source={require("../assets/icons/exit.png")}
        alt=""
      />
    </Center>
  );
};

export default BottomImageWithExitButton;
