import { Stack, Text, Link } from "@chakra-ui/react";
import { Layout } from "../components/Layout/layout";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  Flex,
  // Text,
  Box,
  // Stack,
  Heading,
  LinkProps,
  // Link,
  useToast,
  Center,
} from "@chakra-ui/react";
const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
});

export default function HowTo() {
  return (
    <Layout>
      <Stack alignItems="center" py={20} spacing={4}>
        <Stack maxWidth={["100vw", "90vw", "80vw", "70vw"]} spacing={8}>
          <Text fontSize="2rem">
            A guide to getting your{" "}
            <Text as="span" fontWeight="regular">
              Zezam Golden Access NFT
            </Text>
          </Text>
          <Stack spacing={3}>
            <Text fontSize="1rem" pb="1rem">
              0. If you already have SOL in any Solana wallet, just go to{" "}
              <Link href="/#mint" color="#D8A822">
                the minting page
              </Link>{" "}
              and mint your Zezam Golden Access!{" "}
            </Text>
            <Text fontSize="1rem" pb="1rem">
              1. Download your Solana wallet from{" "}
              <Link href="https://phantom.app/" isExternal color="#D8A822">
                phantom.app
              </Link>
              .
            </Text>
            <Stack>
              <Text fontSize="1rem" mb="1rem">
                2. Now go to{" "}
                <Link href="https://binance.com" isExternal color="#D8A822">
                  binance.com
                </Link>{" "}
                and buy your cryptocurrencies to mint the Zezam Golden Access.
              </Text>
              <Stack px={5}>
                <Text fontSize="1rem" pb="1rem">
                  a. Follow{" "}
                  <Link
                    href="https://www.binance.com/pt-BR/fiat/deposit/USD"
                    isExternal
                    color="#D8A822"
                  >
                    this link
                  </Link>{" "}
                  to deposit FIAT (your country's currency) to buy some SOL. we
                  recommend that you deposit the amount equivalent to 0.5 SOL,
                  to pay the transaction fees.
                </Text>
                <Text fontSize="1rem" pb="1rem">
                  b.{" "}
                  <Link
                    href="https://www.binance.com/pt-BR/convert"
                    color="#D8A822"
                    isExternal
                  >
                    Here
                  </Link>{" "}
                  you can trade your FIAT for SOL.
                </Text>
                <Text fontSize="1rem" pb="1rem">
                  c. Now, if you go to{" "}
                  <Link
                    href="https://www.binance.com/pt-BR/my/wallet/account/main"
                    color="#D8A822"
                    isExternal
                  >
                    your wallet on Binance
                  </Link>{" "}
                  you can see your SOL balance. Click on WITHDRAW to receive
                  this tokens on your wallet (created at the beginning of the
                  tutorial).
                </Text>
                <Text fontSize="1rem" pb="1rem">
                  d. In the form that you are seeing, fill the "Address" field
                  with your Phantom wallet address, which you can get by
                  clicking on the address showed on Phantom.
                </Text>
                <Text fontSize="1rem" pb="1rem">
                  f. Select how many SOL do you want to withdraw, complete the
                  security steps and in few minutes you'll be able to see your
                  cryptocurrencies on your Phantom wallet.
                </Text>
                <Text fontSize="1rem" pb="1rem">
                  g. Now you can mint your Zezam Golden Access, just go to{" "}
                  <Link href="/#mint" color="#D8A822">
                    the minting page
                  </Link>{" "}
                  and be happy!
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Layout>
  );
}
