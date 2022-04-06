import React from "react";
import "../../Styles/global/global.scss";
import { AboutMe } from "../AboutMe/AboutMe.jsx";
import { Header } from "../Header/Header";
import { MyServices } from "../MyServices/MyServices";
import { MySkills } from "../MySkills/MySkills";
export const Main = () => {
  return (
    <main>
      <Header />
      <AboutMe />
      <MySkills />
      <MyServices />
    </main>
  );
};
