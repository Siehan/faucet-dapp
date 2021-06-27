//Ok
import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      p={4}
      bg="gray.800"
      color="white"
      textAlign="center"
      borderRadius="md"
      fontSize={20}
      bgGradient="linear(to-r, blue.600, green.400)"
    >
      Made with <span className="text-danger">&hearts;</span>
      <span className="text-success">&hearts;</span>
      <span className="text-primary">&hearts;</span>
      <span className="text-warning">&hearts;</span> by Jonathan, Nassim, Victor & Sylvie - The Robinet Token Red Team
    </Box>
  );
};

export default Footer;
