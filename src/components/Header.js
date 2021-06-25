import { Container, Heading, Text, Button, Stack, Box } from "@chakra-ui/react";
import woman_desk from "../assets/woman_desk.svg";
import SlideFadeOnScroll from "./SlideFadeOnScroll";

const Header = () => {
  return (
    <Box w="100%" shadow="xs" borderRadius="lg">
      <Container as="header" maxW="container.lg" pt="28" pb="10">
        <SlideFadeOnScroll>
          <Stack
            direction={["column-reverse", null, "row"]}
            sx={{
              gap: "2rem",
            }}
            alignItems="center"
          >
            <Box flex="1">
              <Heading mb="6">
                Welcome to{" "}
                <Text as="span" color="teal">
                  Faucet
                </Text>{" "}
              </Heading>

              <Text fontSize="2xl" mb="6" py="8">
                Get a free Robinet Token !!!
              </Text>

              <Button as="a" href="#login" size="lg" colorScheme="teal">
                Login
              </Button>
            </Box>

            <Box flex="1">
              <img src={woman_desk} alt="woman desk" width="500" height="378" />
            </Box>
          </Stack>
        </SlideFadeOnScroll>
      </Container>
    </Box>
  );
};

export default Header;

/* bgGradient="linear(to-l, #97266D,#DD6B20)" bgClip="text"
<Heading as="h2" mt={3} size="xl" bgGradient="linear(to-l, #97266D,#DD6B20)" bgClip="text">
  Welcome to Faucet
</Heading>;
*/

/*
import { Container, Heading, Text, Button, Stack, Box } from "@chakra-ui/react";
import monitor from "../assets/monitor.svg";
import SlideFadeOnScroll from "./SlideFadeOnScroll";

const Header = () => {
  return (
    <Container as="header" maxW="container.lg" pt="28" pb="10">
      <SlideFadeOnScroll>
        <Stack
          direction={["column-reverse", null, "row"]}
          sx={{
            gap: "2rem",
          }}
          alignItems="center"
        >
          <Box flex="1">
            <Heading as="h1" mb="6" fontFamily="special">
              Welcome to{" "}
              <Text as="span" color="teal">
                AlyraKit.
              </Text>{" "}
              Develop anything.
            </Heading>
            <Text fontSize="xl" mb="6">
              Build a beautiful, modern website with React and Chakra UI.
            </Text>

            <Button as="a" href="#buy-now" size="lg" colorScheme="teal">
              Buy it now
            </Button>
          </Box>
          <Box flex="1">
            <img src={monitor} alt="Illustration with a computer on the desk" width="500" height="378" />
          </Box>
        </Stack>
      </SlideFadeOnScroll>
    </Container>
  );
};

export default Header;
*/
