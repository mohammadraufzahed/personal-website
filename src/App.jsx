import { Route, Routes } from "react-router-dom";
import { AboutMe } from "./Components/AboutMe/AboutMe";
import { Main } from "./Components/Main/Main";
import { MyPortfolio } from "./Components/MyPortfolio/MyPortfolio";
import { MySkills } from "./Components/MySkills/MySkills";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index exact element={<Main />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<MySkills />} />
        <Route path="/portfolio" element={<MyPortfolio />} />
      </Routes>
    </>
  );
}

export default App;
