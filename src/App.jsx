import { Route, Routes } from "react-router-dom";
import { AboutMe } from "./Components/AboutMe/AboutMe";
import { Main } from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index exact element={<Main />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </>
  );
}

export default App;
