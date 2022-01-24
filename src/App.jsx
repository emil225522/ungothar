import "./App.css";
import Header from "./Header";
import AboutPage from "./pages/AboutPage";
import StartPage from "./pages/StartPage";
import ProjectsPage from "./pages/ProjectsPage";
import { styled } from "@stitches/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Shared/Footer";

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
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  width: "100wv",
  margin: "auto",
  backgroundColor: "#36454F",
});

const Page = styled("div", {
  width: "100%",
  maxWidth: "1320px",
  minHeight: "100vh",
  margin: "85px auto",
  backgroundColor: "#36454F",
});
const Text = styled("p", {
  fontSize: "16px",
});

const PageHeading = styled("h1", { margin: "auto", textAlign: "center" });

export default App;
