import "./App.css";
// import "rsuite/dist/rsuite.min.css";
// import "rsuite/styles/index.less";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./js/components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./js/components/Footer";
import Home from "./js/components/Home";
import OurServices from "./js/components/OurServices";
import FiqhiMasail from "./js/components/services/FiqhiMasail";
import QuranRecitation from "./js/components/services/QuranRecitation";
import QuranTafseer from "./js/components/services/QuranTafseer";
import Ayimah from "./js/components/Hadith/Ayimah";
// import { Container } from "rsuite";
import { Container } from "react-bootstrap";
// import PageScrollProgressBar from "react-page-scroll-progress-bar";
import RegisterNow from "./js/components/Register/RegisterNow";
import About from "./js/components/About/About";
import React, { Component, useState } from "react";
import Students from "./js/components/Register/Students";
import { useEffect } from "react";

function App() {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    const windowScrollTop = window.scrollY;

    if (windowScrollTop > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <BrowserRouter>
        <Container className="ButurabApp">
          {/* Header Section Starts */}
          <Container
            className="ButurabAppHeader"
            style={{
              backgroundColor: "#F4FBFF",
              background: isSticky ? "#fff" : "",
              width: "100%",
              zIndex: "999",
              position: isSticky ? "fixed" : "absolute",
              marginBottom: "20px",
              height: "100px",
            }}
          >
            <Header />
          </Container>
          {/* Header Section Ends */}

          {/* Body Section Starts */}
          <Container className="ButurabAppBody">
            {/* ROUTES */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/RegisterNow" element={<RegisterNow />} />
              <Route path="/Students" element={<Students />} />
              {/* <Route path="/AcadmeyPortal" element={<AcademyPortal />} /> */}
              {/* <Route path="/ContactUs" element={<ContactUs />} /> */}
              <Route path="/OurServices" element={<OurServices />} />
              <Route path="/FiqhiMasail" element={<FiqhiMasail />} />
              <Route path="/QuranRecitation" element={<QuranRecitation />} />
              {/* <Route path="/QuranTafseer" element={<QuranTafseer />} /> */}
              <Route path="/QuranTafseer" element={<Ayimah />} />
              <Route path="/About" element={<About />} />
            </Routes>
            {/* ROUTES END */}
          </Container>
          {/* Body Section Ends */}

          {/* Footer Section Starts */}
          <Container className="ButurabAppFooter">
            <Footer />
          </Container>
          {/* Footer Section Ends */}
        </Container>
      </BrowserRouter>

      {/* Page Scroll Progress Bar STARTS*/}
      {/* <PageScrollProgressBar color="lightblue" bgColor="white" height="6px" /> */}
      {/* Page Scroll Progress Bar ENDS */}
    </>
  );
}

export default App;
