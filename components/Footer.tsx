import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-row bg-gray-800 bg-opacity-40 p-6 rounded-xl backdrop-blur-xl drop-shadow-md backdrop-brightness-105 justify-between">
      <div className="flex flex-row w-full">
        <div className="flex flex-col w-1/3">
          <h1>Kraftvélar efh</h1>
        </div>
        <div className="flex flex-col w-1/3">
          <h1>Opnunartími / Opening Hours</h1>
        </div>
        <div className="flex flex-col w-1/3">
          <h1>Neyðarnúmer / Emergerncy Number</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
