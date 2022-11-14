import styled from "styled-components";

export const BlogContainer = styled.section`
  width: 100%;
`;
export const BlogInnerContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  /* padding: 3rem 0; */
  margin-bottom: 2rem;
`;
export const BlogTitle = styled.div``;
export const Title = styled.h1``;
export const BtnContainer = styled.div``;
export const BlogSlideContainer = styled.div``;
export const BlogSlide = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const BlogCard = styled.div`
  max-width: 350px;
  border-radius: 10px;
  box-shadow: 4px 4px 12px 5px rgba(0, 0, 0, 0.2);
  position: relative;
`;
export const BlogCardImg = styled.div``;
export const Image = styled.img`
  width: 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;
export const BlogCardInfo = styled.section`
  padding: 1rem;
  position: relative;
`;
export const Rating = styled.section`
  padding: 0.5rem 0;
`;
export const CardActions = styled.section``;
