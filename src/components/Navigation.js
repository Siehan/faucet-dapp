import { Box, Container, Link, useMediaQuery, useColorModeValue } from "@chakra-ui/react";
import MobileNavigation from "./MobileNavigation";
import NavigationListItems from "./NavigationListItems";
import SwitchColorMode from "./SwitchColorMode";
import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";
import eau_du_robinet1_pixel_perfect from "../assets/images/eau_du_robinet1_pixel_perfect.svg";

const Navigation = () => {
  const [isMobile] = useMediaQuery("(max-width: 720px)");
  console.log(isMobile);
  const bg = useColorModeValue("whiteAlpha.800", "blackAlpha.200");
  return (
    <Box
      position="fixed"
      py="3"
      w="100%"
      bg={bg}
      borderRadius="md"
      zIndex="sticky"
      bgGradient="linear(to-r, yellow,orange,red)"
      _hover={{
        bgGradient: "linear(to-l, #3CAADD, #4FAA1B)",
      }}
    >
      <Container
        alignItems="center"
        as="nav"
        maxW="container.lg"
        d="flex"
        sx={{
          "a:hover": {
            textDecoration: "none",
          },
        }}
      >
        <Wrap>
          <WrapItem>
            <Avatar
              marginX="4"
              size="md"
              name="Robinet Token"
              img
              src={eau_du_robinet1_pixel_perfect}
              alt="Pixel perfect1"
            />{" "}
          </WrapItem>
        </Wrap>

        <Link href="/" fontWeight="bold" fontSize="2xl" mr="auto">
          Robinet Token
        </Link>
        {isMobile ? (
          <MobileNavigation>
            <NavigationListItems />
          </MobileNavigation>
        ) : (
          <NavigationListItems sx={{ display: "flex" }} />
        )}
        <SwitchColorMode />
      </Container>
    </Box>
  );
};

export default Navigation;
