"use client";

import React, { type FC } from "react";

const Teaser: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // i know this is un-react-like, but the children are rendered by astro inside an <astro-slot>
    const children = ref.current?.firstElementChild?.children;
    if (!children) return;
    Array.from(children).forEach((el, i) => {
      if (i === count) {
        el.classList.add("border-red-600");
        el.classList.remove("border-transparent");
      } else {
        el.classList.remove("border-red-600");
        el.classList.add("border-transparent");
      }
    });
  }, [count]);

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
      <div
        className="px-6 grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-6 max-w-[1400px] mx-auto"
        ref={ref}
      >
        {children}
      </div>
    </>
  );
};

export default Teaser;
