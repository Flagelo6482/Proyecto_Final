import React from "react";
import { Home } from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Boards } from "./Components/Paginas/Boards/Boards";

export const App = () => {
  return (
    <div>
      <h1>Routes</h1>
      <Routes>
        <Route path="/header" element={<Header />}>
          <Route path="boards" element={<Boards />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
