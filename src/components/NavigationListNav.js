import { List, ListItem, Link } from "@chakra-ui/react";

const NavigationListNav = ({ sx }) => {
  return (
    <List sx={{ textTransform: "uppercase", a: { p: 3, m: 1, display: "inline-block" }, ...sx }}>
      <ListItem>
        <Link fontWeight="login" href="/#login">
          Login
        </Link>
      </ListItem>

      <ListItem>
        <Link href="/#faucet">Faucet</Link>
      </ListItem>

      <ListItem>
        <Link href="/#functionality-RBT">Functionality RBT</Link>
      </ListItem>

      <ListItem>
        <Link href="/#receipt">Receipt</Link>
      </ListItem>
    </List>
  );
};

export default NavigationListNav;
