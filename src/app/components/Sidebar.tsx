import React from "react";
import Image from "next/image"; // Import the Image component
import first from "@/app/images/Icon.png";
import second from "@/app/images/Icon (1).png";
import third from "@/app/images/Icon (2).png";
import sign from "@/app/images/Sign In.png";

const Sidebar = () => {
  return (
    <div className="bg-black h-85 shadow-lg px-4 pt-0 mt-1 flex flex-col">
      <div className="h-1/3 flex flex-col">
        {/* Use the Image component */}
        <a
          href="#"
          className="mt-2 mb-2 flex flex-col justify-center items-center w-10 h-10  font-semibold hover:bg-red-700 transition duration-300"
        >
          <Image src={first} alt="icon" />
        </a>
        <a
          href="#"
          className="mt-2 mb-2 flex flex-col justify-center items-center w-10 h-10  font-semibold hover:bg-gray-700 transition duration-300"
        >
          <Image src={second} alt="icon" />
        </a>
        <a
          href="#"
          className="mt-2 mb-2 flex flex-col justify-center items-center w-10 h-10  font-semibold hover:bg-gray-700 transition duration-300"
        >
          <Image src={third} alt="icon" />
        </a>
      </div>
      <div className="flex-grow"></div>{" "}
      {/* Add this div to push the "Sign In" button to the bottom */}
      <div className="w-15 h-30 flex flex-col justify-end">
        <a
          href="#"
          className="flex flex-col justify-center items-center w-10 h-10 bg-green-500 rounded-full font-semibold hover:bg-green-700 transition duration-300"
        >
          <Image src={sign} alt="sign-in" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
