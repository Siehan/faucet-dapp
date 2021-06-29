import { useCountUp } from "react-countup";
import PricingSwitch from "./PricingSwitch";
import { CheckCircleIcon } from "@chakra-ui/icons";
import SlideFadeOnScroll from "./SlideFadeOnScroll";

import {
  Box,
  Container,
  Heading,
  Text,
  Badge,
  Center,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

const Pricing = () => {
  const bg = useColorModeValue("gray.50", "teal.500");
  const bg2 = useColorModeValue("white", "teal.900");

  const config = {
    yearly: 29,
    monthly: 49,
  };
  const list = [
    "Rich, responsive landing pages",
    "100+ styled components",
    "Flexible, simple license",
    "Speedy build tooling",
    "6 months free support included",
  ];
  const { countUp, update } = useCountUp({
    start: config.yearly,
    end: config.monthly,
    delay: 0,
    startOnMount: false,
    duration: 0.6,
  });

  const handleSwitchChange = (e) => {
    if (e.target.checked) {
      update(config.monthly);
    } else {
      update(config.yearly);
    }
  };

  return (
    <Box as="section" bg={bg} id="pricing" py="20" borderRadius="md">
      <Container maxW="container.md">
        <SlideFadeOnScroll>
          <Heading textAlign="center" mb="6" fontFamily="special">
            Fair, simple pricing for all
          </Heading>

          <Text fontSize="lg" textAlign="center" maxW="60ch" mb="6">
            All types of businesses need access to development resources, so we give you the option to decide how much
            you need to use.
          </Text>

          <PricingSwitch onChange={handleSwitchChange} />

          <Box d={["block", null, "flex"]} alignItems="center">
            <Box shadow="lg" flex="1" zIndex="1" mb={[6, 6, 0]} bg={bg2}>
              <Center pt="6">
                <Badge>Standard</Badge>{" "}
              </Center>
              <Center>
                <Text as="b" fontSize="6xl">
                  $ {countUp}
                </Text>{" "}
                /mo
              </Center>
              <List spacing={3} p="6">
                {list.map((el, index) => {
                  return (
                    <ListItem key={index}>
                      <ListIcon as={CheckCircleIcon} color="teal.300" />
                      {el}
                    </ListItem>
                  );
                })}
              </List>
              <Button isFullWidth={true} colorScheme="teal" borderRadius="none" size="lg">
                Get it now
              </Button>
            </Box>

            <Box shadow="lg" flex="1" bg={bg2}>
              <Center pt="6">
                <Badge>Entreprise</Badge>
              </Center>
              <Text textAlign="center" p="6" fontSize="lg">
                We offer variable pricing with discounts for larger organizations. Get in touch with us and we’ll figure
                out something that works for everyone.
              </Text>
              <Button isFullWidth={true} colorScheme="teal" borderRadius="none" size="lg">
                Contact us
              </Button>
            </Box>
          </Box>
        </SlideFadeOnScroll>
      </Container>
    </Box>
  );
};

export default Pricing;
/*

import { useState } from "react"
import PricingSwitch from "./PricingSwitch"

const Pricing = () => {
  const config = {
    yearly: 29,
    monthly: 49,
  }
  const list = [
    "Rich, responsive landing pages",
    "100+ styled components",
    "Flexible, simple license",
    "Speedy build tooling",
    "6 months free support included",
  ]
  const [price, setPrice] = useState(config.yearly)
  const handleSwitchChange = (e) => {
    if (e.target.checked) {
      setPrice(config.monthly)
    } else {
      setPrice(config.yearly)
    }
  }

  return (
    <section id="pricing">
      <h2>Fair, simple pricing for all</h2>

      <p>
        All types of businesses need access to development resources, so we give
        you the option to decide how much you need to use.
      </p>

      <PricingSwitch onChange={handleSwitchChange} />

      <div>
        <div>
          <span>Standard</span>
          <b>{price}</b> /mo
          <ul>
            {list.map((el, index) => {
              return <li key={index}>{el}</li>
            })}
          </ul>
          <button>Get it now</button>
        </div>
        <div>
          <span>Entreprise</span>
          <p>
            We offer variable pricing with discounts for larger organizations.
            Get in touch with us and we’ll figure out something that works for
            everyone.
          </p>
          <button>Contact us</button>
        </div>
      </div>
    </section>
  )
}

export default Pricing
*/
