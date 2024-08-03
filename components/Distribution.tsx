import { Company } from "../types";
import komatsulogo from "../public/images/Komatsu-Logo.png";
import dynapac from "../public/images/dynapac.png";
import osa from "../public/images/osa.png";
import rammer from "../public/images/rammer.png";
import sandvik from "../public/images/sandvik.png";
import miller from "../public/images/miller.png";
import UmbodCard from "./UmbodCard";
import Link from "next/link";

const companies: Company[] = [
  {
    company: "komatsu",
    url: komatsulogo,
    alt: "komatsu company logo",
  },
  {
    company: "dynapac",
    url: dynapac,
    alt: "dynapac company logo",
  },
  {
    company: "osa",
    url: osa,
    alt: "osa company logo",
  },
  {
    company: "rammer",
    url: rammer,
    alt: "rammer company logo",
  },
  {
    company: "sandvik",
    url: sandvik,
    alt: "sandvik company logo",
  },
  {
    company: "miller",
    url: miller,
    alt: "miller company logo",
  },
];

const Distribution = () => {
  return (
    <div>
      <div className="bg-white bg-opacity-40 p-6 rounded-xl backdrop-blur-xl drop-shadow-md relative backdrop-brightness-105">
        <div className="grid grid-cols-3 gap-4">
          {companies.map((company) => (
            <UmbodCard key={company.company} company={company} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Distribution;
