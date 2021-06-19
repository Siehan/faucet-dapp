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
      <Text align="center" fontSize="3xl">
        Analytics
      </Text>
      <Text fontWeight="bold" fontSize="xl">
        Name
      </Text>
      <Text>{token.name}</Text>
      <Text fontWeight="bold" fontSize="xl">
        Symbol
      </Text>
      <Text>{token.symbol}</Text>
      <Text fontWeight="bold" fontSize="xl">
        Decimals
      </Text>
      <Text>{token.decimals}</Text>
      <Text fontWeight="bold" fontSize="xl">
        Total supply
      </Text>
      <Text>{token.totalSupply}</Text>

      <Divider orientation="horizontal" />

      <Box overflow="hidden" mt={5}>
        <form onSubmit={handleSubmit(handleCheckBalance)}>
          <Text align="center" fontWeight="bold" fontSize="xl">
            check balance
          </Text>
          <Input
            variant="outline"
            w="70%"
            m={2}
            placeholder="Address"
            {...register("account", {
              minLength: { value: 42, message: "Please enter a valid address" },
              maxLength: { value: 42, message: "Please enter a valid address" },
              duration: 1000,
            })}
          />
          <Button colorScheme="teal" variant="solid" w="10%" m={2} mb={3} type="submit">
            👀
          </Button>
          {errors.account && <AlertPop title={errors.account.message} />}
          <Text align="center" fontSize={20} fontWeight="bold">
            Amount: {balance}
          </Text>
        </form>
      </Box>

      <Divider orientation="horizontal" mb={4} />
      <Allowance />
      <Spacer />
      <Text fontSize="xl">
        Your balance : {ownBalance} {token.symbol}
      </Text>
    </>
  );
};

export default Analytics;
