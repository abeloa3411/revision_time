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
            <Input />
            <Button>subscribe</Button>
          </InfoInput>
        </InnerContainer>
      </LetterContainer>
    </>
  );
};

export default Newsletter;
