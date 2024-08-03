// /types/index.ts
import { StaticImageData } from "next/image";

export interface Company {
  company: string;
  url: StaticImageData;
  alt: string;
}
