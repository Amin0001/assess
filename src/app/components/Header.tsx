import React from "react";
import Image from "next/image";
import Logo from "@/app/images/Logo (1).png";
import letter from "@/app/images/LetterMark.png";
import challenge from "@/app/images/Challenge.png";
import sign from "@/app/images/Sign In.png";
import bag from "@/app/images/Money Bag.png";
import help from "@/app/images/Help.png";

const Header = () => {
  return (
    <header className="bg-black h-15 shadow-lg px-4 pt-0 mt-1 mb-1 flex justify-between items-center">
      <div className="w-1/3">
        <a href="#" className="flex flex-row text-red-600 text-2xl font-bold">
          <Image src={Logo} alt="Logo" />
          <Image src={letter} alt="Logo" />
        </a>
      </div>

      <div className="w-1/3 flex justify-end">
        <a
          href="#"
          className="flex flex-row justify-center items-center h-12 mr-3 text-white bg-red-600 px-4 rounded-full text-sm font-semibold hover:bg-red-700 transition duration-300"
        >
          <Image src={challenge} alt="challenge" />
          Create Challenge
        </a>
        <a
          href="#"
          className="flex flex-col justify-center h-12 items-center w-12  bg-gray-500 rounded-full font-semibold hover:bg-gray-700 transition duration-300"
        >
          <Image src={help} alt="help" />
        </a>
      </div>

      <div className="w-1/3 flex justify-end">
        <a
          href="#"
          className="flex flex-row justify-center items-center h-12 mr-3 text-white bg-gray-700 px-4 rounded-full text-sm font-semibold hover:bg-gray-900 transition duration-300"
        >
          <Image src={bag} alt="money bag" />
          $00.00
        </a>
        <a
          href="#"
          className="flex flex-row justify-center items-center h-12 ml-3 text-white bg-green-500 px-4 rounded-full text-sm font-semibold hover:bg-green-700 transition duration-300"
        >
          <Image src={sign} alt="sign-in" />
          Log in
        </a>
      </div>
    </header>
  );
};

export default Header;
