import React from "react";
import { AiOutlineTag } from "react-icons/ai";

const GenreTag = ({ genre }) => {
  return (
    <button className="genre">
      <AiOutlineTag style={{ transform: "rotate(270deg)" }} />
      <span>{genre}</span>
    </button>
  );
};

export default GenreTag;
