import { Web3Context } from "web3-hooks";
import { useContext } from "react";
import { Button, useColorMode, useColorModeValue, Stack, Flex } from "@chakra-ui/react";
import { Text, Heading, useDisclosure } from "@chakra-ui/react";
import { robinetTokenAddress } from "../contracts/RobinetToken";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

function Login({ title, desc, ...rest }) {
  const [web3State, login] = useContext(Web3Context);
  const { toggleColorMode } = useColorMode();
  const { formBackground } = useColorModeValue("gray.100", "gray.300");
  const { isOpen: isOpenLogoutModal, onOpen: onOpenLogoutModal, onClose: onCloseLogoutModal } = useDisclosure();

  const handleClickLogin = () => {
    if (!web3State.isLogged) {
      login();
    } else {
    }
  };

  return (
    <>
      <Modal isOpen={isOpenLogoutModal} onClose={onCloseLogoutModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log out from a Dapp</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>You can not log out from a Dapp.</Text>
            <Text>If you want to log out of this website, do it directly from MetaMask.</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onCloseLogoutModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Flex
        direction="column"
        width="100%"
        h="110px"
        alignItems="center"
        mt={4}
        bgGradient="linear(to-l, #3CAADD, #4FAA1B)"
        borderRadius="md"
        {...rest}
      >
        <Flex bgGradient="linear(to-l, #3CAADD, #4FAA1B)" justifyContent="space-between" width="100%" mb={5}>
          <Button
            w="7%"
            m={2}
            mb={3}
            mt={3}
            colorScheme="yellow"
            onClick={() => (!web3State.isLogged ? handleClickLogin() : onOpenLogoutModal())}
          >
            {!web3State.isLogged ? (
              "Log in"
            ) : web3State.chainId === 4 ? (
              web3State.account.split("").splice(0, 6).join("") +
              "..." +
              web3State.account.split("").splice(-4).join("")
            ) : (
              <p style={{ color: "red" }}>WRONG NETWORK</p>
            )}
          </Button>
          <Stack spacing={2}>
            <Heading as="h2" mt={3} size="xl" bgGradient="linear(to-l, #97266D,#DD6B20)" bgClip="text">
              Welcome to Faucet
            </Heading>
          </Stack>
          <div background={formBackground} p={12} rounded={10}>
            <Button colorScheme="blue" onClick={toggleColorMode} mt={3} m={2} mb={3}>
              Dark Mode
            </Button>
          </div>
        </Flex>
        <Stack spacing={2} alignItems="center">
          <Heading as="h5" size="sm" mb={3}>
            The RobinetToken address :{" "}
            <a
              href="https://rinkeby.etherscan.io/address/0x3ba7084e8e7848fD6483d5b48506Ff2190E11979"
              style={{ color: "red" }}
            >
              {robinetTokenAddress}
            </a>
          </Heading>
        </Stack>
      </Flex>
    </>
  );
}

export default Login;
