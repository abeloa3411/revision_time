import React from "react";
import { Button } from "../../GlobalStyles";
import { RatingContainer, Title } from "../courses/CoursesStyles";
import Rating from "../rating/rating";
import {
  Card,
  CardActions,
  CardInfo,
  CatBody,
  CatCards,
  CatCardsContainer,
  CatContainer,
  CatFilter,
  CatHeader,
  CatInnerBody,
  CatInnerContainer,
  CatInput,
  CatSearchBar,
  CatTitle,
  DownloadLink,
} from "./catStyles";

const Cats = () => {
  return (
    <>
      <CatContainer>
        <CatInnerContainer>
          <CatHeader>
            <CatTitle>
              Search For Past Papers Using Unit Code i.e HBT2101
            </CatTitle>
            <CatSearchBar>
              <CatInput type="text" />
            </CatSearchBar>
          </CatHeader>
          <CatBody>
            <CatInnerBody>
              <CatFilter>
                <h1>Filter</h1>
                <Rating />
              </CatFilter>
              <CatCardsContainer>
                <CatCards>
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
                  </Card>{" "}
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
                </CatCards>
              </CatCardsContainer>
            </CatInnerBody>
          </CatBody>
        </CatInnerContainer>
      </CatContainer>
    </>
  );
};

export default Cats;
