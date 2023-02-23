import React from "react";
import { AiOutlineTag } from "react-icons/ai";

const GenreTag = ({ genre, size }) => {
  return (
    <button className={`genre ${size}-tag`}>
      <AiOutlineTag title="Genre tag" style={{ transform: "rotate(270deg)" }} />
      <span>{genre}</span>
    </button>
  );
};

export default GenreTag;
