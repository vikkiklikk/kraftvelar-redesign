import React from "react";

interface ButtonProps {
  ButtonText: string;
}

const button = ({ ButtonText }: ButtonProps) => {
  return (
    <div className="flex flex-row">
      <span className="bg-[#FDC917] p-2 rounded-md cursor-pointer text-sm text-black hover:opacity-60 opacity-85 font-bold duration-200 ease-in-out">
        <p>{ButtonText}</p>
      </span>
    </div>
  );
};

export default button;
