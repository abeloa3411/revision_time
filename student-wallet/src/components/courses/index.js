import axios from "axios";
import React from "react";
import { Button } from "../../GlobalStyles";
import Rating from "../rating/rating";
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
  CardInfo,
  RatingContainer,
  CardActions,
  CoursesH1,
  DownloadLink,
} from "./CoursesStyles";

const Courses = () => {
  const download = async () => {
    await axios.get("http://localhost:5000/api/exams");
    console.log("clicked");
  };
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
                <CardInfo>
                  <Title>Strategic Mngt</Title>
                  <CardActions>
                    <h3>HBT 2101</h3>
                  </CardActions>
                  <RatingContainer>
                    <Rating rating={5} />
                  </RatingContainer>
                  <Button primary onClick={download}>
                    Download
                  </Button>
                </CardInfo>
              </Card>
              <Card>
                <CardInfo>
                  <Title>Strategic Mngt</Title>
                  <CardActions>
                    <h3>HBT 2101</h3>
                  </CardActions>
                  <RatingContainer>
                    <Rating rating={2} />
                  </RatingContainer>
                  <Button primary>
                    <DownloadLink to="/download">Download</DownloadLink>
                  </Button>
                </CardInfo>
              </Card>
              <Card>
                <CardInfo>
                  <Title>Strategic Mngt</Title>
                  <CardActions>
                    <h3>HBT 2101</h3>
                  </CardActions>
                  <RatingContainer>
                    <Rating rating={4} />
                  </RatingContainer>
                  <Button primary>
                    <DownloadLink to="/download">Download</DownloadLink>
                  </Button>
                </CardInfo>
              </Card>
              <Card>
                <CardInfo>
                  <Title>Strategic Mngt</Title>
                  <CardActions>
                    <h3>HBT 2101</h3>
                  </CardActions>
                  <RatingContainer>
                    <Rating rating={3} />
                  </RatingContainer>
                  <Button primary>
                    <DownloadLink to="/download">Download</DownloadLink>
                  </Button>
                </CardInfo>
              </Card>
              <Card>
                <CardInfo>
                  <Title>Strategic Mngt</Title>
                  <CardActions>
                    <h3>HBT 2101</h3>
                  </CardActions>
                  <RatingContainer>
                    <Rating rating={4} />
                  </RatingContainer>
                  <Button primary>
                    <DownloadLink to="/download">Download</DownloadLink>
                  </Button>
                </CardInfo>
              </Card>
              <Card>
                <CardInfo>
                  <Title>Strategic Mngt</Title>
                  <CardActions>
                    <h3>HBT 2101</h3>
                  </CardActions>
                  <RatingContainer>
                    <Rating rating={3} />
                  </RatingContainer>
                  <Button primary>
                    <DownloadLink to="/download">Download</DownloadLink>
                  </Button>
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
