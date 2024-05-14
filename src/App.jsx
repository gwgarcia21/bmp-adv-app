// https://github.com/issaafalkattan/React-Landing-Page-Template/tree/master

import './App.css';
import React, { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Header } from "./components/Header";
import { Features } from "./components/Features";
import { About } from "./components/About";
import { Presentation } from "./components/Presentation";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Disclaimer } from './components/Disclaimer';
import { Faq } from "./components/Faq";
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
      <Presentation data={landingPageData.Presentation} />
      <Services data={landingPageData.Services} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Faq data={landingPageData.Faq} />
      <Contact data={landingPageData.Contact} />
      <Disclaimer data={landingPageData.Disclaimer} />
    </div>
  );
}

export default App;
