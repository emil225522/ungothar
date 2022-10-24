import "./App.css";
import Header from "./Shared/Header";
import AboutPage from "./pages/AboutPage";
import StartPage from "./pages/StartPage";
import ProjectsPage from "./pages/ProjectsPage";
import { styled } from "./theme/stitches.config";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Shared/Footer";
import React from "react";

function App() {
  return (
    <Wrapper className="main-font">
      <BrowserRouter>
        <Background className="background-image" />
        <Header />
        <Page>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Page>
        <Footer />
      </BrowserRouter>
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  width: "100vw",
  margin: "auto",
  overflowX: "hidden",
});

const Background = styled("div", {
  filter: "brightness(60%)",
  backgroundSize: "cover",
  backgroundPosition: "50% 50%",
  position: "fixed",
  height: "100vh",
  width: "100vw",
  zIndex: -1,
});

const Page = styled("div", {
  width: "auto",
  maxWidth: "1320px",
  minHeight: "100vh",
  paddingTop: "32px",

  px: 4,
  "@mediaMinLarge": {
    px: 8,
  },
  margin: "0 auto",
  marginTop: "80px",
});

const PageHeading = styled("h1", {
  margin: "auto",
  textAlign: "center",
});

export default App;
