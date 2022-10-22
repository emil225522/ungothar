import logo from "../assets/images/link.jpg";
import { styled } from "../theme/stitches.config";
import { NavLink } from "react-router-dom";
import React from "react";

function Header() {
  return (
    <Wrapper>
      <InnerWrapper>
        <Left>
          <LinkItem>
            <NavLink
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textDecoration: "none",
                color: "black",
              }}
              to="/"
            >
              <Image src={logo}></Image>
              <LinkItem>Emil Jönsson</LinkItem>
            </NavLink>
          </LinkItem>
        </Left>

        <Right>
          <LinkItem>
            <NavLink
              style={{ textDecoration: "none", color: "black" }}
              to="/projects"
            >
              Projects
            </NavLink>
          </LinkItem>
          <LinkItem>
            <NavLink
              style={{ textDecoration: "none", color: "black" }}
              to="/about"
            >
              About me
            </NavLink>
          </LinkItem>
        </Right>
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  margin: "auto",
  position: "fixed",
  width: "100%",
  top: 0,
  backgroundColor: "#a87932",
  padding: "16px 0px",
  boxShadow: "0 4px 4px rgba(0, 0, 0, 0.4)",
});

const Image = styled("img", {
  width: "48px",
  height: "48px",
  borderRadius: "20%",
  cursor: "pointer",
});

const InnerWrapper = styled("div", {
  display: "flex",
  margin: "auto",
  px: 4,
  justifyContent: "space-between",
  maxWidth: "1320px",
});

const LinkItem = styled("div", {
  transition: "all 2s",
  "&:hover": {
    textDecoration: "underline",
    cursor: "pointer",
  },
  color: "Black",
  textDecoration: "none",
  margin: "0px 8px",
});

const Right = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const Left = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default Header;
