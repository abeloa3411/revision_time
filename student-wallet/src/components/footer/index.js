import React from "react";
import {
  FooterContainer,
  FooterInfo,
  FooterInnerContainer,
  FooterLogo,
  FooterMenu,
  FooterMenuLinks,
  FooterMenuTitle,
  Logo,
} from "./FooterStyles";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterInnerContainer>
          <FooterInfo>
            <FooterLogo>
              <Logo>Revision Time</Logo>
              <div>privacy policy</div>
            </FooterLogo>
            <FooterMenu>
              <FooterMenuTitle>Home</FooterMenuTitle>
              <FooterMenu>
                <FooterMenuLinks>Home</FooterMenuLinks>
                <FooterMenuLinks>About us</FooterMenuLinks>
                <FooterMenuLinks>Our process</FooterMenuLinks>
                <FooterMenuLinks>Services</FooterMenuLinks>
              </FooterMenu>
            </FooterMenu>
            <FooterMenu>
              <FooterMenuTitle>Latest Papers</FooterMenuTitle>
              <FooterMenu>
                <FooterMenuLinks>BBIT</FooterMenuLinks>
                <FooterMenuLinks>MMPE</FooterMenuLinks>
                <FooterMenuLinks>Education</FooterMenuLinks>
                <FooterMenuLinks>GIS</FooterMenuLinks>
              </FooterMenu>
            </FooterMenu>
            <FooterMenu>
              <FooterMenuTitle>Community</FooterMenuTitle>
              <FooterMenu>
                <FooterMenuLinks>Go premium</FooterMenuLinks>
                <FooterMenuLinks>Team plans</FooterMenuLinks>
                <FooterMenuLinks>Refer a friend</FooterMenuLinks>
                <FooterMenuLinks>Gift Cards</FooterMenuLinks>
              </FooterMenu>
            </FooterMenu>
            <FooterMenu>
              <FooterMenuTitle>Stay conneccted</FooterMenuTitle>
              <FooterMenu>
                <FooterMenuLinks>
                  <FaFacebook />
                </FooterMenuLinks>
                <FooterMenuLinks>
                  <FaTwitter />
                </FooterMenuLinks>
                <FooterMenuLinks>
                  <FaInstagram />
                </FooterMenuLinks>
                <FooterMenuLinks>
                  <FaYoutube />
                </FooterMenuLinks>
              </FooterMenu>
            </FooterMenu>
          </FooterInfo>
        </FooterInnerContainer>
      </FooterContainer>
    </>
  );
};

export default Footer;
