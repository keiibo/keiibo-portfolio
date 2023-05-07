import React from "react";
import PortfolioCard from "./PortfolioCard";
import "../Style/PortfolioTile.scss";
import keiibo_house from "../Image/keiibo_house.png";

const PortfolioTile: React.FC = () => {
  interface Work {
    name: string;
    url: string;
    img: string;
  }

  const works: Work[] = [
    {
      name: "Keiibo House",
      url: "https://keiibo-portfolio.vercel.app/",
      img: keiibo_house,
    },
    {
      name: "作品2",
      url: "https://www.google.com/",
      img: "https://placehold.jp/3d4070/ffffff/450x240.png?text=None...",
    },
    {
      name: "作品3",
      url: "https://www.google.com/",
      img: "https://placehold.jp/3d4070/ffffff/450x240.png?text=None...",
    },
    {
      name: "作品4",
      url: "https://www.google.com/",
      img: "https://placehold.jp/3d4070/ffffff/450x240.png?text=None...",
    },
    {
      name: "作品5",
      url: "https://www.google.com/",
      img: "https://placehold.jp/3d4070/ffffff/450x240.png?text=None...",
    },
    {
      name: "作品6",
      url: "https://www.google.com/",
      img: "https://placehold.jp/3d4070/ffffff/450x240.png?text=None...",
    },
    {
      name: "作品7",
      url: "https://www.google.com/",
      img: "https://placehold.jp/3d4070/ffffff/450x240.png?text=None...",
    },
    {
      name: "作品8",
      url: "https://www.google.com/",
      img: "https://placehold.jp/3d4070/ffffff/450x240.png?text=None...",
    },
    {
      name: "作品9",
      url: "https://www.google.com/",
      img: "https://placehold.jp/3d4070/ffffff/450x240.png?text=None...",
    },
  ];

  const max: number = 3;

  return (
    <div className="grid-container">
      {works.slice(0, max).map((work: Work, index: number) => (
        <PortfolioCard
          name={work.name}
          index={index}
          img={work.img}
          url={work.url}
        />
      ))}
    </div>
  );
};

export default PortfolioTile;
