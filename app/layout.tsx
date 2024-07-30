import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroContainer from "@/components/ui/Hero";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <HeroContainer />
        <div className="flex flex-col min-h-screen w-[1200px] relative gap-4">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
