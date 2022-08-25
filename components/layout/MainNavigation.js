// @ts-nocheck
import classes from "./MainNavigation.module.css";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Spacer,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  Text
} from "@chakra-ui/react";
function MainNavigation() {
  return (
    <Flex p="5" alignItems="center">
      <Text fontSize="30" fontFamily="Bungee">Abylin Johnson</Text>
      <Spacer/>
      <Menu>
      <MenuButton
        px={4}
        py={4}
        transition="all 0.2s"
        borderRadius="md"
        borderWidth="2px"
        >
          <HamburgerIcon />
      </MenuButton>
      <MenuList>
        <MenuItem fontFamily="Bungee">About</MenuItem>
        <MenuItem fontFamily="Bungee">Projects</MenuItem>
      </MenuList>
    </Menu>
    </Flex>
    
  );
}

export default MainNavigation;
