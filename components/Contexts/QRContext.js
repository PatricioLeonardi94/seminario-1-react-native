import { createContext } from "react";

//credentials context
export const QRContext = createContext({
  binConnection: {},
  setBinConnection: () => {},
});
