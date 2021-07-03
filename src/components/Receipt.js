import { Box, Container, Heading, Text } from "@chakra-ui/layout";
import { Button, Center, useDisclosure, useColorModeValue } from "@chakra-ui/react";
import receipt from "../assets/images/receipt.png";
import Form from "./Form";
import SlideFadeOnScroll from "./SlideFadeOnScroll";

const Receipt = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const bg = useColorModeValue("white", "teal.800");
  const bg2 = useColorModeValue("gray.20", "teal.500");

  return (
    <Box as="section" w={"100%"} bg={bg}>
      <Container borderRadius="md" maxW="container.lg" id="receipt" pt="20" pb="10">
        <SlideFadeOnScroll>
          <Box flex="1">
            <Heading
              mb="10"
              p={1}
              borderRadius="md"
              textShadow="1px 4px orange"
              align="center"
              bgGradient="linear(to-l, #48BB78, #81E6D9)"
              _hover={{
                bgGradient: "linear(to-r, #ED64A6, #805AD5)",
              }}
            >
              RECEIPT
            </Heading>
          </Box>

          <Box flex="1" bg={bg2} align="center" borderRadius="md" boxShadow="xl" p="10" pb="20" overflow="hidden">
            <Box flex="1" pb="10">
              <img src={receipt} alt="receipt" width="300" height="278" />
            </Box>
            <Text fontSize="xl" mb="10" textAlign="center">
              You can download an event of your free token request
            </Text>
            <Center>
              <Button colorScheme="teal" size="lg" onClick={onOpen}>
                Download a receipt
              </Button>
            </Center>
          </Box>
          <Form isOpen={isOpen} onClose={onClose} />
        </SlideFadeOnScroll>
      </Container>
    </Box>
  );
};

export default Receipt;
