import React from "react";
import {
  InfoContainer,
  InfoInnerContainer,
  InfoItem,
  InfoItems,
} from "./InfoStyles";

const Info = () => {
  return (
    <>
      <InfoContainer>
        <InfoInnerContainer>
          <InfoItems>
            <InfoItem>
              <div>Icon</div>
              <div>The description of the icon</div>
            </InfoItem>
            <InfoItem>
              <div>Icon</div>
              <div>The description of the icon</div>
            </InfoItem>
            <InfoItem>
              <div>Icon</div>
              <div>The description of the icon</div>
            </InfoItem>
          </InfoItems>
        </InfoInnerContainer>
      </InfoContainer>
    </>
  );
};

export default Info;
