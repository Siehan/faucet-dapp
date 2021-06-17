import { Text, Box, Input, Image } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
} from "@chakra-ui/react";
import { useToken } from "../context/TokenContext";
import { useContext } from "react";
import { FaucetContext } from "../App";
import transfer from "../assets/images/transfer.jpg";

const Transfer = () => {
  const { token, ownBalance, balance, dispatch, error } = useToken();
  const [robinetToken, faucet] = useContext(FaucetContext);
  return (
    <>
      <Text align="center" fontSize="3xl">
        Transfer
      </Text>
      <Box maxW="md" borderWidth="2px" borderRadius="md" boxShadow="2xl" p="10" overflow="hidden">
        <Image src={transfer} alt="image" />
        <FormControl id="first-name" w="75%" m={2} isRequired>
          <FormLabel>To address</FormLabel>
          <Input placeholder="Receiver" mb={2} />
          <FormLabel>Amount</FormLabel>
          <NumberInput min={1} mb={4}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Input type="submit" colorScheme="teal" variant="solid" w="50%" m={2} mb={3} />
        </FormControl>
      </Box>
    </>
  );
};

export default Transfer;
