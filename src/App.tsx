import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import JsonData from "./data/data.json";

import SmoothScroll from "smooth-scroll";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// eslint-disable-next-line react-refresh/only-export-components
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

interface LandingPageData {
  Header: {
    title: string;
    paragraph: string;
  };
  About: {
    paragraph: string;
    Why: string[];
    Why2: string[];
  };
  Skills: {
    icon: string;
    name: string;
    text: string;
    color: string;
  }[];
  Projects: {
    title: string;
    largeImage: string;
    smallImage: string;
  }[];
  Contact: {
    address: string;
    phone: string;
    email: string;
    linkedin: string;
    github: string;
    medium: string;
  };
}
function App() {
  const [landingPageData, setLandingPageData] = useState<LandingPageData>({
    Header: {
      title: "",
      paragraph: "",
    },
    About: {
      paragraph: "",
      Why: [],
      Why2: [],
    },
    Skills: [],
    Projects: [],
    Contact: {
      address: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      medium: "",
    },
  });
  useEffect(() => {
    return setLandingPageData(JsonData);
  }, []);
  return (
    <>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Skills data={landingPageData.Skills} />
      <Projects data={landingPageData.Projects} />
      <Contact data={landingPageData.Contact} />
      <Footer />
    </>
  );
}

export default App;
