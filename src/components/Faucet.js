import { useContext, useState } from "react";
//import RobinetToken from "./RobinetToken";
import { useToast } from "@chakra-ui/react";
import { useToken } from "../context/TokenContext";
import { FaucetContext } from "../App";
import SlideFadeOnScroll from "./SlideFadeOnScroll";

import { Button, Flex, Box, Container, Stack, useColorModeValue } from "@chakra-ui/react"; // useColorModeValue,
import { rest, Heading, Spacer, CircularProgress } from "@chakra-ui/react";

function Faucet() {
  const { faucet } = useContext(FaucetContext);
  const { token, balance } = useToken();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const bg = useColorModeValue("gray.50", "teal.700");
  console.log(faucet);
  //const bg = useColorModeValue("gray.50", "yellow.500");

  const handleClaimToken = async () => {
    setLoading(true);
    try {
      const tx = await faucet.claim();
      await tx.wait();
      toast({
        title: "Confirmed transaction",
        description: `Success !! we sent you 100 ${token.symbol}`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (e) {
      if (e.error !== undefined) {
        toast({
          title: "Error",
          description: `${e.error.message}`,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Error",
          description: `${e.message}`,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Box as="section" bg={bg} id="faucet" pt="20" pb="20">
        <Container maxW="container.lg">
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
                FAUCET
              </Heading>
            </Box>

            <Stack
              direction={["column-reverse", null, "row"]}
              sx={{
                gap: "2rem",
              }}
              alignItems="center"
            >
              <Flex
                flexDirection="column"
                overflow="hidden"
                alignItems="center"
                m={4}
                p={10}
                boxShadow="xl"
                borderRadius="md"
                borderWidth="1px"
                flex="1"
                {...rest}
              >
                <Heading align="center" fontSize="5xl" mb={20}>
                  🔥 🔥 CLAIM {} RIGHT NOW ! 🔥 🔥
                </Heading>
                <Spacer />
                <Box w="300px" p={5} border="1px" borderColor="yellow.300" rounded="3xl" fontWeight="bold" mb={20}>
                  YOUR RBT BALANCE : {balance}
                </Box>

                <Button
                  onClick={handleClaimToken}
                  bgGradient="linear(to-r, red,orange,yellow)"
                  _hover={{
                    bgGradient: "linear(to-l, red,orange,yellow)",
                  }}
                  rounded="xl"
                  size="lg"
                  height="60px"
                  width="300px"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <CircularProgress fontSize="15px" isIndeterminate size="30px" color="green.300" />
                      <p>Claiming...</p>
                    </>
                  ) : (
                    "Claim 100 RBT"
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

export default Faucet;
