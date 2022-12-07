import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, onClick }) => {
  return (
    <div>
      {[...Array(5)].map((_, i) => {
        return (
          <span
            key={i}
            onclick={() => {
              onClick(i);
            }}
          >
            {rating > i ? <AiFillStar /> : <AiOutlineStar />}
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
