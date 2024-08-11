import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroContainer from "@/components/ui/Hero";

export const metadata: Metadata = {
  title: "Kraftvélar",
  description: "Kraftvélar vinnuvélasala og leiga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <HeroContainer />
        <div className="flex flex-col w-[1200px] relative gap-4">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
