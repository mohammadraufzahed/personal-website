import React from "react";
import { Route, Routes } from "react-router-dom";
import { RingLoader } from "react-spinners";
import Navbar from "./Components/Navbar/Navbar";
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
      <Navbar />
      <Routes>
        <Route
          index
          exact
          element={
            <React.Suspense
              fallback={<RingLoader size={30} color={"#da0037"} loading />}
            >
              <LazyMain />
            </React.Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <React.Suspense
              fallback={<RingLoader size={30} color={"#da0037"} loading />}
            >
              <LazyAboutMe />
            </React.Suspense>
          }
        />
        <Route
          path="/skills"
          element={
            <React.Suspense
              fallback={<RingLoader size={30} color={"#da0037"} loading />}
            >
              <LazyMySkills />
            </React.Suspense>
          }
        />
        <Route
          path="/portfolio"
          element={
            <React.Suspense
              fallback={<RingLoader size={30} color={"#da0037"} loading />}
            >
              <LazyMyPortfolio />
            </React.Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <React.Suspense
              fallback={<RingLoader size={30} color={"#da0037"} loading />}
            >
              <LazyContact_Me />
            </React.Suspense>
          }
        />
        <Route
          path="/seemore"
          element={
            <React.Suspense
              fallback={<RingLoader size={30} color={"#da0037"} loading />}
            >
              <LazyPortfolio_SeeMore />
            </React.Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
