import React from "react";
import "../Style/Top/Top_top.scss";
import "../Style/Top/Top_work.scss";
import "../Style/Top/Top_portfolio.scss";
import "../Style/Top/Top_contact.scss";
import inLove from "../Image/inLove.svg";
import engineer from "../Image/engineer.svg";
import responsive from "../Image/responsive.svg";
import contact from "../Image/contact.svg";
import woman_dev from "../Image/dev_woman.svg";
import PortfolioTile from "./PortfolioTile";

const Top: React.FC = () => {
  return (
    <div className="bg_container">
      <div className="bg_opacity">
        <section className="top_container">
          <div className="top_page">
            <div className="title_container">
              <h1 className="top_title">Keiibo House</h1>
              <div className="in_love">
                <img src={inLove} alt="inLove" />
              </div>
            </div>
            <div className="scroll_container">
              <a href="#career" className="scroll_btn">
                <span className="scroll_span"></span>
              </a>
            </div>
          </div>
        </section>
        <section className="work_container" id="career">
          <div className="work_wrapper">
            <div className="engineer">
              <img src={engineer} alt="" />
            </div>
            <p className="comment">
              私はフロント技術を得意とする
              <br />
              Webアプリエンジニアです
            </p>
            <img src={responsive} alt="" className="responsive" />
            <div className="skill_container">
              <div className="skill_box">
                <p className="skill ">
                  HTML/CSS/JavaScript/TypeScript/React/Java/
                </p>
                <p className="skill ">Git/GitHub/AWS CodeCommit/</p>
                <p className="skill">Teams/BackLog/MS Office</p>
              </div>
            </div>
          </div>
        </section>
        <section className="portfolio_container">
          <div className="portfolio_wrapper">
            <h2 className="portfolio_title">例えばこんなものを作れます</h2>
            <PortfolioTile />
          </div>
          <div className="more_container">
            <a href="/works" className="more_href">
              <span className="more_btn">もっと見る</span>
            </a>
          </div>
        </section>
        <section className="contact_container" id="contact">
          <img src={contact} alt="contact" className="contact_svg" />
          <div className="contact_wrapper">
            <h2 className="contact_title">お問い合わせはこちらから</h2>
            <form className="contact_form">
              <div className="form_group">
                <input type="text" id="name" name="name" placeholder="お名前" />
              </div>
              <div className="form_group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="メールアドレス"
                />
              </div>
              <div className="form_group">
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="お問い合わせ内容"
                ></textarea>
              </div>
            </form>
            <button type="submit" className="submit_button">
              送信
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Top;
