import React from "react";
import Button from "./ui/Button";

const Solutorg = () => {
  return (
    <div className="flex flex-col gap-8 bg-[linear-gradient(to_right,rgba(255,255,255,0.9),rgba(200,81,100,0)),url('../public/images/solutorg.png')] p-6 rounded-xl drop-shadow-md bg-bottom -z-10 h-full">
      <div className="tracking-tighter gap-4 text-4xl font-bold text-gray-800 opacity-75">
        <h1>Sölutorg</h1>
      </div>
      <div className="flex flex-col gap-4 backdrop-blur-2xl w-2/3 rounded-xl border p-4 border-gray-500 border-dashed border-opacity-60 shadow-md">
        <p className="text-md tracking-tighter text-gray-900">
          Á sölutorgi Kraftvéla er hægt að skoða ýmislegt sem Kraftvélar hafa
          upp á að bjóða, hvort sem um er að ræða ný tæki, notuð tæki eða
          aukahluti.
        </p>
        <Button ButtonText="Skoða sölutorg" />
      </div>
    </div>
  );
};

export default Solutorg;
