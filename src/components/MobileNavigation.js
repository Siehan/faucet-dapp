//Ok
import { HamburgerIcon } from "@chakra-ui/icons";
import { Button, Fade, Box, useDisclosure, IconButton } from "@chakra-ui/react";

const MobileNavigation = ({ children }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button as={IconButton} aria-label="Options" icon={<HamburgerIcon />} variant="outline" onClick={onToggle} />
      <Box position="absolute" left="0" right="0" top="100%" shadow="xl" bg="white">
        <Fade in={isOpen} unmountOnExit={true}>
          <Box p="4">{children}</Box>
        </Fade>
      </Box>
    </>
  );
};

export default MobileNavigation;

/*
import { useDisclosure } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import { Button, Fade, Box, MeneButton, IconButton } from "@chakra-ui/react"

function MobileNavigation  ({{children}})  {
  const { isOpen, onToggle } = useDisclosure
}

return {
  <>
  <Button onClick={onToggle}>Click Me</Button>
  <Box position="absolute" shadow="md"  left="0" right="0" top="100%" bg="white">
  <Fade in={isOpen} unmountOnExit={true}>
  <Box p="4" > {children}</Box>
  </Fade>
  </Box>
  </>
  )
};
*/
