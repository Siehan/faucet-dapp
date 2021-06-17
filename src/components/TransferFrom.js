import { Text, Box, Input, Button, Image } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import transferFrom from "../assets/images/transferFrom.jpg";

const TransfertFrom = () => {
  return (
    <>
      <Text align="center" fontSize="3xl">
        TransferFrom
      </Text>
      <Box maxW="md" borderWidth="2px" borderRadius="md" boxShadow="2xl" p="10" overflow="hidden">
        <Image src={transferFrom} alt="image" />
        <FormControl variant="outline" w="75%" m={2} id="first-name" isRequired>
          <FormLabel>From</FormLabel>
          <Input variant="outline" placeholder="Sender" />
          <FormLabel mt={2}>Amount</FormLabel>
          <Input variant="outline" placeholder="Amount of tokens" />
          <FormLabel>To</FormLabel>
          <Input variant="outline" placeholder="Receiver" />
          <Button colorScheme="teal" variant="solid" w="50%" m={2} mb={3}>
            Send
          </Button>
        </FormControl>
      </Box>
    </>
  );
};

export default TransfertFrom;
