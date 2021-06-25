import Analytics from "./Analytics";
import Transfer from "./Transfer";
import Approval from "./Approval";
import TransferFrom from "./TransferFrom";
import SlideFadeOnScroll from "./SlideFadeOnScroll";
import { Box, Container, Stack, Heading } from "@chakra-ui/react";

const RobinetToken = () => {
  return (
    <>
      <Box w="100%" shadow="xs" borderRadius="lg">
        <Container as="section" maxW="container.lg" id="functionality-RBT" pt="28" pb="10">
          <SlideFadeOnScroll>
            <Box flex="1">
              <Heading
                mb="6"
                borderRadius="lg"
                align="center"
                bgGradient="linear(to-r, yellow,orange,red)"
                _hover={{
                  bgGradient: "linear(to-l, #3CAADD, #4FAA1B)",
                }}
              >
                FUNCTIONALITY RBT
              </Heading>
            </Box>

            <Stack
              direction={["column-reverse", null, "row"]}
              sx={{
                gap: "2rem",
              }}
              alignItems="center"
            >
              <Box flex="1">
                <Heading py="25" textAlign="center" textColor="tomato" fontWeight="normal">
                  Analytics
                </Heading>
                <Box>
                  <Analytics />
                </Box>

                <Heading py="25" textAlign="center" textColor="teal.500" fontWeight="normal">
                  Transfer
                </Heading>
                <Box align="center">
                  <Transfer />
                </Box>

                <Heading py="25" textAlign="center" textColor="teal.500" fontWeight="normal">
                  Approval
                </Heading>
                <Box align="center" textColor="teal.500">
                  <Approval />
                </Box>

                <Heading py="25" textAlign="center" textColor="teal.500" fontWeight="normal">
                  TransferFrom
                </Heading>
                <Box align="center">
                  <TransferFrom />
                </Box>
              </Box>
            </Stack>
          </SlideFadeOnScroll>
        </Container>
      </Box>
    </>
  );
};

export default RobinetToken;
