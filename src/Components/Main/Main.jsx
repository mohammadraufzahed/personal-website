import React from "react";
import "../../Styles/global/global.scss";
import { AboutMe } from "../AboutMe/AboutMe.jsx";
import { Header } from "../Header/Header";
export const Main = () => {
  return (
    <main>
      <Header />
      <AboutMe />
    </main>
  );
};
