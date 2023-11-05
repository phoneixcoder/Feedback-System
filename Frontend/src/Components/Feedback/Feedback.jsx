import React from "react";

const                       Feedback = ({
  question,
  satisfation,
  disagreement,
  satisfactionEmoji,
  disagreementEmoji,
  customClass = "w-full h-[197px]",
}) => {
  return (
    <>
      <div className={`${customClass} flex flex-col items-center gap-3 rounded-lg bg-white border-[0.4px]`} style={{boxShadow : "0px 4px 6px 0px rgba(0, 0, 0, 0.25)"}}>
        <h2 className="text-md font-medium text-textColor">{question}</h2>
        <div className="flex flex-col w-full mt-3">
          <div className="flex justify-between">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="w-1/9 rounded-lg text-xs">{i}</div>
            ))}
          </div>
          <input type="range" className="w-full mt-1" step={1} min={0} max={8} />
        </div>
        <div className="flex justify-between items-center w-full rounded-lg bg-slate-200">
          <div className="flex gap-3 items-center justify-center bg-slate-200 w-[16%] py-2 rounded-lg">
            <img src={disagreementEmoji} alt="" className="w-4 h-4" />
            <p className="text-textColor opacity-50 text-xs">{disagreement}</p>
          </div>
          <div className="flex gap-3 items-center justify-center bg-slate-200 w-[16%] py-2 rounded-lg">
            <img src={satisfactionEmoji} alt="" className="w-4 h-4" />
            <p className="text-textColor opacity-50 text-xs">{satisfation}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
