import { Container, Text } from "@chakra-ui/layout";
import { Button, Center, useDisclosure } from "@chakra-ui/react";
import Form from "./Form";
import SlideFadeOnScroll from "./SlideFadeOnScroll";

const Receipt = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container as="section" maxW="container.lg" id="receipt" pt="20" py="24">
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
  );
};

export default Receipt;
