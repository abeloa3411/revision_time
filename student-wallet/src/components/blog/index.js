import React from "react";
import { Button } from "../../GlobalStyles";
import {
  BlogCard,
  BlogCardImg,
  BlogCardInfo,
  BlogContainer,
  BlogInnerContainer,
  BlogSlide,
  BlogSlideContainer,
  BlogTitle,
  BtnContainer,
  CardActions,
  Image,
  Rating,
  Title,
} from "./BlogStyles";

const BlogSection = () => {
  return (
    <>
      <BlogContainer>
        <BlogInnerContainer>
          <BlogTitle>
            <Title>Our latest blog</Title>
            <BtnContainer>
              <Button>prev</Button>
              <Button>next</Button>
            </BtnContainer>
          </BlogTitle>
          <BlogSlideContainer>
            <BlogSlide>
              <BlogCard>
                <BlogCardImg>
                  <Image src={require("../../images/banner.webp")} alt="card" />
                </BlogCardImg>
                <BlogCardInfo>
                  <Title>Strategic Mngt</Title>
                  <Rating>The Rating component</Rating>
                  <CardActions>These are the card actions</CardActions>
                </BlogCardInfo>
              </BlogCard>
              <BlogCard>
                <BlogCardImg>
                  <Image src={require("../../images/banner.webp")} alt="card" />
                </BlogCardImg>
                <BlogCardInfo>
                  <Title>Strategic Mngt</Title>
                  <Rating>The Rating component</Rating>
                  <CardActions>These are the card actions</CardActions>
                </BlogCardInfo>
              </BlogCard>
              <BlogCard>
                <BlogCardImg>
                  <Image src={require("../../images/banner.webp")} alt="card" />
                </BlogCardImg>
                <BlogCardInfo>
                  <Title>Strategic Mngt</Title>
                  <Rating>The Rating component</Rating>
                  <CardActions>These are the card actions</CardActions>
                </BlogCardInfo>
              </BlogCard>
            </BlogSlide>
          </BlogSlideContainer>
        </BlogInnerContainer>
      </BlogContainer>
    </>
  );
};

export default BlogSection;
