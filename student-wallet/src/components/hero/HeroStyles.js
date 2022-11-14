import styled from "styled-components";

export const HeroContainer = styled.section``;
export const HeroInnerContainer = styled.div`
  padding: 0 2rem;
  max-width: 1250px;
  margin: auto;
`;
export const HeroBanner = styled.div`
  position: relative;
`;
export const HeroImg = styled.div``;
export const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  height: 90vh;
  object-fit: cover;
`;
export const HeroContent = styled.div`
  position: absolute;
  bottom: 10%;
  left: 10%;
  transform: translate(-10%, -10%);
  width: 50%;
`;

export const HeroInput = styled.input`
  outline: none;
  padding: 10px 20px;
  border: none;
  color: #000;
  border-radius: 4px;
  background: #f0f0f0;
`;

export const HeroTitle = styled.h1`
  color: white;
  font-size: 45px;
  margin-bottom: 2rem;

  @media screen and (max-width: 580px) {
    font-size: 30px;
  }
`;

export const HeroP = styled.p`
  color: white;
  margin-bottom: 1rem;
`;
