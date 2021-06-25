import { Text, Divider, Box, Input, Button, Spacer } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ethers } from "ethers";
import { useToken } from "../context/TokenContext";
import { FaucetContext } from "../App";
import { useContext } from "react";
import Allowance from "./Allowance";
import AlertPop from "./AlertPop";

const Analytics = () => {
  const { token, ownBalance, balance, dispatch } = useToken();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { robinetToken } = useContext(FaucetContext);

  const handleCheckBalance = async (data) => {
    try {
      const newBalance = await robinetToken.balanceOf(data.account);
      dispatch({ type: "SET_BALANCE", payload: ethers.utils.formatEther(newBalance) });
    } catch (e) {
      dispatch({ type: "ERROR", payload: e.message });
    }
  };

  return (
    <>
      <Box bg="tomato" borderWidth="1px" borderRadius="lg" boxShadow="xl" p={10} overflow="hidden">
        <Text fontSize="xl">NAME : {token.name}</Text>
        <Text fontSize="xl">SYMBOL : {token.symbol}</Text>
        <Text fontSize="xl">DECIMALS : {token.decimals}</Text>
        <Text fontSize="xl" fontWeight="bold" pb={5}>
          TOTAL SUPPLY : {token.totalSupply}
        </Text>

        <Divider orientation="horizontal" />

        <Box overflow="hidden" mt={5}>
          <form onSubmit={handleSubmit(handleCheckBalance)}>
            <Text align="center" fontWeight="bold" fontSize="xl">
              Check Balance
            </Text>
            <Input
              variant="outline"
              w="80%"
              m={1}
              placeholder="Address"
              {...register("account", {
                minLength: { value: 42, message: "Please enter a valid address" },
                maxLength: { value: 42, message: "Please enter a valid address" },
                duration: 1000,
              })}
            />
            <Button colorScheme="teal" variant="solid" w="15%" m={2} mb={3} type="submit">
              👀
            </Button>
            {errors.account && <AlertPop title={errors.account.message} />}
            <Text align="center" fontSize={20} mb={3} fontWeight="bold">
              Amount: {balance}
            </Text>
          </form>
        </Box>

        <Divider orientation="horizontal" mb={5} />
        <Allowance />
        <Spacer />
        <Text fontSize="xl" fontWeight="bold">
          YOUR BALANCE : {ownBalance} {token.symbol}
        </Text>
      </Box>
    </>
  );
};

export default Analytics;
