import React from "react";
import { Button } from "../../GlobalStyles";
import {
  BurgerContainer,
  Logo,
  NavContainer,
  NavInnerContainer,
  NavLink,
  NavLinks,
  NavLogo,
} from "./NavStyles";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <NavContainer>
        <NavInnerContainer>
          <NavLogo>
            <Logo>Revision Time</Logo>
          </NavLogo>
          <NavLinks>
            <ul
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <li style={{ listStyle: "none", marginRight: "2rem" }}>
                <NavLink to="/exams">Home</NavLink>
              </li>
              <li style={{ listStyle: "none", marginRight: "2rem" }}>
                <NavLink to="/cats">Exams</NavLink>
              </li>
              <li style={{ listStyle: "none", marginRight: "2rem" }}>
                <NavLink to="/cats">Cats</NavLink>
              </li>
              <li style={{ listStyle: "none", marginRight: "2rem" }}>
                <NavLink to="/cats">About</NavLink>
              </li>
              <li style={{ listStyle: "none" }}>
                <Button>
                  <NavLink to="/login">Login</NavLink>
                </Button>
              </li>
              <li style={{ listStyle: "none", marginRight: "2rem" }}>
                <Button primary>
                  <NavLink to="/login">Get Started</NavLink>
                </Button>
              </li>
            </ul>
          </NavLinks>
          <BurgerContainer>
            <FaBars />
          </BurgerContainer>
        </NavInnerContainer>
      </NavContainer>
    </>
  );
};

export default Navbar;
