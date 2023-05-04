import React from "react";
import  "../Style/PortfolioCard.scss"; 


interface PortfolioProps {
  name: string;
  index: number;
  img: string;
}

const PortfolioCard: React.FC<PortfolioProps> = ({name, index, img }) => {
  return (
    <div className="grid_item_box">
      <div key={index} className="grid-item">
        <a href="https://www.google.com/">
          <div className="work_image">
            <img src="https://placehold.jp/450x240.png" alt="作品画像" />
            {/* <img src={img} alt="" /> */}
          </div>
        </a>
      </div>
      <h3 className="work_title">{name}</h3>
    </div>
  );
};

export default PortfolioCard;
