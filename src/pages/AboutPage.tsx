import { styled } from "../theme/stitches.config";

function AboutPage() {
  return (
    <Wrapper className="main-font">
      My name is Emil Jönsson. I am a 23 year old computer science student with
      a big passion for coding and learning new things. I am currently living in
      Lund. I love most types of programming but have a special fondness for web
      development and game development. I also love music and playing the banjo!
      🪕
    </Wrapper>
  );
}

const Wrapper = styled("div", {});

const Text = styled("p", {
  fontSize: "16px",
});

const PageHeading = styled("h1", { margin: "auto", textAlign: "center" });

export default AboutPage;
