import { styled } from "../theme/stitches.config";
import TextBox from "../Shared/TextBox";
import React from "react";

function ProjectsPage() {
  return (
    <Wrapper className="main-font">
      <PageHeading>My projects</PageHeading>
      <ContentArea>
        <TextBox
          header={"heading"}
          text={
            "textssstextsss textsss textsss textstextssstextsss textsss textssstextssstextsss textsss textssstextssstextsss textsss textssstextssstextsss textsss textssstextssstextsss textsss textssstextssstextsss textsss textssssstextsss textsss textssstextssstextsss textsss textssstextssstextsss textsss textssstextssstextsss textsss textssstextssstextsss textsss textssstextssstextsss textsss textssstextssstextsss textsss textsss"
          }
        />
      </ContentArea>
    </Wrapper>
  );
}

const Wrapper = styled("div", { width: "100%" });
const ContentArea = styled("div", {
  width: "100%",
  display: "grid",
  mxa: "",
});

const PageHeading = styled("h1", {
  margin: "auto",
  textAlign: "center",
  mb: 5,
});

export default ProjectsPage;
