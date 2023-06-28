import React from "react";
import "../Style/Top/Top_top.scss";
import "../Style/Top/Top_work.scss";
import "../Style/Top/Top_portfolio.scss";
import "../Style/Top/Top_contact.scss";
import PortfolioTile from "./PortfolioTile";

const Top: React.FC = () => {
  //SVG
  const inLove_svg: string =
    "https://firebasestorage.googleapis.com/v0/b/keiibo-portfolio.appspot.com/o/svg_icon%2FinLove.svg?alt=media&token=f4f50a0a-f7dd-4bf7-9513-0ba3408de2eb";
  const engineer_svg: string =
    "https://firebasestorage.googleapis.com/v0/b/keiibo-portfolio.appspot.com/o/svg_icon%2Fengineer.svg?alt=media&token=938ca21d-f5ef-46da-a2c4-2aa7461fe34e";
  const responsive_svg: string =
    "https://firebasestorage.googleapis.com/v0/b/keiibo-portfolio.appspot.com/o/svg_icon%2Fresponsive.svg?alt=media&token=26bcf864-875f-404c-94cc-4f6039c844e3";
  const contact_svg: string =
    "https://firebasestorage.googleapis.com/v0/b/keiibo-portfolio.appspot.com/o/svg_icon%2Fcontact.svg?alt=media&token=b362bb3a-3612-40d2-9f61-9446bf528d34";

  const top: JSX.Element = (
    <section className="top_container" id="myself">
      <div className="top_page">
        <div className="title_container">
          <h1 className="top_title">Keiibo Portfolio</h1>
          <div className="in_love">
            <img src={inLove_svg} alt="inLove" />
          </div>
        </div>
        <div className="scroll_container">
          <a href="#career" className="scroll_btn">
            <span className="scroll_span"></span>
          </a>
        </div>
      </div>
    </section>
  );

  const work: JSX.Element = (
    <section className="work_container" id="career">
      <div className="work_wrapper">
        <h2 className="work_title">私にできること</h2>
        <div className="work_content">
          <img src={engineer_svg} alt="engineer" className="engineer" />
          <div className="work_content_wrapper">
            <div className="works_contents_container">
              <h3 className="work_content_title">Webアプリ開発</h3>
              <p className="work_content_text">
                主にReactを用いたSPAの開発ができます。
                <br />
                また、Next.jsを用いたSSGやSSRの開発も可能です。
                <br />
                素のJavaScriptでの開発も可能ですが、TypeScriptを用いた開発を推奨しています。
              </p>
            </div>
            <div className="works_contents_container">
              <h3 className="work_content_title">主要な技術スタック</h3>
              <div className="work_content_item">
                <div className="level_box">
                  <h4>レベル松</h4>
                  <ul>
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Git/GitHub</li>
                    <li>Chakra UI</li>
                  </ul>
                </div>
                <div className="level_box">
                  <h4>レベル竹</h4>
                  <ul>
                    <li>TypeScript</li>
                    <li>Next.js</li>
                    <li>Node.js</li>
                    <li>Express</li>
                  </ul>
                </div>
                <div className="level_box">
                  <h4>レベル梅</h4>
                  <ul>
                    <li>SQL</li>
                    <li>Vercel</li>
                    <li>Firebase</li>
                    <li>AWS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const portfolio: JSX.Element = (
    <section className="portfolio_top_container">
      <div className="portfolio_top_wrapper">
        <h2 className="portfolio_top_title">例えばこんなものを作れます</h2>
        <PortfolioTile max={3} />
      </div>
      <div className="more_container">
        <p>今後、より多数の作成物を掲示していきます！(今後)</p>
        <a href="/portfolio" className="more_href">
          <span className="more_btn">もっと見る</span>
        </a>
      </div>
    </section>
  );

  const attention = {
    color: "red",
    fontSize: "18px",
  };

  const form: JSX.Element = (
    <section className="contact_container" id="contact">
      <img src={contact_svg} alt="contact" className="contact_svg" />
      <div className="contact_wrapper">
        <h2 className="contact_title">
          お問い合わせはこちらから
          <span style={attention}>(現在使用できません)</span>
        </h2>
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
  );

  return (
    <div className="bg_container">
      <div className="bg_opacity">
        {top}
        {work}
        {portfolio}
        {form}
      </div>
    </div>
  );
};

export default Top;
