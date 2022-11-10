import React from "react";
import { Button } from "../../GlobalStyles";
import {
  CoursesBtn,
  CoursesCardsContainer,
  CoursesContainer,
  CoursesHeader,
  CoursesInnerContainer,
  CoursesTitle,
  Title,
  CardsWrapper,
  Card,
  CardImg,
  Image,
  CardInfo,
  Rating,
  CardActions,
  CoursesH1,
} from "./CoursesStyles";

const Courses = () => {
  return (
    <>
      <CoursesContainer>
        <CoursesInnerContainer>
          <CoursesHeader>
            <CoursesTitle>
              <CoursesH1>Our Popular Papers</CoursesH1>
            </CoursesTitle>
            <CoursesBtn>
              <Button primary>More Papers</Button>
            </CoursesBtn>
          </CoursesHeader>
          <CoursesCardsContainer>
            <CardsWrapper>
              <Card>
                <CardImg>
                  <Image src={require("../../images/banner.webp")} alt="card" />
                </CardImg>
                <CardInfo>
                  <Title>Strategic Mngt</Title>
                  <Rating>The Ratind component</Rating>
                  <CardActions>These are the card actions</CardActions>
                </CardInfo>
              </Card>
              <Card>
                <CardImg>
                  <Image src={require("../../images/banner.webp")} alt="card" />
                </CardImg>
                <CardInfo>
                  <Title>Strategic Mngt</Title>
                  <Rating>The Ratind component</Rating>
                  <CardActions>These are the card actions</CardActions>
                </CardInfo>
              </Card>
              <Card>
                <CardImg>
                  <Image src={require("../../images/banner.webp")} alt="card" />
                </CardImg>
                <CardInfo>
                  <Title>Strategic Mngt</Title>
                  <Rating>The Ratind component</Rating>
                  <CardActions>These are the card actions</CardActions>
                </CardInfo>
              </Card>
              <Card>
                <CardImg>
                  <Image src={require("../../images/banner.webp")} alt="card" />
                </CardImg>
                <CardInfo>
                  <Title>Strategic Mngt</Title>
                  <Rating>The Ratind component</Rating>
                  <CardActions>These are the card actions</CardActions>
                </CardInfo>
              </Card>
              <Card>
                <CardImg>
                  <Image src={require("../../images/banner.webp")} alt="card" />
                </CardImg>
                <CardInfo>
                  <Title>Strategic Mngt</Title>
                  <Rating>The Ratind component</Rating>
                  <CardActions>These are the card actions</CardActions>
                </CardInfo>
              </Card>
              <Card>
                <CardImg>
                  <Image src={require("../../images/banner.webp")} alt="card" />
                </CardImg>
                <CardInfo>
                  <Title>Strategic Mngt</Title>
                  <Rating>The Ratind component</Rating>
                  <CardActions>These are the card actions</CardActions>
                </CardInfo>
              </Card>
              <Card>
                <CardImg>
                  <Image src={require("../../images/banner.webp")} alt="card" />
                </CardImg>
                <CardInfo>
                  <Title>Strategic Mngt</Title>
                  <Rating>The Ratind component</Rating>
                  <CardActions>These are the card actions</CardActions>
                </CardInfo>
              </Card>
              <Card>
                <CardImg>
                  <Image src={require("../../images/banner.webp")} alt="card" />
                </CardImg>
                <CardInfo>
                  <Title>Strategic Mngt</Title>
                  <Rating>The Ratind component</Rating>
                  <CardActions>These are the card actions</CardActions>
                </CardInfo>
              </Card>
            </CardsWrapper>
          </CoursesCardsContainer>
        </CoursesInnerContainer>
      </CoursesContainer>
    </>
  );
};

export default Courses;
