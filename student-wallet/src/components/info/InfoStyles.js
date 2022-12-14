import styled from "styled-components";

export const InfoContainer = styled.section`
  width: 100%;
`;

export const InfoInnerContainer = styled.div`
  max-width: 1250px;
  margin: auto;
  padding: 3rem 2rem;
`;

export const InfoItems = styled.div`
  display: grid;
  margin-left: 2rem;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoItem = styled.div`
  display: flex;
`;
