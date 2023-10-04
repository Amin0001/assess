import React, { useState } from "react";
import Card from "./Card"; // Adjust the import path as needed
import image2 from "@/app/images/don.png";
import rec from "@/app/images/Rectangle 2.png";
import tik from "@/app/images/tik.png";
import Arr from "@/app/images/Icon/Show.png";
import sho from "@/app/images/Arrow.png";
import Image from "next/image";
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardData = [
    {
      width: "29vw",
      height: "60vh",
      thumb: image2,
      thumbSrc: tik,
      challengeBy: "User 1",
      additionalInfo: { thumb: tik },
      header: "Flower Challenge",
      paragraph: "What is your favourite flower?",
      button1Text: "Earn up to $50",
      button2Text: "No Thanks",
    },
    {
      width: "29vw",
      height: "60vh",
      thumb: rec,
      thumbSrc: tik,
      challengeBy: "User",
      additionalInfo: { thumb: tik },
      header: "Traveling Kits",
      paragraph: "What are your travelling kits",
      button1Text: "Earn up to $50",
      button2Text: "No Thanks",
    },
    {
      width: "29vw",
      height: "60vh",
      thumb: rec,
      thumbSrc: tik,
      challengeBy: "User 3",
      additionalInfo: { thumb: tik },
      header: "Gamers Life",
      paragraph: "What game are you playing next?",
      button1Text: "Earn up to $50",
      button2Text: "No Thanks",
    },
    {
      width: "29vw",
      height: "60vh",
      thumb: tik,
      thumbSrc: tik,
      challengeBy: "User 4",
      additionalInfo: { thumb: tik },
      header: "Gamers Life",
      paragraph: "What game are you playing next?",
      button1Text: "Earn up to $50",
      button2Text: "No Thanks",
    },
    // Add more card data as needed
  ];

  const numVisibleCards = 3; // Number of cards to display at a time

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardData.length - numVisibleCards ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardData.length - numVisibleCards : prevIndex - 1
    );
  };

  // Calculate the subset of cards to display
  const visibleCards = cardData.slice(
    currentIndex,
    currentIndex + numVisibleCards
  );

  // Debugging: Log values to the console
  console.log("currentIndex:", currentIndex);
  console.log("visibleCards:", visibleCards);

  return (
    <div className="relative">
      <div className="carousel">
        <div className="carousel-inner flex space-x-4 overflow-x-hidden overflow-y-hidden">
          {visibleCards.map((card, index) => (
            <div
              key={index}
              className={`carousel-item w-1/3 ${
                index === numVisibleCards - 1 ? "opacity-100" : "opacity-50"
              }`}
            >
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="carousel-prev rounded-full absolute left-0 top-1/3 transform -translate-y-1/2 bg-white hover:bg-white text-white font-semibold px-2 py-2 rounded"
      >
        <Image src={Arr} alt="arrow_icon" />
      </button>
      <button
        onClick={nextSlide}
        className="carousel-next rounded-full absolute right-0 top-1/3 transform -translate-y-1/2 bg-white hover:bg-white text-white font-semibold px-2 py-2 rounded"
      >
        <Image src={sho} alt="arrow_icon" />
      </button>
    </div>
  );
};

export default Carousel;
