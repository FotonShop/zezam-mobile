import React from "react";
interface ReactCountdownProps {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}
export default function ReactCountdown({
  days,
  hours,
  minutes,
  seconds,
}: ReactCountdownProps) {
  function padZeros(number: string) {
    return number.toString().padStart(2, "0");
  }
  return (
    <div className="flex flex-row container ">
      <div className="flex flex-col center w-full ">
        <div className="text-center text-4xl font-sans "></div>
        <div className="flex flex-row text-white-600  lg:p-2 p-1 text-center">
          <div className="flex flex-col">
            <p className="lg:text-2xl  text-2xl  font-roboto ">
              {padZeros(days)} :
            </p>
          </div>
          <div className="flex flex-col">
            <p className="lg:text-2xl text-2xl  font-roboto">
              &nbsp; {padZeros(hours)} &nbsp;
            </p>
          </div>
          <div className="flex flex-col">
            <p className="lg:text-2xl text-2xl  font-roboto">
              : {padZeros(minutes)} &nbsp;
            </p>
          </div>
          <div className="flex flex-col">
            <p className="lg:text-2xl text-2xl font-roboto">
              : {padZeros(seconds)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
