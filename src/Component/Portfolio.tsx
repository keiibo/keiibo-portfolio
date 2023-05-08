import React from "react";
import PortfolioTile from "./PortfolioTile";
import "../Style/Portfolio/Portfolio.scss";

const Portfolio: React.FC = () => {
  return (
    <div className="bg_container">
      <div className="bg_opacity">
        <div className="portfolio_container">
          <div className="portfolio_wrapper">
            <div className="portfolio_title_container">
              <h1 className="portfolio_title">私が手がけた成果物です</h1>
              <p>クリックすると別タブで開きます</p>
            </div>
            <PortfolioTile max={9} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
