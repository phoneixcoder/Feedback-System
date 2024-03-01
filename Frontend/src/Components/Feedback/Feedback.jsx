import React from "react";
import study from "../../assests/study.gif";
const Feedback = ({
  question,
  satisfation,
  disagreement,
  satisfactionEmoji,
  disagreementEmoji,
  customClass = "w-full h-[297px]",
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
        <img src={study} alt="study" className="w-[80px] h-[80px] mt-2" />
        <h2 className="text-lg text-textColor">{question}</h2>
        <div className="flex flex-col w-full mt-3 items-center">
          <div className="flex justify-around w-[100%]">
            {Array.from({ length: 11 }).map((_, i) => (
              <div className="flex flex-col items-center">
                <div key={i} className={`rounded-lg ${i === value ? 'text-2xl font-medium' : 'text-xs'}`}>
                  {i}
                </div>
                <div className={`h-[25px] w-1 border-l-2 border-black opacity-20 ${i === value ? 'border-opacity-50' : ''}`}>
                </div>
              </div>
            ))}
          </div>
          <input
            type="range"
            className="w-[91.5%] custom-range"
            step={1}
            min={0}
            max={10}
            value={value}
            onChange={(e) => handleChangeValue(parseInt(e.target.value, 10), item)}
          />
        </div>
        <div className="flex justify-between items-center w-[93%] rounded-lg bg-slate-200 h-[43px] mt-1">
          <div className="flex gap-3 items-center justify-center bg-slate-200 w-[16%] py-2 rounded-lg">
            <img src={disagreementEmoji} alt="" className="w-6 h-6" />
            <p className="text-textColor opacity-50 text-md font-semibold">{disagreement}</p>
          </div>
          <div className="flex gap-3 items-center justify-center bg-slate-200 w-[16%] py-2 rounded-lg">
            <img src={satisfactionEmoji} alt="" className="w-6 h-6" />
            <p className="text-textColor opacity-50 text-md font-semibold">{satisfation}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
