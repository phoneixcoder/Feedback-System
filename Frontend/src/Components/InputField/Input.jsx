import React from "react";

const InputField = ({
  type,
  value,
  onChange,
  name,
  error,
  disable = false,
  cls,
}) => {
  return (
    <>
      <div
        className={`flex border gap-3 border-[#EEEEEE] bg-[#FFFFFF] rounded-[12px] w-[80%] py-[8px] px-[20px] h-10 items-center ${cls}`}
      >
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="text-textColor opacity-60 bg-[#FFFFFF] border-0 focus:outline-none w-full appearance-none"
          disabled={disable}
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </>
  );
};

export default InputField;
