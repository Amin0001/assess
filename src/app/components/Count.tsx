import React from "react";
import tim from "@/app/images/noto-v1_timer-clock.png";
import tin from "@/app/images/Hourglass.png";
import Image from "next/image";
export const Count = () => {
  return (
    <div className="count h-full ">
      <div className=" bg-gray-700 p-3">
        <div className="flex gap-2">
          <Image src={tim} alt="timer" />
          <h1>Active Challenge Countdown</h1>
        </div>
        <div className="flex flex-col items-center justify-center p-9">
          <Image src={tin} alt="hourglass" />
          <p>You have no active challenge yet.</p>
        </div>
      </div>
    </div>
  );
};
