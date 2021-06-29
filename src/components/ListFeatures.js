//Ok
import {
  Box,
  Container,
  Stack,
  Heading,
  List,
  ListItem,
  ListIcon,
  useColorModeValue,
  // SimpleGrid
} from "@chakra-ui/react";
import bitcoin_miner from "../assets/images/bitcoin_miner.svg";
import { CheckCircleIcon } from "@chakra-ui/icons";
const ListFeatures = () => {
  const list = ["New Token on line", "Free a short time", "Claiming your free NFTs", "Every 3 days"];
  const bg = useColorModeValue("gray.50", "teal.700");
  /*
  const {colorMode} = useColorMode()
  const bg = colorMode === "light" ? "gray.50" : "teal.700"
  */
  return (
    <Box as="section" bg={bg} py="24">
      <Container maxW="container.lg">
        <Stack
          direction={["column", null, "row"]}
          sx={{
            gap: "2rem",
          }}
          alignItems="center"
        >
          <Box flex="1">
            <img src={bitcoin_miner} alt="Bitcoin miner" width="500" height="318" />
          </Box>
          <Box flex="1">
            <Heading mb="6" textAlign="center">
              Build by traders for traders
            </Heading>
            <List sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
              {list.map((el, index) => {
                return (
                  <ListItem key={index}>
                    <ListIcon as={CheckCircleIcon} color="teal.300" />
                    {el}
                  </ListItem>
                );
              })}
            </List>
            {/*
            <SimpleGrid as={List}
              columns="2" spacing="2"
            >
              {list.map((el, index) => {
                return (
                  <ListItem key={index}>
                    <ListIcon as={CheckCircleIcon} color="teal.300" />
                    {el}
                  </ListItem>
                )
              })}
            </SimpleGrid>
            */}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default ListFeatures;
