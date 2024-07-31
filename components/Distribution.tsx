import React from "react";
import Image from "next/image";
import komatsulogo from "../public/images/Komatsu-Logo.png";

const Distribution = () => {
  return (
    <div>
      <Image
        src={komatsulogo}
        width={100}
        height={100}
        alt="komatsu logo"
      ></Image>
    </div>
  );
};

export default Distribution;
