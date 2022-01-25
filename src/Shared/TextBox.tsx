import { styled } from "../theme/stitches.config";

type PropTypes = {
  header: string;
  text: string;
};
function TextBox({ header, text }: PropTypes) {
  return (
    <Wrapper>
      <Heading>{header} </Heading> <Text> {text}</Text>
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  backgroundColor: "$primary",
  borderRadius: "10px",
  p: 4,
});

const Text = styled("p", {
  fontSize: "16px",
});

const Heading = styled("h1", { margin: "auto", textAlign: "center" });

export default TextBox;
