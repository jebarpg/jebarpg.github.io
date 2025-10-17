import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import JsonData from "./data/data.json";

import SmoothScroll from "smooth-scroll";

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
    facebook: string;
    twitter: string;
    youtube: string;
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
      facebook: "",
      twitter: "",
      youtube: "",
    },
  });
  useEffect(() => {
    return setLandingPageData(JsonData);
  }, []);
  return (
    <>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Footer />
    </>
  );
}

export default App;
