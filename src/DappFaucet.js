import Faucet from "./components/Faucet";
import Login from "./components/Login";
import { Flex } from "@chakra-ui/react";
import Footer from "./components/Footer";

function DappFaucet() {
  return (
    <>
      <Login />
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Faucet />
      </Flex>
      <Footer />
    </>
  );
}

export default DappFaucet;
