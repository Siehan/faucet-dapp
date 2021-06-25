//import Faucet from "./components/Faucet";
//import Login from "./components/Login";
import { TokenContextProvider } from "./context/TokenContext";
//import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";

function DappFaucet() {
  return (
    <>
      <TokenContextProvider>
        <LandingPage />
      </TokenContextProvider>
    </>
  );
}

export default DappFaucet;
