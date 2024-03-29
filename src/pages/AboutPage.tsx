import React from "react";
import TextBox from "../Shared/TextBox";
import { styled } from "../theme/stitches.config";

function AboutPage() {
  return (
    <Wrapper className="main-font">
      <TextBox
        header="asdasd"
        text="My name is Emil Jönsson. I am a 24 year old front-ender with an education in computer science. I have
      a big passion for coding and learning new things. I am currently living in
      Malmö. I love most types of programming but have a special fondness for web
      development and game development. I also love music and playing the banjo!
      🪕"
      />
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  m: "auto",
});

const Text = styled("p", {
  fontSize: "16px",
});

const PageHeading = styled("h1", {
  margin: "auto",
  textAlign: "center",
});

export default AboutPage;
