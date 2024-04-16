"use client";

import { useState } from "react";
import { SBComponent, Blok } from "../components/switcher.js";

export const Teaser: SBComponent = ({ blok }: { blok: Blok }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="teaser  ">
      <h1 className=" mt-20 font-bold flex flex-col items-center">
        <span className=" text-4xl block underline pr-4 mb-4">TEASER</span>
        {show ? (
          <>
            <button onClick={() => setShow(false)}>hide</button>
            <span className=" text-xs font-normal">{blok.headline}</span>
          </>
        ) : (
          <button onClick={() => setShow(true)}>reveal</button>
        )}
      </h1>
    </div>
  );
};
