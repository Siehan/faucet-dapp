import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer">
      <Box
        p={3}
        textAlign="center"
        alignItems="center"
        borderRadius="md"
        maxW={"100%"}
        mx="auto"
        fontSize={19}
        bgGradient="linear(to-l, #3CAADD, #4FAA1B)"
        _hover={{
          bgGradient: "linear(to-r, blue.600, green.400)",
        }}
      >
        Made with <span className="text-danger">&hearts;</span>
        <span className="text-success">&hearts;</span>
        <span className="text-primary">&hearts;</span>
        <span className="text-warning">&hearts;</span> by Jonathan, Nassim, Victor & Sylvie - The Robinet Token Red Team
      </Box>
    </Box>
  );
};

export default Footer;
