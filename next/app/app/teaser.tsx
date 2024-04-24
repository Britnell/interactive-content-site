"use client";

import { useState } from "react";
import { SBComponent, Blok } from "./switcher";

export const Teaser: SBComponent = ({ blok }: { blok: Blok }) => {
  const [show, setShow] = useState(false);
  return (
    <section className="teaser  ">
      <h1 className="  h-[min(50vh,800px)] font-bold flex flex-col items-center justify-center">
        <span className=" text-4xl block underline pr-4 mb-4">TEASER</span>
        {show ? (
          <>
            <button onClick={() => setShow(false)}>hide</button>
            <div>
              <span className=" text-xs font-normal absolute">
                {blok.headline}
              </span>
            </div>
          </>
        ) : (
          <button onClick={() => setShow(true)}>reveal</button>
        )}
      </h1>
    </section>
  );
};
