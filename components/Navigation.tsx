import Image from "next/image";
import kraftvelarlogo from "../public/images/kraftvelarlogo-vortex.png";
import React from "react";
import Link from "next/link";

const links = [
  { name: "Sölutorg", src: "#" },
  { name: "Vöruúrval", src: "#" },
  { name: "Kraftvélaleigan", src: "#" },
  { name: "Varahlutaverslun", src: "#" },
  { name: "Verkstæði", src: "#" },
  { name: "Um Kraftvélar", src: "#" },
];

const Navigation = () => {
  return (
    <nav className="mt-6">
      <div className="flex flex-row gap-8 items-center">
        <Link href="/">
          <Image
            src={kraftvelarlogo}
            priority={true}
            alt="logo"
            width={200}
            height={100}
          ></Image>
        </Link>
        <ul className="flex flex-row gap-4">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                className="text-md tracking-tighter font-medium"
                href={link.src}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
