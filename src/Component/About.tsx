import React from "react";
import "../Style/About/About_top.scss";
import profile from "../Image/profile.svg";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import keii from "../Image/keii.png";
import portfolio_fb from "../Image/portfolio_fb.svg";

const About = () => {
  const github_link = "https://github.com/keiibo";
  const twitter_link = "https://twitter.com/keiibo_engineer";

  return (
    <section className="about_container">
      <img src={profile} alt="" className="profile img_anime" />
      <img src={portfolio_fb} alt="" className="profile_fb img_anime" />
      <div className="about_wrapper">
        <div className="title_container">
          <h1 className="about_title">About Me</h1>
          <h2>-私について-</h2>
        </div>
        <div className="img_box">
          <img src={keii} alt="" className="keii" />
        </div>
        <div className="link_container">
          <div className="link_wrapper">
            <div className="github link">
              <AiFillGithub />
              <a href={github_link} className="github_link ref" target="_blank">
                {github_link}
              </a>
            </div>
            <div className="twitter link">
              <AiOutlineTwitter />
              <a
                href={twitter_link}
                className="twitter_link ref"
                target="_blank"
              >
                {twitter_link}
              </a>
            </div>
          </div>
        </div>
        <p className="bio">
          1998年12月に神奈川県で生まれました。
          <br />
          高校卒業後は、東京都調布市で一人暮らしをしながら、明治大学で学業に励みました。
          <br />
          大学を卒業すると、新卒で大手SIerに入社しました。
          <br />
          その後、業務をこなしながら自己研鑽に励み、フロントエンドエンジニアとしてスキルを磨いてきました。
          <br />
          ReactやVercelなどのモダンな技術を習得し、日々技術力の向上に努めています。
          <br />
          明るく前向きな姿勢で、常に丁寧な仕事を心掛けております。
          <br />
          これからも技術の研鑽を重ね、より多くの人々に貢献できるエンジニアを目指してまいります。
        </p>
      </div>
    </section>
  );
};

export default About;
