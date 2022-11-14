import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
`;
export const FooterInnerContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 1rem;
`;
export const FooterLogo = styled.div``;
export const FooterInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 16px;
  padding: 1rem 0;

  @media screen and (max-width: 580px) {
    grid-template-columns: 1fr;
    grid-row: initial;
  }
`;
export const FooterMenuTitle = styled.h2``;
export const FooterMenu = styled.ul``;
export const FooterMenuLinks = styled.li`
  list-style: none;
`;
export const Logo = styled.h2``;
