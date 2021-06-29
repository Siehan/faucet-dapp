import { useContext, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useToken } from "../context/TokenContext";
import { FaucetContext } from "../App";
import SlideFadeOnScroll from "./SlideFadeOnScroll";

import { Button, Box, Container, useColorModeValue } from "@chakra-ui/react";
import { rest, Heading, CircularProgress } from "@chakra-ui/react";

function Faucet() {
  const { faucet } = useContext(FaucetContext);
  const { token, balance } = useToken();
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const bg = useColorModeValue("gray.50", "teal.700");
  console.log(faucet);

  const handleClaimToken = async () => {
    setLoading(true);
    try {
      const tx = await faucet.claim();
      await tx.wait();
      toast({
        title: "Confirmed transaction",
        description: `Success !! We sent you 100 ${token.symbol}`,
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
      <Box bg={bg}>
        <Container as="section" borderRadius="md" id="faucet" maxW="container.lg" pt="20" pb="10">
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

            <Box flex="1" align="center" borderRadius="md" boxShadow="xl" p="10" overflow="hidden" {...rest}>
              <Heading fontSize="5xl" mb={20}>
                🔥 🔥 CLAIM RIGHT NOW ! 🔥 🔥
              </Heading>

              <Button
                onClick={handleClaimToken}
                bgGradient="linear(to-r, red,orange,yellow)"
                _hover={{
                  bgGradient: "linear(to-l, red,orange,yellow)",
                }}
                borderRadius="3xl"
                mb={20}
                size="2xl"
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

              <Box w="300px" p={5} boxShadow="xl" borderRadius="md" fontWeight="bold" mb={10}>
                YOUR RBT BALANCE : {balance}
              </Box>
            </Box>
          </SlideFadeOnScroll>
        </Container>
      </Box>
    </>
  );
}

export default Faucet;
