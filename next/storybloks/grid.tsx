"use client";

import React, { type FC } from "react";

const Grid: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // i know this is un-react-like, but the children are rendered by astro inside an <astro-slot>
    const children = ref.current?.firstElementChild?.children;
    if (!children) return;
    Array.from(children).forEach((el, i) => {
      if (i === count) {
        el.scrollIntoView({
          inline: 'center',
          behavior: 'smooth'
        })
        el.className = 'flex-[0_0_80%] snap-center transition-all duration-100 scale-105 shadow-xl '
      } else {
        el.className = 'flex-[0_0_80%] snap-center transition-all duration-100 scale-95'
      }
    });
  }, [count]);

  return (
    <>
      <div className=" px-6 max-w-[1400px] mx-auto mb-8  ">
        <span>Carousel item : {count}</span>
        <button
          className=" ml-8 bg-white text-black rounded-md px-2 py-1"
          onClick={() => setCount((c) => (c + 1) % 3)}
        >
          Next
        </button>
      </div>
      <div
        className=" flex gap-10 px-10 py-8 overflow-x-auto snap-x snap-mandatory scroll-p-20"
        ref={ref}
      >
        {children}
      </div>
    </>
  );
};

export default Grid;
