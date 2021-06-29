import Analytics from "./Analytics";
import Transfer from "./Transfer";
import Approval from "./Approval";
import TransferFrom from "./TransferFrom";
import SlideFadeOnScroll from "./SlideFadeOnScroll";
import { Box, Container, Heading } from "@chakra-ui/react";

const RobinetToken = () => {
  return (
    <>
      <Container as="section" borderRadius="md" maxW="container.lg" id="functionality-RBT" pt="20" pb="10">
        <SlideFadeOnScroll>
          <Box flex="1">
            <Heading
              mb="20"
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

          <Box flex="1">
            <Heading
              marginInlineStart={"25%"}
              marginInlineEnd={"25%"}
              borderWidth="1px"
              textAlign="center"
              textColor="teal.500"
              fontWeight="normal"
              boxShadow="xl"
              borderRadius="2xl"
            >
              Analytics
            </Heading>
            <Box pb={20} pt={6}>
              <Analytics />
            </Box>

            <Heading
              marginInlineStart={"25%"}
              marginInlineEnd={"25%"}
              borderWidth="1px"
              textAlign="center"
              textColor="teal.500"
              fontWeight="normal"
              boxShadow="xl"
              borderRadius="2xl"
            >
              Transfer
            </Heading>
            <Box align="center" pb={20} pt={6}>
              <Transfer />
            </Box>

            <Heading
              marginInlineStart={"25%"}
              marginInlineEnd={"25%"}
              borderWidth="1px"
              textAlign="center"
              textColor="teal.500"
              fontWeight="normal"
              boxShadow="xl"
              borderRadius="2xl"
            >
              Approval
            </Heading>
            <Box align="center" pb={20} pt={6}>
              <Approval />
            </Box>

            <Heading
              marginInlineStart={"25%"}
              marginInlineEnd={"25%"}
              borderWidth="1px"
              textAlign="center"
              textColor="teal.500"
              fontWeight="normal"
              boxShadow="xl"
              borderRadius="2xl"
            >
              TransferFrom
            </Heading>
            <Box align="center" pt={6}>
              <TransferFrom />
            </Box>
          </Box>
        </SlideFadeOnScroll>
      </Container>
    </>
  );
};

export default RobinetToken;
