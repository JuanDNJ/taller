import type { FC } from "react";
import GlobalContext from "../GlobalContext";
import type { Children } from "../../types/inex";

const GlobalProvider: FC<Children> = ({ children }) => {
  return <GlobalContext.Provider value={null}>{children}</GlobalContext.Provider>;
}


export default GlobalProvider;