import { Link } from "react-router-dom";
import styled from "styled-components";

export const CatContainer = styled.section`
  width: 100%;
`;
export const CatInnerContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;
export const CatHeader = styled.div`
  max-width: 600px;
`;
export const CatTitle = styled.h2``;
export const CatSearchBar = styled.div`
  width: 100%;
  margin-bottom: 5vh;
`;
export const CatInput = styled.input`
  border: none;
  border-bottom: 2px solid #d1d1d4;
  padding: 10px;
  background: none;
  padding-left: 24px;
  font-weight: 700;
  width: 100%;
  transition: 0.2s;
  cursor: pointer;

  &:active,
  &:focus,
  &:hover {
    outline: none;
    border-color: #6a679e;
  }
`;
export const CatBody = styled.div`
  width: 90%;
  margin: 0 auto;
`;
export const CatInnerBody = styled.div`
  display: flex;
`;
export const CatFilter = styled.div`
  width: 25%;
  padding: 2rem;
  margin-top: 12px;
  border-radius: 10px;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
  min-height: 300px;
  max-height: 400px;
`;
export const CatCardsContainer = styled.div`
  width: 100%;
  padding: 1rem;
`;
export const CatCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
`;
export const Card = styled.div`
  max-width: 350px;
  border-radius: 10px;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.3);
  position: relative;
  margin-bottom: 2rem;
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
    background: linear-gradient(90deg, #c7c5f4, #776bcc);
    border-radius: 5px;
    color: white;
    top: -5%;
    right: 5%;
  }
`;
export const DownloadLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
