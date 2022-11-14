import React from "react";
import {
  ButtonContainer,
  FindContainer,
  FindDescription,
  FindH1,
  FindImage,
  FindInfo,
  FindInnerContainer,
  FIndP,
  FindTitle,
  Image,
} from "./FindStyles";
import { Button } from "../../GlobalStyles";

const Find = () => {
  return (
    <>
      <FindContainer>
        <FindInnerContainer>
          <FindInfo>
            <FindTitle>
              <FindH1>
                Find Cat's and Exams of the course that you are taking
              </FindH1>
            </FindTitle>
            <FindDescription>
              <FIndP>
                Here you find all the past papers for all the schools that are
                in the school that range from three years back from the current
                semester. You can also fin past papers of cats that have been
                done. This makes you be exam ready and have a hint of the
                questions being tasted
              </FIndP>
            </FindDescription>
            <ButtonContainer>
              <Button primary>Get started</Button>
            </ButtonContainer>
          </FindInfo>
          <FindImage>
            <Image src={require("../../images/banner.webp")} />
          </FindImage>
        </FindInnerContainer>
      </FindContainer>
    </>
  );
};

export default Find;
