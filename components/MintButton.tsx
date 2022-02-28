import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { CandyMachineAccount } from "../helpers/candy-machine";
import { CircularProgress } from "@material-ui/core";
import { GatewayStatus, useGateway } from "@civic/solana-gateway-react";
import { useEffect, useState } from "react";
import { Wallet } from "@project-serum/anchor";
import { useWallet } from "@solana/wallet-adapter-react";
import { color } from "@chakra-ui/react";

export const CTAButton = styled(Button)`
  width: 100%;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 5px;
  background: linear-gradient(180deg, #604ae5 0%, #813eee 100%);
  color: white;
  font-size: 16px;
`; // add your own styles here

export const MintButton = ({
  onMint,
  candyMachine,
  isMinting,
}: {
  onMint: () => Promise<void>;
  candyMachine?: CandyMachineAccount;
  isMinting: boolean;
}) => {
  const { requestGatewayToken, gatewayStatus } = useGateway();
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (gatewayStatus === GatewayStatus.ACTIVE && clicked) {
      onMint();
      setClicked(false);
    }
  }, [gatewayStatus, clicked, setClicked, onMint]);

  if (useWallet().connected) {
    return (
      <CTAButton
        style={{
          backgroundColor: "white",
          color: "white",
          fontSize: "16px",
          fontWeight: "bold",
        }}
        disabled={
          candyMachine?.state.isSoldOut ||
          isMinting ||
          !candyMachine?.state.isActive
        }
        onClick={async () => {
          setClicked(true);
          if (candyMachine?.state.isActive && candyMachine?.state.gatekeeper) {
            if (gatewayStatus === GatewayStatus.ACTIVE) {
              setClicked(true);
            } else {
              await requestGatewayToken();
            }
          } else {
            await onMint();
            setClicked(false);
          }
        }}
        variant="contained"
      >
        {candyMachine?.state.isSoldOut ? (
          "SOLD OUT"
        ) : isMinting ? (
          <CircularProgress style={{ color: "white" }} />
        ) : (
          "MINT"
        )}
      </CTAButton>
    );
  } else {
    return (
      <div
        style={{
          // textShadow:
          //   "-0.5px -0.5px 0px #000,    -0.5px 0.5px 0px #000,    0.5px -0.5px 0px #000,  0.5px 0px 0px #000",
          color: "#2c2c2c",
          width: "100%",
          textAlign: "center",
          fontWeight: "700",
          fontSize: "24px",
        }}
      >
        Connect your wallet to mint
      </div>
    );
  }
};
