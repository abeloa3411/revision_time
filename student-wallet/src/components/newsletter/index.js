import React from "react";
import { Button } from "../../GlobalStyles";
import {
  Header,
  HeaderTitle,
  Info,
  InfoInput,
  InfoP,
  InnerContainer,
  Input,
  LetterContainer,
} from "./NewsletterStyles";

const Newsletter = () => {
  return (
    <>
      <LetterContainer>
        <InnerContainer>
          <Header>
            <HeaderTitle>Subscribe Newsletter</HeaderTitle>
          </Header>
          <Info>
            <InfoP>
              You can subscribe to our monthly newsletter for leatest updates
              and changes on our plartform
            </InfoP>
          </Info>
          <InfoInput>
            <Input type="text" placeholder="Enter your email" />
            <Button
              primary
              style={{ boxShadow: "3px 3px 3px rgba(0,0,0,0.2)" }}
            >
              subscribe
            </Button>
          </InfoInput>
        </InnerContainer>
      </LetterContainer>
    </>
  );
};

export default Newsletter;
