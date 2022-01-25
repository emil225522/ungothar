import "./App.css";
import Header from "./Shared/Header";
import AboutPage from "./pages/AboutPage";
import StartPage from "./pages/StartPage";
import ProjectsPage from "./pages/ProjectsPage";
import { styled } from "./theme/stitches.config";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Shared/Footer";

function App() {
  return (
    <Wrapper className="main-font">
      <Background />
      <Header />

      <Page>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
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
});

const Background = styled("div", {
  backgroundImage: `url(${"background.jpg"})`,
  filter: "brightness(60%)",
  backgroundSize: "cover",
  position: "fixed",
  height: "100vh",
  width: "100vw",
  zIndex: -1,
});

const Page = styled("div", {
  width: "100%",
  maxWidth: "1320px",
  minHeight: "100vh",
  margin: "85px auto",
  paddingTop: "32px",
  px: 16,
});
const Text = styled("p", {
  fontSize: "16px",
});

const PageHeading = styled("h1", { margin: "auto", textAlign: "center" });

export default App;
