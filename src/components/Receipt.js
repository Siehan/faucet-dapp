import { Container, Text, Box } from "@chakra-ui/layout";
import { Button, Center, useDisclosure } from "@chakra-ui/react";
import Form from "./Form";
import SlideFadeOnScroll from "./SlideFadeOnScroll";

const Receipt = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box w="100%" shadow="xs" borderRadius="lg">
      <Container as="section" maxW="container.lg" id="receipt" py="24">
        <SlideFadeOnScroll>
          <Text fontSize="xl" mb="6" textAlign="center">
            You can download an event of your free token request
          </Text>
          <Center>
            <Button colorScheme="teal" size="lg" onClick={onOpen}>
              Download a receipt
            </Button>
          </Center>
          <Form isOpen={isOpen} onClose={onClose} />
        </SlideFadeOnScroll>
      </Container>
    </Box>
  );
};

export default Receipt;
