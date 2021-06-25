import { Box, Container, Link, useMediaQuery, useColorModeValue } from "@chakra-ui/react";
import MobileNavigationDrawer from "./MobileNavigationDrawer";
import NavigationListNav from "./NavigationListNav";
import SwitchColorMode from "./SwitchColorMode";

const Navigation = () => {
  const [isMobile] = useMediaQuery("(max-width: 720px)");
  console.log(isMobile);
  const bg = useColorModeValue("whiteAlpha.800", "blackAlpha.200");
  return (
    <Box
      position="fixed"
      py="4"
      w="100%"
      bg={bg}
      borderRadius="lg"
      zIndex="sticky"
      bgGradient="linear(to-r, yellow,orange,red)"
      _hover={{
        bgGradient: "linear(to-l, #3CAADD, #4FAA1B)",
      }}
    >
      <Container
        as="nav"
        maxW="container.lg"
        alignItems="center"
        d="flex"
        sx={{
          "a:hover": {
            textDecoration: "none",
          },
        }}
      >
        <Link href="/" fontWeight="bold" fontSize="2xl" mr="auto">
          Robinet Token
        </Link>
        {isMobile ? (
          <MobileNavigationDrawer>
            <NavigationListNav />
          </MobileNavigationDrawer>
        ) : (
          <NavigationListNav sx={{ display: "flex" }} />
        )}
        <SwitchColorMode />
      </Container>
    </Box>
  );
};

export default Navigation;

// bgGradient: "linear(to-r, green.500, blue.500)",
