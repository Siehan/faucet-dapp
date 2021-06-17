import { Text, Box, Input, Button, Image } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
} from "@chakra-ui/react";
import approve from "../assets/images/approve.jpg";

const Approval = () => {
  return (
    <>
      <Text align="center" fontSize="3xl">
        Approval
      </Text>
      <Box maxW="md" borderWidth="2px" borderRadius="md" boxShadow="2xl" p="10" overflow="hidden">
        <Image src={approve} alt="image" height="" />
        <FormControl id="first-name" w="75%" m={2} isRequired>
          <FormLabel>Address</FormLabel>
          <Input placeholder="Authorize this address to spend your moula" mb={2} />
          <FormLabel>Amount</FormLabel>
          <NumberInput min={1} mb={4}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Button colorScheme="teal" variant="solid" w="50%" m={2} mb={3}>
            Approve
          </Button>
        </FormControl>
      </Box>
    </>
  );
};

export default Approval;
