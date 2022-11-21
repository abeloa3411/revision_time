import styled from "styled-components";

export const FeedbackContainer = styled.section`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 4rem;
`;
export const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const FeedbackImage = styled.div``;
export const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;
export const FeedbackInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  margin-left: 1rem;
`;
export const FeedbackTitle = styled.div`
  position: relative;
`;
export const Title = styled.h1`
  &:after {
    content: "";
    width: 80px;
    height: 5px;
    background: blue;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 8px;
    margin-bottom: -0.7rem;
  }
`;
export const StudentInfo = styled.div``;
export const AvatarContainer = styled.div``;
export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;
export const StudentName = styled.strong``;
export const FeedbackP = styled.div``;
export const FeedbackActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const RatingContainer = styled.div``;
export const Rating = styled.div``;
export const ButtonContainer = styled.div``;
