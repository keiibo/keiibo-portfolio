import React from "react";
import PortfolioCard from "./PortfolioCard";
import "../Style/PortfolioTile.scss";

const PortfolioTile: React.FC = () => {
  interface Work {
    name: string;
    url: string;
    img: string;
  }

  const works: Work[] = [
    {
      name: "作品1",
      url: "https://www.google.com/",
      img: "https://example.com/image1.jpg",
    },
    {
      name: "作品2",
      url: "https://www.google.com/",
      img: "https://example.com/image2.jpg",
    },
    {
      name: "作品3",
      url: "https://www.google.com/",
      img: "https://example.com/image3.jpg",
    },
    {
      name: "作品4",
      url: "https://www.google.com/",
      img: "https://example.com/image4.jpg",
    },
    {
      name: "作品5",
      url: "https://www.google.com/",
      img: "https://example.com/image5.jpg",
    },
    {
      name: "作品6",
      url: "https://www.google.com/",
      img: "https://example.com/image6.jpg",
    },
    {
      name: "作品7",
      url: "https://www.google.com/",
      img: "https://example.com/image7.jpg",
    },
    {
      name: "作品8",
      url: "https://www.google.com/",
      img: "https://example.com/image8.jpg",
    },
    {
      name: "作品9",
      url: "https://www.google.com/",
      img: "https://example.com/image9.jpg",
    },
  ];

  const max: number = 3;

  return (
    <div className="grid-container">
      {works.slice(0, max).map((work: Work, index: number) => (
        <PortfolioCard name={work.name} index={index} img={work.img} />
      ))}
    </div>
  );
};

export default PortfolioTile;
