import React from "react";
import "../Style/PortfolioCard.scss";

interface PortfolioProps {
  name: string;
  index: number;
  img: string;
  url: string;
}

const PortfolioCard: React.FC<PortfolioProps> = ({ name, index, img, url }) => {
  return (
    <div className="grid_item_box" key={index}>
      <div className="grid-item">
        <a href={url}>
          <div className="work_image">
            <img src={img} alt="作品画像" />
            {/* <img src={img} alt="" /> */}
          </div>
        </a>
      </div>
      <h3 className="work_title">{name}</h3>
    </div>
  );
};

export default PortfolioCard;
