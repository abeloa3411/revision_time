import styled from "styled-components";

export const FeedbackContainer = styled.section`
  width: 100%;
`;
export const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const FeedbackImage = styled.div``;
export const Image = styled.img`
  width: 100%;
`;
export const FeedbackInfo = styled.div``;
export const FeedbackTitle = styled.div``;
export const Title = styled.h1``;
export const StudentInfo = styled.div``;
export const AvatarContainer = styled.div``;
export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;
export const StudentName = styled.div``;
export const FeedbackP = styled.div``;
export const FeedbackActions = styled.div``;
export const RatingContainer = styled.div``;
export const Rating = styled.div``;
export const ButtonContainer = styled.div``;
