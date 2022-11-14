import styled from "styled-components";

export const CoursesContainer = styled.section`
  width: 100%;
`;
export const CoursesInnerContainer = styled.div`
  max-width: 1250px;
  margin: auto;
  padding: 0 2rem;
`;
export const CoursesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 3rem;
`;
export const CoursesTitle = styled.div`
  position: relative;
  height: 6vh;
`;
export const CoursesH1 = styled.h1`
  text-align: center;

  &:after {
    content: "";
    width: 80px;
    height: 5px;
    background: blue;
    position: absolute;
    bottom: 0;
    left: 0;
    margin-top: 1rem;
    border-radius: 8px;
  }

  @media screen and (max-width: 580px) {
    font-size: 15px;
    margin-bottom: -10%;
  }
`;
export const Title = styled.h1`
  font-size: 20px;
  padding: 0.5rem 0;
`;

export const CoursesBtn = styled.div``;
export const CoursesCardsContainer = styled.div`
  width: 100%;
`;
export const CardsWrapper = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 4rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;
export const Card = styled.div`
  max-width: 350px;
  border-radius: 10px;
  box-shadow: 4px 4px 12px 5px rgba(0, 0, 0, 0.2);
  position: relative;
`;
export const CardImg = styled.div``;
export const Image = styled.img`
  width: 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;
export const Rating = styled.div`
  padding: 0.5rem 0;
`;
export const CardActions = styled.div``;
export const CardInfo = styled.div`
  padding: 1rem;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    width: 40px;
    height: 20px;
    background: blue;
    border-radius: 5px;
    color: white;
    top: -10%;
    right: 5%;
  }
`;
