import { styled } from "@stitches/react";

function Footer() {
  return (
    <Wrapper>
      <InnerWrapper>
        <Left>
          <LinkItem>Emil Jönsson</LinkItem>
          <LinkItem>Emil Jönsson</LinkItem>
          <LinkItem>Emil Jönsson</LinkItem>
        </Left>
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  margin: "auto",
  backgroundColor: "#a87932",
  padding: "16px 16px",
});

const Image = styled("img", {});

const InnerWrapper = styled("div", {
  display: "flex",
  margin: "auto",
  justifyContent: "space-between",
  maxWidth: "1320px",
});

const LinkItem = styled("a", {
  "&:hover": {
    textDecoration: "underline",
    cursor: "pointer",
  },
  margin: "0px 8px",
});

const Left = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export default Footer;
