import React from "react";
import {
  InfoContainer,
  InfoInnerContainer,
  InfoItem,
  InfoItems,
} from "./InfoStyles";
import { GiPapers } from "react-icons/gi";
import { FaUniversity } from "react-icons/fa";
import { MdSchool } from "react-icons/md";

const Info = () => {
  return (
    <>
      <InfoContainer>
        <InfoInnerContainer>
          <InfoItems>
            <InfoItem>
              <div style={{ marginRight: "3rem" }}>
                <GiPapers style={{ fontSize: "40px" }} />
              </div>
              <div>Over 1000+ papers available</div>
            </InfoItem>
            <InfoItem>
              <div style={{ marginRight: "3rem" }}>
                <FaUniversity style={{ fontSize: "40px" }} />
              </div>
              <div>Over 20+ courses</div>
            </InfoItem>
            <InfoItem>
              <div style={{ marginRight: "3rem" }}>
                <MdSchool style={{ fontSize: "40px" }} />
              </div>
              <div>Over 2000 students using</div>
            </InfoItem>
          </InfoItems>
        </InfoInnerContainer>
      </InfoContainer>
    </>
  );
};

export default Info;
