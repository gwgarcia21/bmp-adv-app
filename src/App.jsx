// https://github.com/issaafalkattan/React-Landing-Page-Template/tree/master

import './App.css';
import React, { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Header } from "./components/Header";
import { Features } from "./components/Features";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { Team } from "./components/Team";
import JsonData from "./data/data.json";
//import SmoothScroll from "smooth-scroll";

function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      {/* <Features data={landingPageData.Features} /> */}
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      {/* <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} /> */}
      <Team data={landingPageData.Team} />
      {/* <Contact data={landingPageData.Contact} /> */}
    </div>
  );
}

export default App;
