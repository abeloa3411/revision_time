import styled from "styled-components";

export const FindContainer = styled.section`
  width: 100%;
`;
export const FindInnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const FindInfo = styled.div``;

export const FindTitle = styled.div`
  position: relative;
  margin: 1rem 0;
`;

export const FindH1 = styled.h1`
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
export const FIndP = styled.p``;

export const FindDescription = styled.div`
  margin-top: 2rem;
  line-height: 1.6;
`;
export const ButtonContainer = styled.div`
  margin-top: 3rem;
`;
export const FindImage = styled.div``;
export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  background-position: center;
  border-radius: 5px;
`;
