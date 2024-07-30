import React from "react";

const MainSection = () => {
  return (
    <div className="flex flex-col gap-4 bg-[linear-gradient(to_right,rgba(255,255,255,0.9),rgba(200,81,100,0)),url('../public/images/grafa.jpg')] p-6 rounded-xl drop-shadow-md bg-bottom -z-10">
      <div className="flex flex-col tracking-tighter gap-4 text-7xl font-bold">
        {" "}
        {/* bg-gradient-to-tr from-amber-300 to-black */}
        <h1>Fagmennska</h1>
        <h1>Ábyrgð</h1>
        <h1>Traust</h1>
      </div>
      <div className=" backdrop-blur-2xl w-1/2 rounded-xl border p-4 border-gray-500 border-dashed border-opacity-60">
        <p className="text-lg tracking-normal">
          Við leitumst til þess að vera leiðandi í sölu, leigu og þjónustu á
          hágæða tækjum og búnaði fyrir jarðvinnumarkað, vörumeðhöndlun og
          landbúnað á Íslandi og geta veitt viðskiptavinum okkar heildarlausn.
        </p>
      </div>
    </div>
  );
};

export default MainSection;
