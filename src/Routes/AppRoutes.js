import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Score from "../pages/Score";
import Fielding from "../pages/Fielding";
import Batting from "../pages/Batting";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/score" element={<Score />} />
        <Route path="/fielding" element={<Fielding />} />
        <Route path="/batting" element={<Batting />} />
      </Routes>
    </div>
  );
};
export default AppRoutes;
