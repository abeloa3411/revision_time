import React from "react";
import { Button } from "../../GlobalStyles";
import {
  HeroBanner,
  HeroContainer,
  HeroContent,
  HeroImg,
  HeroInnerContainer,
  Image,
  HeroInput,
  HeroTitle,
  HeroP,
} from "./HeroStyles";

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <HeroInnerContainer>
          <HeroBanner>
            <HeroImg>
              <Image src={require("../../images/banner.webp")} alt="banner" />
            </HeroImg>
            <HeroContent>
              <HeroTitle>
                Find All The Past Papers Available & Become Exam Ready
              </HeroTitle>
              <HeroP>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquam fugiat sint voluptate.
              </HeroP>
              <div style={{ display: "flex", width: "70%" }}>
                <HeroInput type="text" placeholder="Search for papers..." />
                <Button primary>Search</Button>
              </div>
            </HeroContent>
          </HeroBanner>
        </HeroInnerContainer>
      </HeroContainer>
    </>
  );
};

export default Hero;
