import { Web3Context } from "web3-hooks";
import { useContext } from "react";
import { Button, Container, Flex, Box, Stack } from "@chakra-ui/react";
import { Text, Heading, useDisclosure } from "@chakra-ui/react";
import { robinetTokenAddress } from "../contracts/RobinetToken";
import SlideFadeOnScroll from "./SlideFadeOnScroll";
import robinet_wasserhahn_clean from "../assets/robinet_wasserhahn_clean.jpg";

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
  //const bg = useColorModeValue("whiteAlpha.800", "blackAlpha.200");
  //const bg = useColorModeValue("gray.80", "gray.300");

  const { isOpen: isOpenLogoutModal, onOpen: onOpenLogoutModal, onClose: onCloseLogoutModal } = useDisclosure();
  //const [isMobile] = useMediaQuery("(max-width: 720px)");

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

      <Box id="login" w="100%" borderRadius="lg" shadow="xs">
        <Container as="section" maxW="container.lg" pt="28" pb="10" {...rest}>
          <SlideFadeOnScroll>
            <Box flex="1">
              <Heading
                mb="6"
                borderRadius="lg"
                align="center"
                bgGradient="linear(to-r, red, pink, red)"
                _hover={{
                  bgGradient: "linear(to-l, #3CAADD, #4FAA1B)",
                }}
              >
                LOGIN
              </Heading>
            </Box>

            <Stack
              direction={["column-reverse", null, "row"]}
              sx={{
                gap: "2rem",
              }}
              alignItems="center"
            >
              <Heading size="md" mb={3} align="center" pt={4}>
                <Box flex="1">
                  <img src={robinet_wasserhahn_clean} width="500" height="378" alt="robinet" />
                </Box>
                The RobinetToken address :{" "}
                <a
                  href="https://rinkeby.etherscan.io/address/0x3ba7084e8e7848fD6483d5b48506Ff2190E11979"
                  style={{ color: "red" }}
                >
                  {robinetTokenAddress}
                </a>
              </Heading>

              <Flex justifyContent="space-between" width="100%" mb={5} id="login">
                <Button
                  size="lg"
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
              </Flex>
            </Stack>
          </SlideFadeOnScroll>
        </Container>
      </Box>
    </>
  );
}

export default Login;
