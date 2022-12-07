import styled from "styled-components";

export const LetterContainer = styled.section`
  width: 100%;
  margin-bottom: 15vh;
`;
export const InnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3rem 1rem;
`;
export const Header = styled.div`
  padding: 1rem 0;
`;
export const HeaderTitle = styled.h1``;
export const Info = styled.div``;
export const InfoInput = styled.div`
  padding: 1rem 0;
  display: flex;
`;
export const Input = styled.input`
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
export const InfoP = styled.p``;
