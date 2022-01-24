import { styled } from "@stitches/react";
import logo from "./assets/images/link.jpg";

function Header() {
  return (
    <Wrapper>
      <InnerWrapper>
        <Left>
          <a href="/">
            <Image src={logo}></Image>
          </a>

          <LinkItem>Emil Jönsson</LinkItem>
        </Left>

        <Right>
          <LinkItem href="/projects"> project </LinkItem>
          <LinkItem href="/about-me"> about me </LinkItem>
        </Right>
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled("div", {
  margin: "auto",
  backgroundColor: "#1E5F24",
  padding: "16px 16px",
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
