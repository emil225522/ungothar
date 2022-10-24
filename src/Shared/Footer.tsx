import { styled } from "../theme/stitches.config";
import React from "react";

function Footer() {
  return (
    <Wrapper>
      <InnerWrapper>
        <Column>
          <LinkItem>Emil Jönsson</LinkItem>
          <LinkItem>Emil Jönsson</LinkItem>
          <LinkItem>Emil Jönsson</LinkItem>
        </Column>
        <Column>
          <LinkItem>Emil Jönsson</LinkItem>
          <LinkItem>Emil Jönsson</LinkItem>
          <LinkItem>Emil Jönsson</LinkItem>
        </Column>
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  margin: "auto",
  w: "100%",
  display: "fixed",
  backgroundColor: "#a87932",
  py: 4,
  position: "relative",
});

const Image = styled("img", {});

const InnerWrapper = styled("div", {
  display: "flex",
  margin: "auto",
  maxWidth: "1320px",
  px: 8,
  justifyContent: "space-between",
});

const LinkItem = styled("a", {
  "&:hover": {
    textDecoration: "underline",
    cursor: "pointer",
  },
  margin: "0px 8px",
});

const Column = styled("div", {
  display: "flex",
  flexDirection: "column",
});

export default Footer;
