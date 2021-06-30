import { Box, Badge, Button, Container, Heading, LightMode, Text, useColorModeValue } from "@chakra-ui/react";
const GetStarted = () => {
  const bg = useColorModeValue("gray.30", "teal.700");
  return (
    <LightMode>
      <Box as="section" textAlign="center" bg={bg} py="20" id="login" borderRadius="md">
        <Container maxWidth="container.md">
          <Badge
            as="span"
            textTransform="uppercase"
            fontSize="12px"
            colorScheme="whiteAlpha"
            borderRadius="2xl"
            fontWeight="bold"
            mb={6}
            paddingX={2}
            paddingY={1}
          >
            Get Started
          </Badge>
          <Heading mb="6" fontSize={35} textShadow="1px 4px orange">
            Get our Robinet Token
          </Heading>
          <Text fontSize="xl" mb="6">
            Our token is free a short time. It will allow you to perform all your tests. You will have to wait 3 days
            before you can make a new request.
          </Text>
          <Button as="a" href="#login" colorScheme="orange" size="lg">
            Go to Login & Claim Robinet Token
          </Button>
        </Container>
      </Box>
    </LightMode>
  );
};

export default GetStarted;
