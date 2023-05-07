import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Style/Footer.scss";

const Footer = () => {
  //現在のページの状態を見てナビにクラス.mode_tagを付与する
  const location = useLocation();
  const { pathname } = location;
  const getLinkClassName = (path: string): string => {
    return `nav_href${pathname === path ? " mode_tag" : ""}`;
  };

  return (
    <footer>
      <nav className="navbar">
        <h1 className="title">
          <Link to="/">Keiibo House</Link>
        </h1>
        <p className="copyright">© 2023 Keiibo House All Rights Reserved.</p>
      </nav>
    </footer>
  );
};

export default Footer;
