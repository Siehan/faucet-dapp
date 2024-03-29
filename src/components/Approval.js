import { Box, Button, Container, Image, Input, Spacer, useColorModeValue } from "@chakra-ui/react";
import {
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
} from "@chakra-ui/react";
import approved from "../assets/images/approved.jpg";
import { useToken } from "../context/TokenContext";
import { useContext, useState, useEffect } from "react";
import { Web3Context } from "web3-hooks";
import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/react";
import { FaucetContext } from "../App";
import { ethers } from "ethers";
import AlertPop from "./AlertPop";
import { CircularProgress } from "@chakra-ui/react";

const Approval = () => {
  const [web3State] = useContext(Web3Context);
  const { token } = useToken();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const toast = useToast();
  const { robinetToken } = useContext(FaucetContext);
  const bg = useColorModeValue("gray.20", "green.700");

  const handleSubmitButton = async (data) => {
    const amount = ethers.utils.parseEther(data.amountApprove);
    try {
      setLoading(true);
      const tx = await robinetToken.approve(data.approveAddress, amount);
      const network = web3State.networkName.toLowerCase();
      const link = `https://${network}.etherscan.io/tx/${tx.hash}`;
      toast({
        title: "Confirmed transaction",
        render: () => (
          <Box color="white" p={3} bg="green.500" rounded={20}>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>Transaction sent successfully !</p>
            <br />
            You can view your transaction pending at hash :<br />
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
      toast({
        title: "Error",
        description: `${e.error.message}`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (robinetToken) {
      const cb = (owner, spender, value) => {
        if (spender === web3State.account.toLowerCase()) {
          toast({
            title: "New approval",
            description: `You are now allowed to spend ${ethers.utils.formatEther(value)} ${
              token.symbol
            } from ${owner}`,
            status: "info",
            position: "top-right",
            duration: 9000,
            isClosable: true,
          });
        } else if (owner.toLowerCase() === web3State.account.toLowerCase()) {
          toast({
            title: "Approved",
            description: `You have allowed ${spender} to spend ${ethers.utils.formatEther(value)} ${
              token.symbol
            } from your wallet`,
            status: "info",
            position: "top-right",
            duration: 9000,
            isClosable: true,
          });
        }
      };

      robinetToken.on("Approval", cb);
      return () => {
        robinetToken.off("Approval", cb);
      };
    }
  }, [robinetToken, toast, token, web3State.account]);
  return (
    <Container
      bg={bg}
      maxW="container.lg"
      as="section"
      boxShadow="xl"
      rounded="md"
      overflow="hidden"
      paddingX="5"
      paddingY="5"
    >
      <Image src={approved} alt="approved" borderRadius="md" />

      <form onSubmit={handleSubmit(handleSubmitButton)} id="first-name" m={2}>
        <FormLabel fontSize="lg">To address</FormLabel>
        <Input
          placeholder="Authorize this contract to spend your moula"
          mb={2}
          isRequired
          {...register("approveAddress", {
            minLength: { value: 42, message: "Please enter a valid address" },
            maxLength: { value: 42, message: "Please enter a valid address" },
          })}
        />
        {errors.approveAddress && <AlertPop title={errors.approveAddress.message} />}
        <FormLabel fontSize="lg">Amount</FormLabel>
        <NumberInput isRequired min={1} mb={4}>
          <NumberInputField {...register("amountApprove")} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Button
          type="submit"
          fontSize="lg"
          colorScheme="green"
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
              <p>Approving...</p>
            </>
          ) : (
            "Approve"
          )}
        </Button>
      </form>
    </Container>
  );
};

export default Approval;
