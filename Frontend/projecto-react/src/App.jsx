import React from "react";
import { Home } from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Boards } from "./Components/Paginas/Boards/Boards";

export const App = () => {
  return (
    <div>
      <Home />
    </div>
  );
};
