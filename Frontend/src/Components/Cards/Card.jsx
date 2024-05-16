import React from "react";

const Card = ({ selected, heading, count, handleOnClick, width }) => {
  const activeClass = "border-[#84898E]";
  const inactiveClass = "";

  return (
    <div
      className={`relative ${selected ? activeClass : inactiveClass} ${
        width ? width : "w-[140px]"
      } h-[130px] transition-all duration-1s cursor-pointer flex flex-col rounded-md border bg-[#fff] py-4 px-4 justify-between items-center`}
      onClick={handleOnClick}
    >
      <h1 className={`${selected ? "font-bold" : "font-normal"} text-[15px]`}>
        {heading}
      </h1>
      <p className={`font-bold text-[25px]`}>{count}</p>
      <div
        className={`absolute -bottom-[22px] text-3xl text-[#84898E] left-[20%] transform -translate-x-1/2 ${
          selected ? "block" : "hidden"
        }`}
      >
        ▾
      </div>
    </div>
  );
};

export default Card;
