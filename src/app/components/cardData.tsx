"use client";

import image2 from "@/app/images/don.png";
import rec from "@/app/images/Rectangle 2.png";
import tik from "@/app/images/tik.png";

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
    thumb: tik,
    thumbSrc: tik,
    challengeBy: "User",
    additionalInfo: { thumb: tik },
    header: "Card 2 Header",
    paragraph: "This is Card 2 content.",
    button1Text: "Button",
    button2Text: "No Thanks",
  },
  {
    width: "29vw",
    height: "60vh",
    thumb: rec,
    thumbSrc: tik,
    challengeBy: "User 3",
    additionalInfo: { thumb: tik },
    header: "Card 3 Header",
    paragraph: "This is Card 3 content.",
    button1Text: "Button 1",
    button2Text: "No Thanks",
  },
  {
    width: "29vw",
    height: "60vh",
    thumb: rec,
    thumbSrc: tik,
    challengeBy: "User 4",
    additionalInfo: { thumb: tik },
    header: "Card 3 Header",
    paragraph: "This is Card 3 content.",
    button1Text: "Button 1",
    button2Text: "No Thanks",
  },
  // Add more card data as needed
];
export default cardData;
