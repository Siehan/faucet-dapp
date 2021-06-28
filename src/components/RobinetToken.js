import Analytics from "./Analytics";
import Transfer from "./Transfer";
import Approval from "./Approval";
import TransferFrom from "./TransferFrom";
import SlideFadeOnScroll from "./SlideFadeOnScroll";
import { Box, Container, Stack, Heading } from "@chakra-ui/react";

const RobinetToken = () => {
  return (
    <>
      <Container as="section" maxW="container.lg" id="functionality-RBT" pt="20" pb="10">
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
    </>
  );
};

export default RobinetToken;
