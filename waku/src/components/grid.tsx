"use client";

import { useState } from "react";
import { SBComponent, Blok, ComponentSwitcher } from "./switcher";

const Grid: SBComponent = ({ blok }: { blok: Blok }) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" px-6 max-w-[1400px] mx-auto mb-8 ">
        <span>Carousel item : {count}</span>
        <button
          className=" ml-8 bg-white text-black rounded-md px-2 py-1"
          onClick={() => setCount((c) => (c + 1) % 3)}
        >
          Next
        </button>
      </div>
      <div className=" px-6 grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-6 max-w-[1400px] mx-auto ">
        {blok.columns.map((col: Blok, i: number) => (
          <div
            key={i}
            className={
              " border-4 rounded-xl " +
              (count === i ? " border-red-500 " : " border-transparent")
            }
          >
            <ComponentSwitcher blok={col} />
          </div>
        ))}
      </div>
    </>
  );
};
export default Grid;
