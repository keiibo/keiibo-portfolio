import React from "react";
import { Link } from "react-router-dom";
import "../Style/Navbar.scss";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';


const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <h1>Keiibo</h1>
        <ul className="nav_list">
          <li>
            <Link to="/">トップ</Link>
          </li>
          <li>
            <Link to="/about">私について</Link>
          </li>
          <li>
            <Link to="/works">ポートフォリオ</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
