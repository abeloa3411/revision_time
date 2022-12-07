import React from "react";
import { Button } from "../../GlobalStyles";
import Rating from "../rating/rating";
import {
  Avatar,
  AvatarContainer,
  ButtonContainer,
  FeedbackActions,
  FeedbackContainer,
  FeedbackImage,
  FeedbackInfo,
  FeedbackP,
  FeedbackTitle,
  Image,
  InnerContainer,
  RatingContainer,
  StudentInfo,
  StudentName,
  Title,
} from "./FeedbackStyles";

const Feedback = () => {
  return (
    <>
      <FeedbackContainer>
        <InnerContainer>
          <FeedbackImage>
            <Image src={require("../../images/banner.webp")} alt="feedback" />
          </FeedbackImage>
          <FeedbackInfo>
            <FeedbackTitle>
              <Title>Student Feedback</Title>
            </FeedbackTitle>
            <StudentInfo>
              <AvatarContainer>
                <Avatar src={require("../../images/banner.webp")} />
              </AvatarContainer>
              <StudentName>John Kinyanjui</StudentName>
            </StudentInfo>
            <FeedbackP>
              The docker build command uses the Dockerfile to build a new
              container image. You might have noticed that Docker downloaded a
              lot of “layers”. This is because you instructed the builder that
              you wanted to start from the node:12-alpine image. But, since you
              didn’t have that on your machine, Docker needed to download the
              image. After Docker downloaded the image, the instructions from
            </FeedbackP>
            <FeedbackActions>
              <RatingContainer>
                <Rating rating={4} />
              </RatingContainer>
              <ButtonContainer>
                <Button>Next</Button>
                <Button>Prev</Button>
              </ButtonContainer>
            </FeedbackActions>
          </FeedbackInfo>
        </InnerContainer>
      </FeedbackContainer>
    </>
  );
};

export default Feedback;
