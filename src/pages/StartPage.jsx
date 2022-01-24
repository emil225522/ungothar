import { styled } from "@stitches/react";

function StartPage() {
  return <Wrapper>{"Blabla"}</Wrapper>;
}

const Wrapper = styled("div", {
  color: "White",
  backgroundColor: "#36454F",
});

const Text = styled("p", {
  fontSize: "16px",
});

const PageHeading = styled("h1", { margin: "auto", textAlign: "center" });

export default StartPage;
