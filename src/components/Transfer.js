import { Box, Button, Container, Image, Input, Spacer, useColorModeValue } from "@chakra-ui/react";
import {
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
} from "@chakra-ui/react";
import { useToken } from "../context/TokenContext";
import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/react";
import { FaucetContext } from "../App";
import { ethers } from "ethers";
import transfer from "../assets/images/transfer.jpg";
import AlertPop from "./AlertPop";
import { CircularProgress } from "@chakra-ui/react";
import { Web3Context } from "web3-hooks";

const Transfer = () => {
  const [web3State] = useContext(Web3Context);
  const { token } = useToken();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const { robinetToken } = useContext(FaucetContext);
  const bg = useColorModeValue("gray.20", "blue.700");

  useEffect(() => {
    if (robinetToken) {
      const cb = (from, to, amount) => {
        console.log(robinetToken.allowance(from, web3State.account));

        if (from.toLowerCase() === web3State.account.toLowerCase()) {
          toast({
            title: "Transfer",
            description: `Your transaction of ${ethers.utils.formatEther(amount)} ${
              token.symbol
            } has been well executed to ${to}`,
            status: "info",
            position: "top-right",
            duration: 9000,
            isClosable: true,
          });
        }
      };

      robinetToken.on("Transfer", cb);
      return () => {
        robinetToken.off("Transfer", cb);
      };
    }
  }, [robinetToken, toast, token, web3State.account]);

  useEffect(() => {
    if (robinetToken) {
      const cb = (from, to, amount) => {
        if (from.toLowerCase() !== web3State.account.toLowerCase() && amount > ethers.utils.parseEther("1000")) {
          toast({
            title: "Whale alert",
            description: `A whale have moved ${ethers.utils.formatEther(amount)} from ${from} to ${to}`,
            status: "warning",
            position: "top-left",
            duration: 9000,
            isClosable: true,
          });
        }
      };
      robinetToken.on("Transfer", cb);
      return () => {
        robinetToken.off("Transfer", cb);
      };
    }
  }, [robinetToken, toast, web3State.account]);

  const handleSubmitButton = async (data) => {
    const amount = ethers.utils.parseEther(data.amount);
    try {
      setLoading(true);
      const tx = await robinetToken.transfer(data.transfer, amount);
      const network = web3State.networkName.toLowerCase();
      const link = `https://${network}.etherscan.io/tx/${tx.hash}`;
      toast({
        title: "Confirmed transaction",
        render: () => (
          <Box color="white" p={3} bg="green.500" rounded={20}>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>Transaction sent successfully !</p>
            <br />
            You can view your pending transaction at hash :<br />
            <a target="blank" href={link}>
              {tx.hash}
            </a>
          </Box>
        ),
        duration: 9000,
        isClosable: true,
      });
      await tx.wait();
    } catch (e) {
      if (e.error.code === 3) {
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
          description: `${e.error.message}`,
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
    <Container
      bg={bg}
      maxW="container.lg"
      as="section"
      boxShadow="xl"
      borderRadius="md"
      id="faucet"
      overflow="hidden"
      paddingX="5"
      paddingY="5"
    >
      <Image src={transfer} alt="transfer" borderRadius="md" />

      <form onSubmit={handleSubmit(handleSubmitButton)} id="first-name" m={2}>
        <FormLabel fontSize="lg">To address</FormLabel>
        <Input
          placeholder="Receiver"
          mb={2}
          isRequired
          {...register("transfer", {
            minLength: { value: 42, message: "Please enter a valid address" },
            maxLength: { value: 42, message: "Please enter a valid address" },
          })}
        />
        {errors.transfer && <AlertPop title={errors.transfer.message} />}
        <FormLabel fontSize="lg">Amount</FormLabel>
        <NumberInput isRequired min={1} mb={4}>
          <NumberInputField {...register("amount")} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Button
          type="submit"
          fontSize="lg"
          colorScheme="blue"
          variant="solid"
          w="20%"
          p={7}
          m={2}
          mb={3}
          disabled={loading}
        >
          {loading ? (
            <>
              <CircularProgress fontSize="15px" isIndeterminate size="30px" color="green.300" />
              <Spacer />
              <p>Sending...</p>
            </>
          ) : (
            "Send"
          )}
        </Button>
      </form>
    </Container>
  );
};

export default Transfer;

// <Box borderRadius="md" boxShadow="xl" p="10" overflow="hidden">
