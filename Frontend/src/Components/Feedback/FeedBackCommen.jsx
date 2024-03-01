import React from "react";
import study from "../../assests/comment.gif";
const FeedbackComment = ({
  question,
  customClass = "w-full h-[260px]",
  value = 0,
  item,
  handleChangeValue
}) => {

  return (
    <>
      <div
        className={`${customClass} flex flex-col items-center gap-3 rounded-lg bg-white border-[0.4px]`}
        style={{ boxShadow: "0px 2px 2px 0px rgba(0, 0, 0, 0.6)" }}
      >
        <img src={study} alt="study" className="w-[90px] h-[85px] mt-2" />
        <h2 className="text-lg text-textColor relative"><span className="text-md absolute -left-3 text-red-600">*</span>{question}</h2>
        <div className="flex flex-col w-full mt-3 items-center">
          <input
            type="text"
            className="w-[91.5%] h-16 border-b-2 border-gray-200 focus:outline-none"
            placeholder="Type Here"
            value={value}
            onChange={(e) => handleChangeValue(e.target.value, item)}
          />
        </div>

      </div>
    </>
  );
};

export default FeedbackComment;
