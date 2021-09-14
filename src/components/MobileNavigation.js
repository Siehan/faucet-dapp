import { HamburgerIcon } from "@chakra-ui/icons";
import { Button, Fade, Box, IconButton, useColorModeValue, useDisclosure } from "@chakra-ui/react";

const MobileNavigation = ({ children }) => {
  const { isOpen, onToggle } = useDisclosure();
  const bg = useColorModeValue("whiteAlpha", "blackAlpha");

  return (
    <>
      <Button as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="outline" onClick={onToggle} />
      <Box
        position="absolute"
        left="0"
        right="0"
        top="100%"
        shadow="xl"
        bg={bg}
        bgGradient="linear(to-r, green.400, blue.400)"
        borderRadius="md"
        opacity="0.7"
      >
        <Fade in={isOpen} unmountOnExit={true}>
          <Box p="4">{children}</Box>
        </Fade>
      </Box>
    </>
  );
};

export default MobileNavigation;
