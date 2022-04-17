import { Route, Routes } from "react-router-dom";
import { AboutMe } from "./Components/AboutMe/AboutMe";
import { Contact_Me } from "./Components/Contact_Me/Contact_Me";
import { Main } from "./Components/Main/Main";
import { MyPortfolio } from "./Components/MyPortfolio/MyPortfolio";
import { MySkills } from "./Components/MySkills/MySkills";
import Navbar from "./Components/Navbar/Navbar";
import { Portfolio_SeeMore } from "./Components/Portfolio_SeeMore/Portfolio_SeeMore";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index exact element={<Main />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<MySkills />} />
        <Route path="/portfolio" element={<MyPortfolio />} />
        <Route path="/contact" element={<Contact_Me />} />
        <Route path="/seemore" element={<Portfolio_SeeMore />} />
      </Routes>
    </>
  );
}

export default App;
