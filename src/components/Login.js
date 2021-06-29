import { Web3Context } from "web3-hooks";
import { useContext } from "react";
import { Button, Container, Box, Stack } from "@chakra-ui/react";
import { Text, Heading, useDisclosure } from "@chakra-ui/react";
import { robinetTokenAddress } from "../contracts/RobinetToken";
import SlideFadeOnScroll from "./SlideFadeOnScroll";
import eau_du_robinet2_pixel_perfect from "../assets/images/eau_du_robinet2_pixel_perfect.svg";

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

      <Container id="login" borderRadius="md" as="section" maxW="container.lg" pt="20" pb="10" {...rest}>
        <SlideFadeOnScroll>
          <Box flex="1">
            <Heading
              mb="6"
              borderRadius="md"
              textShadow="1px 4px orange"
              align="center"
              bgGradient="linear(to-l, #48BB78, #81E6D9)"
              _hover={{
                bgGradient: "linear(to-r, #ED64A6, #805AD5)",
              }}
            >
              LOGIN
            </Heading>
          </Box>

          <Stack
            alignItems="center"
            margin="10"
            direction={["column-reverse", null, "row"]}
            sx={{
              gap: "2rem",
            }}
          >
            <Box>
              <Button
                id="login"
                size="lg"
                bg="orange"
                onClick={() => (!web3State.isLogged ? handleClickLogin() : onOpenLogoutModal())}
              >
                {!web3State.isLogged ? (
                  "Log in to your account"
                ) : web3State.chainId === 4 ? (
                  web3State.account.split("").splice(0, 6).join("") +
                  "..." +
                  web3State.account.split("").splice(-4).join("")
                ) : (
                  <p style={{ color: "red" }}>WRONG NETWORK</p>
                )}
              </Button>
            </Box>

            <Box>
              <img src={eau_du_robinet2_pixel_perfect} width="300" height="150" alt="Pixel perfect2" />
            </Box>
          </Stack>

          <Heading size="md" align="center" pt={2}>
            The RobinetToken address :{" "}
            <a
              href="https://rinkeby.etherscan.io/address/0x3ba7084e8e7848fD6483d5b48506Ff2190E11979"
              style={{ color: "#4299E1" }}
            >
              {robinetTokenAddress}
            </a>
          </Heading>
        </SlideFadeOnScroll>
      </Container>
    </>
  );
}

export default Login;

/*
<Box flex="1" align="center" borderRadius="md">
 <img src={robinet_wasserhahn_clean} width="500" height="378" alt="robinet blanc" />
</Box>
*/

/*

<div>
Icônes conçues par{" "}
<a href="https://www.flaticon.com/fr/auteurs/pixel-perfect" title="Pixel perfect">
Pixel perfect
</a>{" "}
from{" "}
<a href="https://www.flaticon.com/fr/" title="Flaticon">
 www.flaticon.com
</a>
</div>
*/

/*
<div>Icônes conçues par <a href="https://www.flaticon.com/fr/auteurs/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/fr/" title="Flaticon">www.flaticon.com</a></div>
 */
