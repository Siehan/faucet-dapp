import { List, ListItem, Link } from "@chakra-ui/react";

const NavigationListItems = ({ sx }) => {
  return (
    <List sx={{ textTransform: "uppercase", a: { fontSize: "18px", p: 2, display: "inline-block" }, ...sx }}>
      <ListItem>
        <Link href="/#login">Login</Link>
      </ListItem>

      <ListItem>
        <Link href="/#faucet">Faucet</Link>
      </ListItem>

      <ListItem>
        <Link href="/#functionality-RBT">Functionality-RBT</Link>
      </ListItem>

      <ListItem>
        <Link href="/#receipt">Receipt</Link>
      </ListItem>
    </List>
  );
};

export default NavigationListItems;
