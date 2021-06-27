//Ok
import { Container, Heading, Text, Button, Stack, Box } from "@chakra-ui/react";
import woman_desk from "../assets/woman_desk.svg";
import SlideFadeOnScroll from "./SlideFadeOnScroll";

const Header = () => {
  return (
    <Container as="header" maxW="container.lg" pt="20" pb="10">
      <SlideFadeOnScroll>
        <Stack
          direction={["column-reverse", null, "row"]}
          sx={{
            gap: "2rem",
          }}
          alignItems="center"
        >
          <Box flex="1">
            <Heading textShadow="1px 3px orange" mb="6">
              Welcome to{" "}
              <Text as="span" color="teal">
                Faucet
              </Text>{" "}
            </Heading>
            <Text fontSize="2xl" mb="6" py="8">
              Get a free Robinet Token !!!
            </Text>{" "}
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
  );
};

export default Header;
