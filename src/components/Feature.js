import { Box, Heading, Text, Image, useColorModeValue } from "@chakra-ui/react";

const Feature = ({ icon, title, text }) => {
  const color = useColorModeValue("gray.600", "teal.50");
  return (
    <Box as="section" w={"100%"}>
      <Image boxSize="64px" src={icon} alt="" mb="4" />
      <Heading fontSize="xl" mb="4">
        {title}
      </Heading>
      <Text color={color}>{text}</Text>
    </Box>
  );
};

export default Feature;
