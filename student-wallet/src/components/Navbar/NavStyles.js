import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = styled.header`
  width: 100%;
  height: 10vh;
  z-index: 99;
`;

export const NavInnerContainer = styled.div`
  width: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 10vh;
  max-width: 1300px;
  margin: auto;
`;

export const NavLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLinks = styled.nav`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.h2``;
export const BurgerContainer = styled.h2`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

export const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
`;
