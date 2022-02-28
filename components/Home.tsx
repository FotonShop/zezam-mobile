import { useEffect, useMemo, useState } from "react";

import styled from "styled-components";
import { Container, Snackbar } from "@material-ui/core";
import { toDate } from "../helpers/utils";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Countdown from "react-countdown";
import Alert from "@material-ui/lab/Alert";
import { IsLive } from "./isLive";
import { Image } from "@chakra-ui/react";
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
  Text,
  Box,
  Stack,
  Heading,
  LinkProps,
  Link,
  useToast,
  Center,
  useMediaQuery,
} from "@chakra-ui/react";

import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
});

import * as anchor from "@project-serum/anchor";

import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
// import useWalletBalance from "../hooks/useWalletBalance";
import { useWallet } from "@solana/wallet-adapter-react";
import useSplToken from "../hooks/useSplToken";
import ReactCountdown from "./ReactCountdown";
import {
  awaitTransactionSignatureConfirmation,
  CandyMachineAccount,
  CANDY_MACHINE_PROGRAM,
  getCandyMachineState,
  mintOneToken,
} from "../helpers/candy-machine";

import { AlertState } from "../helpers/utils";
import { MintButton } from "./MintButton";
import { PhaseHeader } from "./PhaseHeader";
import {
  GatewayProvider,
  useGateway,
  GatewayStatus,
} from "@civic/solana-gateway-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Badge } from "@civic/solana-gateway-react";

const MintContainer = styled.div``; // add your styles here

export interface HomeProps {
  candyMachineId?: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  txTimeout: number;
  rpcHost: string;
}

const Home = (props: HomeProps) => {
  const [yourSOLBalance, setYourSOLBalance] = useState<number | null>(null);
  const rpcUrl = props.rpcHost;
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT
  const wallet = useWallet();
  const [candyMachine, setCandyMachine] = useState<CandyMachineAccount>();
  const [isLoading, isSPLExists] = useSplToken();
  // const [refresh, setRefresh] = useState(false);
  // const balance = useWalletBalance();
  const anchorWallet = useMemo(() => {
    if (
      !wallet ||
      !wallet.publicKey ||
      !wallet.signAllTransactions ||
      !wallet.signTransaction
    ) {
      return;
    }

    return {
      publicKey: wallet.publicKey,
      signAllTransactions: wallet.signAllTransactions,
      signTransaction: wallet.signTransaction,
    } as anchor.Wallet;
  }, [wallet]);

  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  const onMint = async () => {
    try {
      setIsMinting(true);
      document.getElementById("#identity")?.click();
      if (wallet.connected && candyMachine?.program && wallet.publicKey) {
        const mintTxId = (
          await mintOneToken(candyMachine, wallet.publicKey)
        )[0];

        let status: any = { err: true };
        if (mintTxId) {
          status = await awaitTransactionSignatureConfirmation(
            mintTxId,
            props.txTimeout,
            props.connection,
            true
          );
        }

        if (!status?.err) {
          setAlertState({
            open: true,
            message: "Congratulations! Mint succeeded!",
            severity: "success",
          });
        } else {
          setAlertState({
            open: true,
            message: "Mint failed! Please try again!",
            severity: "error",
          });
        }
      }
    } catch (error: any) {
      console.log("err ", error);
      // TODO: blech:
      let message = error.msg || "Minting failed! Please try again!";
      if (!error.msg) {
        if (!error.message) {
          message = "Transaction Timeout! Please try again.";
        } else if (error.message.indexOf("0x138")) {
        } else if (error.message.indexOf("0x137")) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf("0x135")) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          window.location.reload();
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: "error",
      });
    } finally {
      setIsMinting(false);
    }
  };

  useEffect(() => {
    (async () => {
      if (!anchorWallet) {
        return;
      }

      const balance = await props.connection.getBalance(anchorWallet.publicKey);
      setYourSOLBalance(balance);

      if (props.candyMachineId) {
        try {
          const cndy = await getCandyMachineState(
            anchorWallet,
            props.candyMachineId,
            props.connection
          );
          setCandyMachine(cndy);
        } catch (e) {
          console.log("Problem getting candy machine state");
          console.log(e);
        }
      } else {
        console.log("No candy machine detected in configuration.");
      }
    })();
  }, [anchorWallet, props.candyMachineId, props.connection]);

  return (
    <Flex
      direction={"row"}
      alignItems={"center"}
      justifyContent={"center"}
      wrap={"wrap"}
      columnGap={"8rem"}
      // rowGap={"4rem"}
    >
      <Box mt={"px"} w={[300, 400, 500]}>
        <Image
          // className="move-img"
          // borderRadius={1000}
          alt="golden access"
          loading="lazy"
          src={"/golden-access.png"}
        />
      </Box>
      <Flex justifyContent={"space-between"}>
        <Flex
          // mr={"4rem"}
          direction={"column"}
          // columnGap={"0rem"}
          // w={"100%"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Flex justifyContent={"space-between"}>
            <IsLive
              candyMachine={candyMachine}
              rpcUrl={rpcUrl}
              whiteList={isSPLExists}
            />
          </Flex>

          <Box
            textAlign={"center"}
            pt={"0rem"}
            fontSize="32"
            fontWeight={700}
            color={"#2c2c2c"}
            style={{
              // lineHeight: "0rem",
              margin: "0rem",
            }}
          >
            Mint Your
          </Box>
          <Box
            textAlign={"center"}
            // pt={"1rem"}
            fontSize="50"
            fontWeight={700}
            color={"#D8A822"}
            style={{
              // lineHeight: "3rem",
              margin: "0rem",
            }}
          >
            Golden Access
          </Box>
          {wallet.connected ? (
            <PhaseHeader
              candyMachine={candyMachine}
              rpcUrl={rpcUrl}
              whiteList={isSPLExists}
            />
          ) : (
            <WalletMultiButton
              style={{
                marginBottom: "2.1rem",
                justifyContent: "center",
              }}
            ></WalletMultiButton>
          )}
          <>
            <MintContainer>
              {candyMachine?.state.isActive &&
              candyMachine?.state.gatekeeper &&
              wallet.publicKey &&
              wallet.signTransaction ? (
                <GatewayProvider
                  wallet={{
                    publicKey:
                      wallet.publicKey || new PublicKey(CANDY_MACHINE_PROGRAM),
                    //@ts-ignore
                    signTransaction: wallet.signTransaction,
                  }}
                  // // Replace with following when added
                  // gatekeeperNetwork={candyMachine.state.gatekeeper_network}
                  gatekeeperNetwork={
                    candyMachine?.state?.gatekeeper?.gatekeeperNetwork
                  } // This is the ignite (captcha) network
                  /// Don't need this for mainnet
                  clusterUrl={rpcUrl}
                  options={{ autoShowModal: false }}
                >
                  <MintButton
                    candyMachine={candyMachine}
                    isMinting={isMinting}
                    onMint={onMint}
                  />
                </GatewayProvider>
              ) : (
                <MintButton
                  candyMachine={candyMachine}
                  isMinting={isMinting}
                  onMint={onMint}
                />
              )}
            </MintContainer>
          </>
        </Flex>

        {/* {wallet.connected && <p>Balance: {balance || 0}SOL</p>} */}
        {/* </Grid> */}

        <Snackbar
          open={alertState.open}
          autoHideDuration={6000}
          onClose={() => setAlertState({ ...alertState, open: false })}
        >
          <Alert
            onClose={() => setAlertState({ ...alertState, open: false })}
            severity={alertState.severity}
          >
            {alertState.message}
          </Alert>
        </Snackbar>
      </Flex>
      <Flex
        className={"footer"}
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        wrap={"wrap"}
        columnGap={"6rem"}
        position={"relative"}
        height={"100%"}
        marginTop={"10rem"}
      >
        {/* <Flex>
          <Image
            alt="name"
            loading="lazy"
            width={"100%"}
            height={"30px"}
            src={"/poweredbyIntersect.png"}
          />
        </Flex>
        <Flex fontSize={"12px"} marginTop={"0.5rem"}>
          Copyright © 2022, Dream Apes NFT Collection All trademarks and
          copyrights belong to their respective owners.
        </Flex> */}
      </Flex>
    </Flex>
  );

  const candyMachineGoLive = toDate(candyMachine?.state.goLiveDate)?.getTime();

  return (
    <div className="bg-container">
      <Container style={{ marginTop: 16 }}>
        {candyMachineGoLive && wallet.connected && (
          <Countdown
            date={isSPLExists ? 1640199600000 : candyMachineGoLive}
            // renderer={renderer}
          />
        )}
        {!candyMachine && wallet.connected && (
          <div className="text-white text-center mt-36 mb-6 text-2xl">
            Loading
          </div>
        )}
        {!wallet.connected && (
          <div className="text-white font-sans text-center text-4xl mt-36">
            Connect Wallet <br /> To Initiate Countdown
          </div>
        )}
        <Snackbar
          open={alertState.open}
          autoHideDuration={6000}
          onClose={() => setAlertState({ ...alertState, open: false })}
        >
          <Alert
            onClose={() => setAlertState({ ...alertState, open: false })}
            severity={alertState.severity}
          >
            {alertState.message}
          </Alert>
        </Snackbar>
      </Container>
    </div>
  );
};

export default Home;
