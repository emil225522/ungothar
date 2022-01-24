import "./App.css";
import Header from "./Header";
import AboutPage from "./pages/AboutPage";
import StartPage from "./pages/StartPage";
import ProjectsPage from "./pages/ProjectsPage";
import { styled } from "@stitches/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Wrapper className="main-font">
      <Header />

      <Page>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about-me" element={<AboutPage />} />
          </Routes>
        </BrowserRouter>
      </Page>
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  width: "100wv",
  height: "100vh",
  margin: "auto",
  backgroundColor: "#36454F",
});

const Page = styled("div", {
  width: "100%",
  height: "100%",
  maxWidth: "1320px",

  margin: "32px auto",
  backgroundColor: "#36454F",
});
const Text = styled("p", {
  fontSize: "16px",
});

const PageHeading = styled("h1", { margin: "auto", textAlign: "center" });

export default App;
