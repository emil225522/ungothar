
import { styled } from "@stitches/react";


function ProjectsPage() {
  return (
    <Wrapper className="main-font">
     Blabla
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  width: "100wv",
  height: "100vh",
  margin: "auto",
  backgroundColor: "#36454F",
});

const Text = styled("p", {
  fontSize: "16px",
});

const PageHeading = styled("h1", { margin: "auto", textAlign: "center" });

export default ProjectsPage;
