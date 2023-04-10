import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon,HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} position={'fixed'} width={'100%'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box ><ScrollLink to="hero" smooth={true} offset={0}>Abylin Johnson</ScrollLink></Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7} alignItems={'center'}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  alignItems={'center'}
                  p={4}
                  minW={0}>
                  <HamburgerIcon/>
                </MenuButton>
                <MenuList alignItems={'center'}>
                <ScrollLink to="skills" smooth={true} offset={-140}><MenuItem>Skills</MenuItem></ScrollLink>
                <ScrollLink to="projects" smooth={true} offset={-140}><MenuItem>Projects</MenuItem></ScrollLink>
                <ScrollLink to="contact" smooth={true} offset={0}><MenuItem>Contact</MenuItem></ScrollLink>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}