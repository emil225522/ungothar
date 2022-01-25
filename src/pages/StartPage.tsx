import { styled } from "@stitches/react";

function StartPage() {
  return <Wrapper>{"Blabla"}</Wrapper>;
}

const Wrapper = styled("div", {
  width: "100%",
  height: "100%",
});

const Text = styled("p", {
  fontSize: "16px",
});

const PageHeading = styled("h1", { margin: "auto", textAlign: "center" });

export default StartPage;
