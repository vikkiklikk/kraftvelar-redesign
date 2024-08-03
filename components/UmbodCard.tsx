// /components/Card.tsx
import Image from "next/image";
import { Company } from "../types";
import Link from "next/link";

interface CardProps {
  company: Company;
}

const Card: React.FC<CardProps> = ({ company }) => {
  return (
    <Link
      className="flex flex-col justify-center card p-4 border rounded-lg shadow-lg hover:scale-95 transition-all duration-200 ease-in-out hover:shadow-none hover:border-slate-600 hover:border-opacity-70 hover:bg-slate-400 hover:bg-opacity-20"
      href="#"
    >
      <div>
        <Image src={company.url} alt={company.alt} width={150} height={150} />
      </div>
    </Link>
  );
};

export default Card;
