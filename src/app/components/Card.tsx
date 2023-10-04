import React from "react";
import Image from "next/image";

export interface CardProps {
  width: any;
  height: any;
  thumb: any; // You need to replace 'image2', 'tik', 'rec', etc. with actual image URLs
  thumbSrc: any;
  challengeBy: any;
  additionalInfo: { thumb: any };
  header: any;
  paragraph: any;
  button1Text: any;
  button2Text: any;
}

const Card: React.FC<CardProps> = ({
  width,
  height,
  thumb,
  challengeBy,
  additionalInfo,
  header,
  paragraph,
  thumbSrc,
  button1Text,
  button2Text,
}) => {
  return (
    <div style={{ width, height }} className="card">
      <Image src={thumb} alt="Card" className="card-image" />
      <div className="card-section">
        <p className="challenge-by">Challenge by {challengeBy}</p>
        <div className="flex">
          <Image
            src={additionalInfo.thumb}
            alt="Additional Info"
            className="info-image"
          />
          <div className="flex flex-col">
            <h2 className="card-header font-bold">{header}</h2>
            <p className="card-paragraph">{paragraph}</p>
          </div>
        </div>
        <div className="card-buttons">
          <button className="button text-white rounded-md h-25 mr-3 bg-red-600 pt-3 pb-4 px-4 text-sm font-semibold hover:bg-red-700 transition duration-300">
            {button1Text}
          </button>
          <button className="button ml-3 pt-3 pb-4 h-25">{button2Text}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
