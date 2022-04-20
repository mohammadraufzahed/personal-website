import React from "react";
import App_Css from "./Styles/global/App-css.module.scss";
import { Route, Routes } from "react-router-dom";
const LazyNavbar = React.lazy(() => import("./Components/Navbar/Navbar"));
const LazyAboutMe = React.lazy(() => import("./Components/AboutMe/AboutMe"));
const LazyContact_Me = React.lazy(() =>
  import("./Components/Contact_Me/Contact_Me")
);
const LazyMain = React.lazy(() => import("./Components/Main/Main"));
const LazyMyPortfolio = React.lazy(() =>
  import("./Components/MyPortfolio/MyPortfolio")
);
const LazyMySkills = React.lazy(() => import("./Components/MySkills/MySkills"));
const LazyPortfolio_SeeMore = React.lazy(() =>
  import("./Components/Portfolio_SeeMore/Portfolio_SeeMore")
);
function App() {
  return (
    <>
      <React.Suspense
        fallback={
          <div className={App_Css.loader}>
            <figure>
              <img src="/images/bubble-loader.gif" alt="" />
            </figure>
          </div>
        }
      >
        <LazyNavbar />
        <Routes>
          <Route index exact element={<LazyMain />} />
          <Route path="/about" element={<LazyAboutMe />} />
          <Route path="/skills" element={<LazyMySkills />} />
          <Route path="/portfolio" element={<LazyMyPortfolio />} />
          <Route path="/contact" element={<LazyContact_Me />} />
          <Route path="/seemore" element={<LazyPortfolio_SeeMore />} />
        </Routes>
      </React.Suspense>
    </>
  );
}

export default App;
