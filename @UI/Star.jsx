import React from "react";
import { useState } from "react";
function Star() {
  const [liked, setLiked] = useState(false);
  const handleClick = () => {
    setLiked(!liked);
  };

  const Wish=()=>{

  }
  if (liked)
    return (
      <i
        className="fa-solid fa-star cursor-pointer text-[#e0de3d] rounded-md"
        onClick={()=>{handleClick(); Wish()} }
      ></i>
    );
  return (
    <i className="fa-regular fa-star cursor-pointer" onClick={handleClick()}></i>
  );
}

export default Star;
