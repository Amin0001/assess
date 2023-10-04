import React from "react";
import hash from "@/app/images/Hashtag' (1).png";
import Image from "next/image";
export const Hashtag = () => {
  return (
    <div className="hash">
      <div className=" bg-gray-700 p-3">
        <div className="flex">
          <Image src={hash} alt="hashtag" />
          <h1>Trending Hashtags</h1>
        </div>
        <div className="flex flex-wrap gap-8">
          <h4 className="font-bold">#NigerianTiktok</h4>
          <h4 className="font-bold">#Generalhappytiktokchallenge</h4>
          <h4 className="font-bold">#freezeframe</h4>
          <h4 className="font-bold">#zotatutorial</h4>
          <h4 className="font-bold">#Merrycristmas</h4>
          <h4 className="font-bold">#artistoftiktok</h4>
          <h4 className="font-bold">#flipbottlechallenge</h4>
          <h4 className="font-bold">#cratechallenge</h4>
          <h4 className="font-bold">#makemefamous</h4>
          <h4 className="font-bold">#bblondon</h4>
          <h4 className="font-bold">#bnaija</h4>
          <h4 className="font-bold">#legwalk</h4>
        </div>
      </div>
    </div>
  );
};
