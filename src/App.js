import "./App.css";
import React from "react";
import DappFaucet from "./DappFaucet";
import { useContract } from "web3-hooks";
import { robinetTokenAddress, robinetTokenAbi } from "./contracts/RobinetToken";
import { faucetAddress, faucetAbi } from "./contracts/Faucet";
import { TokenContextProvider } from "./context/TokenContext";
//import Nav from "./components/Nav";

export const FaucetContext = React.createContext(null);

function App() {
  const robinetToken = useContract(robinetTokenAddress, robinetTokenAbi);
  const faucet = useContract(faucetAddress, faucetAbi);

  return (
    <FaucetContext.Provider value={[robinetToken, faucet]}>
      <TokenContextProvider>
        {/*<Nav />*/}
        <DappFaucet />
      </TokenContextProvider>
    </FaucetContext.Provider>
  );
}

export default App;
