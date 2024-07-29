"use client";

import Image from "next/image";
import kraftvelarlogo from "../public/images/kraftvelarlogo-vortex.png";
import React, { useState } from "react";
import Link from "next/link";
import { SlArrowUp } from "react-icons/sl";

const links = [
  {
    name: "Sölutorg",
    src: "#",
    submenu: [
      "Notuð tæki",
      "Ný tæki á lager",
      "Gjafavörur",
      "Rýmingarvara varahlutir",
    ],
  },
  { name: "Vöruúrval", src: "#" },
  { name: "Kraftvélaleigan", src: "#" },
  { name: "Varahlutaverslun", src: "#" },
  { name: "Verkstæði", src: "#" },
  { name: "Um Kraftvélar", src: "#" },
];

const Navigation = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <nav className="mt-6 flex flex-row justify-between">
      <div className="flex flex-row items-center justify-between w-full relative">
        <Link href="/">
          <Image
            src={kraftvelarlogo}
            priority={true}
            alt="logo"
            width={250}
            height={100}
          ></Image>
        </Link>
        <ul className="flex flex-row gap-4">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                className="text-md font-bold opacity-70 hover:text-[#797B7F] hover:duration-300 hover:ease-in-out"
                href={link.src}
                onMouseEnter={() => {
                  handleMouseEnter(index);
                }}
                onMouseLeave={handleMouseLeave}
              >
                <div className="flex flex-row items-center gap-2 relative">
                  {link.name}{" "}
                  <SlArrowUp
                    size={10}
                    className={`transition-transform duration-200 ${
                      hoveredIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <span className="bg-[#FDC917] p-2 rounded-xl cursor-pointer drop-shadow-md hover:drop-shadow-none text-sm text-black opacity-70 font-bold hover:opacity-100 duration-200 ease-in-out">
          <p>Hafa Samband</p>
        </span>
      </div>
    </nav>
  );
};

export default Navigation;
