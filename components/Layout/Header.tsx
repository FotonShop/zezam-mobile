import React, { useState } from "react";
import { useRouter } from "next/router";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Head from "next/head";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Heading,
  LinkProps,
  Image,
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

const MenuLink = ({ children, href, ...props }: LinkProps) => {
  return (
    <Link
      fontSize="md"
      textDecoration="none"
      textTransform="uppercase"
      href={href}
      _active={{ textDecoration: "none" }}
      _hover={{ textDecoration: "none" }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();
  <FontAwesomeIcon icon={faCoffee} />;

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        justifyContent="space-between"
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <Flex
          gridGap={4}
          // justifyContent="space-between"
          alignItems="center"
          cursor="pointer"
          onClick={() => router.push("/")}
        >
          <Image
            alt="logo"
            src="/logo.jpg"
            rounded="full"
            h="3rem"
            mr={"1rem"}
          />
          <Heading
            as="p"
            fontSize="1.5rem"
            fontWeight="700"
            fontFamily="'Be Vietnam Pro', cursive"
            color="#2c2c2c"
          >
            Zezam Open
          </Heading>
        </Flex>
        <Flex
          display={{ base: "none", md: "flex" }}
          ml={10}
          direction={"row"}
          // minWidth={"100%"}
          alignItems={"center"}
          justifyContent={"space-between"}
          wrap={"wrap"}
        >
          <DesktopNav />
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Flex
          direction={"row"}
          minWidth={"100%"}
          alignItems={"right"}
          justifyContent={"left"}
          wrap={"wrap"}
        >
          <MobileNav />
        </Flex>
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const router = useRouter();

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      columnGap={"normal"}
      gridGap={10}
      rowGap={2}
      wrap={"wrap"}
      direction={"row"}
      // width={"100%"}
    >
      <Flex gridGap={60}>
        <Flex gridGap={30} justifyContent="space-between">
          {/* <MenuLink
            borderBottom={
              router.pathname === "/" ? "2px solid #2c2c2c" : "none"
            }
            fontWeight={router.pathname === "/" ? "regular" : "normal"}
            href="/"
            color="#2c2c2c"
          >
            Home
          </MenuLink> */}
          <MenuLink
            borderBottom={
              router.pathname === "/how-to" ? "2px solid #2c2c2c" : "none"
            }
            fontWeight={router.pathname === "/how-to" ? "regular" : "normal"}
            href="/how-to"
            color="#2c2c2c"
          >
            How to
          </MenuLink>
        </Flex>
      </Flex>

      <Flex
        alignItems="center"
        justifyContent="space-between"
        direction={"row"}
        columnGap={"1.6rem"}
      >
        <a
          href="https://discord.com/invite/krRgtbu8AH"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "discord"]} size="2x" />
        </a>

        <a
          href="https://twitter.com/ZezamOpen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
        </a>

        <WalletMultiButton
          style={{
            boxShadow: "none",
            fontWeight: 500,
            fontFamily: '"Be Vietnam Pro"',
            fontSize: "0.75rem",
          }}
        ></WalletMultiButton>
      </Flex>
    </Flex>
  );
};

const DesktopSubNav = () => {
  return (
    <Link
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          ></Text>
          <Text fontSize={"sm"}></Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  const router = useRouter();
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      <Flex direction={"column"} rowGap={"0.5rem"}>
        <MenuLink
          fontWeight={router.pathname === "/" ? "regular" : "normal"}
          href="/"
          color="#2c2c2c"
        >
          Home
        </MenuLink>

        <MenuLink
          fontWeight={router.pathname === "/how-to" ? "regular" : "normal"}
          href="/how-to"
          color="#2c2c2c"
        >
          How to
        </MenuLink>

        <a
          href="https://discord.com/invite/krRgtbu8AH"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "discord"]} size="2x" />
        </a>

        <a
          href="https://twitter.com/ZezamOpen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
        </a>

        <WalletMultiButton
          style={{
            boxShadow: "none",
            fontWeight: 500,
            fontFamily: '"Be Vietnam Pro"',
            fontSize: "0.75rem",
          }}
        ></WalletMultiButton>
      </Flex>
    </Stack>
  );
};
