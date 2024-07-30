"use client";

import Image from "next/image";
import kraftvelarlogo from "../public/images/kraftvelarlogo-vortex.png";
import React, { useState } from "react";
import Link from "next/link";
import { SlArrowUp } from "react-icons/sl";

// Bit long - could be refactored into more arrays but the hierarchy is more visible - maybe better placed in a seperate file
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
  const [subHoveredIndex, setSubHoveredIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setSubHoveredIndex(null);
  };

  const handleSubMouseEnter = (index: number) => {
    setSubHoveredIndex(index);
  };

  const handleSubMouseLeave = () => {
    setSubHoveredIndex(null);
  };

  return (
    <nav className="mt-6 flex flex-row justify-between bg-white bg-opacity-40 p-6 rounded-xl backdrop-blur-xl drop-shadow-md relative backdrop-brightness-105">
      {" "}
      {/* Kind of see through glossy vibes but still a small contrast - allows the moving background to pass through */}
      <div
        className="flex flex-row items-center justify-between w-full relative"
        onMouseLeave={handleMouseLeave}
      >
        <Link href="/">
          <Image
            src={kraftvelarlogo}
            priority={true}
            alt="logo"
            width={200}
            height={100}
            className="drop-shadow-[0_5px_3px_rgba(48,48,48,0.35)] hover:drop-shadow-[0_1px_3px_rgba(255,255,255,0.45)] transition-all duration-150 ease-in-out z-10" // Drop shadow makes the low-res logo pop a bit more. Looks more premium imo.
          />
        </Link>
        <ul className="flex flex-row gap-5">
          {links.map(
            (
              link,
              index // Loops through the links array of objects to generate the nav bar instead of hardcoding everything in. Might end up in same amount of code lines but more organized this way.
            ) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
              >
                <Link
                  className="text-sm font-bold opacity-70 hover:text-[#797B7F] hover:duration-100 hover:ease-in z-10"
                  href={link.src}
                >
                  <div className="flex flex-row items-center gap-1 relative">
                    {link.name} {/* Displays arrow if theres a submenu */}
                    {link.submenu && (
                      <SlArrowUp
                        size={10}
                        className={`transition-transform duration-300 ease-in-out ${
                          hoveredIndex === index ? "rotate-180" : "" // Arrow to the bottom to indicate menu list items appearing below
                        }`}
                      />
                    )}
                  </div>
                </Link>
                {hoveredIndex === index && link.submenu && (
                  <ul className=" flex flex-col absolute left-0 top-full mt-2 p-2 shadow-lg rounded-md bg-white backdrop-blur-3xl z-10">
                    {link.submenu.map((sublink, subindex) => (
                      <li
                        key={subindex}
                        className="relative w-44"
                        onMouseEnter={() => handleSubMouseEnter(subindex)}
                      >
                        <Link
                          className="flex flex-row items-center px-4 py-2 gap-1 hover:bg-gray-200 hover:bg-opacity-50 hover:rounded-md text-sm"
                          href={sublink.src}
                        >
                          {sublink.subname}
                          {sublink.subsubmenu && (
                            <SlArrowUp
                              size={10}
                              className={`ml-2 transition-transform duration-300 ease-in-out ${
                                subHoveredIndex === subindex ? "rotate-90" : "" // Arrow to the right instead of bottom to indicate correct submenu appearing
                              }`}
                            />
                          )}
                        </Link>
                        {subHoveredIndex === subindex && sublink.subsubmenu && (
                          <ul className="absolute left-full top-0 mt-2 p-2 rounded-md shadow-lg bg-white">
                            {sublink.subsubmenu.map(
                              (subsublink, subsuindex) => (
                                <li key={subsuindex}>
                                  <Link
                                    className="w-44 block px-4 py-2 text-sm hover:bg-gray-200 hover:bg-opacity-50 hover:rounded-md"
                                    href={subsublink.src}
                                  >
                                    {subsublink.subsubname}
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          )}
        </ul>
        <span className="bg-[#FDC917] p-2 rounded-md cursor-pointer text-sm text-black hover:opacity-60 opacity-85 font-bold duration-200 ease-in-out">
          <p>Hafa samband</p>
        </span>
      </div>
    </nav>
  );
};

export default Navigation;
