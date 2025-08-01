import React from "react";
import { useState } from "react";
function Heart() {
  const [liked, setLiked] = useState(false);
  const handleClick = () => {
    setLiked(!liked);
  };
  if (liked)
    return (
      <i
        className="fa-solid fa-heart cursor-pointer text-[#FF5757] rounded-md"
        onClick={handleClick}
      ></i>
    );
  return (
    <i className="fa-regular fa-heart cursor-pointer" onClick={handleClick}></i>
  );
}

export default Heart;
