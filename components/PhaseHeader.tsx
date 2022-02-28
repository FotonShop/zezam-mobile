import * as anchor from "@project-serum/anchor";
import Typography from "@material-ui/core/Typography";
import { CandyMachineAccount } from "../helpers/candy-machine";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import useWalletBalance from "../hooks/useWalletBalance";
export enum Phase {
  WaitForCM,
  Live,
  Unknown,
  NotLive,
}

export function getPhase(candyMachine: CandyMachineAccount | undefined): Phase {
  return Phase.Live;
}

interface DarkContainerProps {
  text: string | undefined;
  mintInfo?: boolean;
  whiteList?: boolean;
  candyMachine?: CandyMachineAccount | undefined;
}
export const DarkContainer = ({
  text,
  mintInfo,
  whiteList,
  candyMachine,
}: DarkContainerProps) => {
  const normalPrice: any | undefined = candyMachine?.state?.price;
  const discountPrice: any | undefined =
    candyMachine?.state?.whitelistMintSettings?.discountPrice;
  const Redeemed = candyMachine?.state.itemsRedeemed;
  const price = whiteList
    ? discountPrice / LAMPORTS_PER_SOL
    : normalPrice / LAMPORTS_PER_SOL;
  if (mintInfo) {
    return (
      <div
        className="lg:p-5 p-2 mb-8"
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          background: "#384457",
          color: "white",
          borderRadius: 5,
          fontWeight: "bold",
          fontSize: 16,
        }}
      >
        <div className="flex flex-col mr-24">
          <div
            style={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              background: "#384457",
              color: "white",
              borderRadius: 5,
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            Price
          </div>
          <div
            className="text-l font-normal mt-2"
            style={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              background: "#384457",
              color: "white",
              borderRadius: 5,
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            {isNaN(price) ? "-" : "◎" + price}
          </div>
        </div>
        <div className="flex flex-col">
          <div>Redeemed</div>{" "}
          <div
            className="text-l font-normal mt-2"
            style={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              background: "#384457",
              color: "white",
              borderRadius: 5,
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            {Redeemed}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="lg:m-2 m-1 lg:p-5 p-2"
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
          background: "#384457",
          color: "white",
          borderRadius: 5,
          fontWeight: "bold",
          fontSize: 16,
        }}
      >
        {text}
      </div>
    );
  }
};

const Header = (props: {
  date: anchor.BN | undefined;
  status?: string | undefined;
  whiteList?: boolean | undefined;
  candyMachine?: CandyMachineAccount | undefined;
}) => {
  // const { phaseName, date, status, whiteList, candyMachine } = props;
  const { status, whiteList, candyMachine } = props;
  return (
    <div>
      <div>
        <Typography
          variant="h5"
          style={{ fontWeight: 600 }}
          className="text-white"
        >
          {/* <small style={{ fontSize: 14 }}>
            ({candyMachine?.state.itemsRedeemed})
          </small> */}
        </Typography>
      </div>
      <div className="flex flex-col">
        <DarkContainer
          text={``}
          mintInfo
          whiteList={whiteList}
          candyMachine={candyMachine}
        />

        {/* <PhaseCountdown
          date={toDate(date)}
          style={{ justifyContent: "flex-end" }}
          status={status || "COMPLETE"}

        /> */}
      </div>
    </div>
  );
};

type PhaseHeaderProps = {
  candyMachine?: CandyMachineAccount;
  rpcUrl: string;
  whiteList: boolean;
};

export const PhaseHeader = ({ candyMachine, whiteList }: PhaseHeaderProps) => {
  console.log("White Listed", whiteList, candyMachine);
  const phase = getPhase(candyMachine);
  return (
    <>
      {phase === Phase.Unknown && !candyMachine && <Header date={undefined} />}

      {phase === Phase.Live && (
        <Header
          date={candyMachine?.state.goLiveDate}
          status={whiteList ? "Whitelisted!" : "LIVE"}
          whiteList={whiteList}
          candyMachine={candyMachine}
        />
      )}
    </>
  );
};
