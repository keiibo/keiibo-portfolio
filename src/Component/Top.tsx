import React from "react";
import "../Style/Top.scss";
import inLove from "../Image/inLove.svg";
import engineer from "../Image/engineer.svg";

const Top = () => {
  return (
    <div className="bg_container">
      <div className="bg_opacity">
        <section className="top_container">
          <div className="top_page">
            <div className="title_container">
              <h1 className="top_title">Keiibo Portfolio </h1>
              <div className="in_love">
                <img src={inLove} alt="inLove" />
              </div>
            </div>
            <div className="scroll_container">
              <a href="#work" className="scroll_btn">
                <span className="scroll_span"></span>
              </a>
            </div>
          </div>
        </section>
        <section className="work_container" id="work">
          <div className="work_wrapper">
            <div className="engineer">
              <img src={engineer} alt="" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Top;
