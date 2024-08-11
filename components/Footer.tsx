import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-row bg-gray-800 bg-opacity-40 p-6 rounded-xl backdrop-blur-xl drop-shadow-md backdrop-brightness-105 justify-between">
      <div className="flex flex-row w-full">
        <div className="flex flex-col w-1/3">
          <h1 className="uppercase pt-1 pb-1 border border-l-0 border-r-0 border-black">
            Kraftvélar ehf
          </h1>
          <div className="text-xs mt-4">
            <p>Kt. 631209-1730</p>
            <p>Dalvegur 6-8</p>
            <p>201 Kópavogur</p>
            <p>Iceland</p>

            <div className="mt-2">
              <p>Sími / Phone +354 535-3500</p>
              <p>kraftvelar@kraftvelar.is</p>
            </div>
            <div className="mt-2">
              <p>Skrá mig á póstlista</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-1/3">
          <h1 className="uppercase pt-1 pb-1 border border-l-0 border-r-0 border-black">
            Opnunartími / Opening Hours
          </h1>
          <div className="text-xs mt-4">
            <p>Varahlutir / Spare parts:</p>
            <p>Mán - Fös 08:00-17:00</p>
            <p>Verkstæði / Workshops:</p>
            <p>Mán - Fim 08:00-17:00</p>
            <p>Skrifstofa og söludeild / Office and sales:</p>
            <p>Mán - Fös 09:00-17:00</p>
            <p>Kraftvélaleigan / Machine rental:</p>
            <p>Mán - Fös 09:00-17:00</p>
          </div>
        </div>
        <div className="flex flex-col w-1/3">
          <h1 className="uppercase pt-1 pb-1 border border-l-0 border-r-0 border-black">
            Neyðarnúmer / Emergerncy Number
          </h1>
          <div className="text-xs mt-4">
            <p>
              Nánari upplýsingar um þjónustu utan opnunartíma má finna{" "}
              <i>
                <a href="#">hér</a>
              </i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
