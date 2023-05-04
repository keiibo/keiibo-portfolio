import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../Style/Navbar.scss";

const Navbar: React.FC  = () => {
  //現在のページの状態を見てナビにクラス.mode_tagを付与する
  const location = useLocation();
  const { pathname } = location;
  const getLinkClassName = (path: string): string => {
    return `nav_href${pathname === path ? " mode_tag" : ""}`;
  };

  return (
    <header>
      <nav className="navbar">
        <h1 className="title">
          <Link to="/">Keiibo House</Link>
        </h1>
        <ul className="nav_list">
          <li className="nav_item">
            <Link to="/" className={getLinkClassName("/")}>
              トップ
            </Link>
          </li>
          <li className="nav_item">
            <Link to="/about" className={getLinkClassName("/about")}>
              私について
            </Link>
          </li>
          <li className="nav_item">
            <Link to="/works" className={getLinkClassName("/works")}>
              ポートフォリオ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
