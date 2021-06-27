import { Heading, Text, useColorModeValue } from "@chakra-ui/react";

const Feature = ({ icon, title, text }) => {
  const color = useColorModeValue("gray.600", "teal.50");
  return (
    <div>
      <Heading fontSize="xl" mb="4">
        {title}
      </Heading>
      <Text color={color}>{text}</Text>
    </div>
  );
};

export default Feature;

/*
<Image boxSize="64px" src={icon} alt="" mb="4" />
*/
