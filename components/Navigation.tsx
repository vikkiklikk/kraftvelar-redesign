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
      {
        subname: "Notuð tæki",
        src: "#",
        subsubmenu: [
          {
            subsubname: "Notuð landbúnaðartæki",
            src: "#",
          },
          {
            subsubname: "Notaðir lyftarar",
            src: "#",
          },
          {
            subsubname: "Notaðar vinnuvélar",
            src: "#",
          },
          {
            subsubname: "Notaðir aukahlutir",
            src: "#",
          },
        ],
      },
      {
        subname: "Ný tæki á lager",
        src: "#",
        subsubmenu: [
          {
            subsubname: "Ný landbúnaðartæki",
            src: "#",
          },
          {
            subsubname: "Nýjir lyftarar á lager",
            src: "#",
          },
          {
            subsubname: "Nýjar vinnuvélar á lager",
            src: "#",
          },
          {
            subsubname: "Nýjir aukahlutir á lager",
            src: "#",
          },
        ],
      },
      {
        subname: "Notuð tæki",
        src: "#",
      },
      {
        subname: "Gjafavörur",
        src: "#",
      },
    ],
  },
  {
    name: "Vöruúrval",
    src: "#",
    submenu: [
      {
        subname: "Notuð tæki",
        src: "#",
      },
      {
        subname: "Ný tæki á lager",
        src: "#",
      },
      {
        subname: "Notuð tæki",
        src: "#",
      },
      {
        subname: "Ný tæki á lager",
        src: "#",
      },
      {
        subname: "Landbúnaðartæki",
        src: "#",
        subsubmenu: [
          {
            subsubname: "Case IH",
            src: "#",
          },
          {
            subsubname: "New Holland",
            src: "#",
          },
          {
            subsubname: "Pöttinger",
            src: "#",
          },
          {
            subsubname: "Weidemann",
            src: "#",
          },
          {
            subsubname: "Alö Quicke ámoksturstæki",
            src: "#",
          },
          {
            subsubname: "Abbey haugsugur",
            src: "#",
          },
          {
            subsubname: "Kongskilde",
            src: "#",
          },
          {
            subsubname: "Zuidberg",
            src: "#",
          },
        ],
      },
      {
        subname: "Vinnuvélar",
        src: "#",
        subsubmenu: [
          {
            subsubname: "Komatsu vinnuvélar",
            src: "#",
          },
          {
            subsubname: "Sandvik",
            src: "#",
          },
          {
            subsubname: "Dynapac",
            src: "#",
          },
          {
            subsubname: "Rammer vökvafleygar",
            src: "#",
          },
          {
            subsubname: "Miller hraðtengi og skóflur",
            src: "#",
          },
          {
            subsubname: "OSA vökvafleygar",
            src: "#",
          },
        ],
      },
      {
        subname: "Lyftarar",
        src: "#",
        subsubmenu: [
          {
            subsubname: "Toyota lyftarar",
            src: "#",
          },
          {
            subsubname: "Kalmar lyftarar og dráttarbílar",
            src: "#",
          },
          {
            subsubname: "Weidemann skotbómulyftarar",
            src: "#",
          },
        ],
      },
    ],
  },
  {
    name: "Kraftvélaleigan",
    src: "#",
    submenu: [
      {
        subname: "Um Kraftvélaleiguna",
        src: "#",
      },
      {
        subname: "Leigja tæki",
        src: "#",
      },
    ],
  },
  {
    name: "Varahlutaverslun",
    src: "#",
    submenu: [
      {
        subname: "Umboð Kraftvéla",
        src: "#",
      },
    ],
  },
  {
    name: "Verkstæði",
    src: "#",
    submenu: [
      {
        subname: "Um verkstæðið",
        src: "#",
      },
      {
        subname: "Viðurkenndir þjónustuaðilar",
        src: "#",
      },
      {
        subname: "Smurbíll",
        src: "#",
      },
      {
        subname: "KOMATSU Care",
        src: "#",
      },
    ],
  },
  {
    name: "Um Kraftvélar",
    src: "#",
    submenu: [
      {
        subname: "Saga Kraftvéla",
        src: "#",
      },
      {
        subname: "Staðsetning og opnunartími",
        src: "#",
      },
      {
        subname: "Starfsmenn og skipurit",
        src: "#",
      },
      {
        subname: "Merki félagsins",
        src: "#",
      },
      {
        subname: "Persónuverndarstefna",
        src: "#",
      },
      {
        subname: "Skrá mig á póstlista",
        src: "#",
      },
      {
        subname: "Umsókn um reikningsviðskipti",
        src: "#",
      },
      {
        subname: "Sækja um starf",
        src: "#",
      },
    ],
  },
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
