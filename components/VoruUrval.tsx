import React from "react";
import lyftarar from "../public/images/lyftarar.jpg";
import Image from "next/image";

const VoruUrval = () => {
  return (
    <>
      <div className="bg-[linear-gradient(to_right,rgba(255,255,255,0.9),rgba(200,81,100,0)),url('../public/images/lyftarar.jpg')] bg-cover  bg-left p-6 rounded-xl backdrop-blur-xl drop-shadow-md relative backdrop-brightness-105 w-full h-full">
        {/* <Image  className="" src={lyftarar} alt="mynd af lyftara" width={300} height={300} /> */}
      </div>
    </>
  );
};

export default VoruUrval;
