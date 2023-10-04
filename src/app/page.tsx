"use client";
import Image from "next/image";
import cardData from "./components/cardData";
import Header from "@/app/components/Header";
import Sidebar from "@/app/components/Sidebar";
import image2 from "@/app/images/don.png";
import rec from "@/app/images/Rectangle 2.png";
import tik from "@/app/images/tik.png";
import Card from "@/app/components/Card";
import Carousel from "@/app/components/Carousel";
import { Hashtag } from "./components/Hashtag";
import { Count } from "./components/Count";
const HomePage = () => {
  return (
    <div className="flex min-h-screen flex-col ">
      <Header />
      <hr className="border-gray-700" />

      <div className="flex flex-row">
        <Sidebar />
        <div className="w-px bg-gray-700 h-screen"></div>
        <div className="mt-4 ml-4 flex flex-col gap-3">
          <Carousel cardData={cardData} />
          <div className="flex gap-4">
            <Hashtag />
            <Count />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
