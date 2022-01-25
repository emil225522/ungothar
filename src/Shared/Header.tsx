import logo from "./../assets/images/link.jpg";
import { styled } from "../theme/stitches.config";

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
          <LinkItem href="/projects"> Projects </LinkItem>
          <LinkItem href="/about-me"> About me </LinkItem>
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
  justifyContent: "space-between",
  maxWidth: "1320px",
});

const LinkItem = styled("a", {
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
