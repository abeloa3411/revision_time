import React from "react";
import {
  Card,
  CardActions,
  CardInfo,
  DownloadLink,
  ExamBody,
  ExamCards,
  ExamCardsContainer,
  ExamContainer,
  ExamFilter,
  ExamHeader,
  ExamInnerBody,
  ExamInnerContainer,
  ExamTitle,
  SearchBar,
  SearchInput,
} from "./ExamStyles";
import Rating from "../rating/rating";
import { RatingContainer, Title } from "../courses/CoursesStyles";
import { Button } from "../../GlobalStyles";

const Exams = () => {
  return (
    <>
      <ExamContainer>
        <ExamInnerContainer>
          <ExamHeader>
            <ExamTitle>
              Search For Past Papers Using Unit Code i.e HBT2101
            </ExamTitle>
            <SearchBar>
              <SearchInput type="text" />
            </SearchBar>
          </ExamHeader>
          <ExamBody>
            <ExamInnerBody>
              <ExamFilter>
                <h1>Filter</h1>
                <Rating />
              </ExamFilter>
              <ExamCardsContainer>
                <ExamCards>
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
                </ExamCards>
              </ExamCardsContainer>
            </ExamInnerBody>
          </ExamBody>
        </ExamInnerContainer>
      </ExamContainer>
    </>
  );
};

export default Exams;
