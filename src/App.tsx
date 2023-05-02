import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Header/Navbar";
import Error from "./Component/Error";
import Home from "./Component/Top";
import "./Style/App.scss";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar /> {/* ナビバーのコンポーネント */}
        <Routes>
          {/* ルーティングの制御が行える */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/works" element={<Works />} /> */}

          <Route path="*" element={<Error />} />
          {/* ページが見つからない時に出力されるエラーページ*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
