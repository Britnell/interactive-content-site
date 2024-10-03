import React from "react";

const Feature : React.FC<{blok:any}> = ({ blok })=> {
  return (
    <div >
        <div className="rounded-xl bg-white feature  text-black p-6 ">
          <h2 className="text-2xl font-bold mb-2">Feature</h2>
          <p className="italic">{blok.name}</p>
        </div>
    </div>
  );
};

export default Feature;
