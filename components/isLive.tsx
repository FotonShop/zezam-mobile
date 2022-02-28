import * as anchor from "@project-serum/anchor";
import Typography from "@material-ui/core/Typography";
import { CandyMachineAccount } from "../helpers/candy-machine";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import useWalletBalance from "../hooks/useWalletBalance";
import { toDate } from "../helpers/utils";
import Countdown from "react-countdown";
import { Text } from "@chakra-ui/react";
import React from "react";
import ReactCountdown from "./ReactCountdown";

export enum Phase {
  WaitForCM,
  Live,
  Unknown,
  NotLive,
}

export function getPhase(candyMachine: CandyMachineAccount | undefined): Phase {
  return Phase.Live;
}

export interface DarkContainerProps {
  text: string | undefined;
  mintInfo?: boolean;
  whiteList?: boolean;
  candyMachine?: CandyMachineAccount | undefined;
}

type PhaseHeaderProps = {
  candyMachine?: CandyMachineAccount;
  rpcUrl: string;
  whiteList: boolean;
};

export const IsLive = ({ candyMachine, whiteList }: PhaseHeaderProps) => {
  console.log("White Listed", whiteList, candyMachine);
  const date = toDate(candyMachine?.state.goLiveDate);
  const candyMachineGoLive = toDate(candyMachine?.state.goLiveDate)?.getTime();
  const phase = getPhase(candyMachine);
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: {
    days: any;
    hours: any;
    minutes: any;
    seconds: any;
    completed: any;
  }) => {
    return (
      <ReactCountdown
        days={days}
        minutes={minutes}
        hours={hours}
        seconds={seconds}
      ></ReactCountdown>
    );
  };

  return (
    <>
      {whiteList ? (
        <Text color={"#2c2c2c"} fontSize={16}>
          WHITELISTED!
        </Text>
      ) : Date.now() >= 1646071200000 ? (
        <Text color={"#2c2c2c"} fontSize={16}>
          MINT IS LIVE!
        </Text>
      ) : (
        <Countdown renderer={renderer} date={1646071200000}></Countdown>
      )}
    </>
  );
};
