import eau_du_robinet1_pixel_perfect from "../assets/images/eau_du_robinet1_pixel_perfect.svg";
import checkBalance from "../assets/images/checkBalance.png";
import checkAllowance from "../assets/images/checkAllowance.png";
import transferIcon from "../assets/images/transferIcon.png";
import approved from "../assets/images/approved.png";
import exchangeIcon from "../assets/images/exchangeIcon.png";
import Feature from "./Feature";
import { Container, SimpleGrid } from "@chakra-ui/react";
import SlideFadeOnScroll from "./SlideFadeOnScroll";

const Features = () => {
  const features = [
    {
      icon: eau_du_robinet1_pixel_perfect,
      title: "Claim a free RBT Token",
      text: "Robinet Token is a token that we are pleased to offer you for your tests. You can claim it every 3 days.",
    },
    {
      icon: checkBalance,
      title: "Check Balance",
      text: "Allow you to check the $RBT tokens balance of anyone, just enter a valid address.",
    },
    {
      icon: checkAllowance,
      title: "Check Allowance",
      text: "Allow you to check how much the sender is allowed to transfered from another address.",
    },
    {
      icon: transferIcon,
      title: "Transfer",
      text: "Make you able to transfer yours $RBT tokens to someone else.",
    },
    {
      icon: approved,
      title: "Approval",
      text: "You can allow someone else to spend a certain amount of yours $RBT tokens.",
    },
    {
      icon: exchangeIcon,
      title: "Transfer From",
      text: "Allows you to transfer tokens from an address to another (depending how much the owner has approved you to spend).",
    },
  ];
  return (
    <Container as="section" maxW="container.lg" py="10">
      <SlideFadeOnScroll>
        <SimpleGrid columns={[1, null, 3]} gap="8">
          {features.map((el, index) => {
            return <Feature key={index} {...el}></Feature>;
          })}
        </SimpleGrid>
      </SlideFadeOnScroll>
    </Container>
  );
};

export default Features;
