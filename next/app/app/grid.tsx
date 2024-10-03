"use client";

import { Children, useState } from "react";

const Grid = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h2>Grid</h2>
      <div className=" px-6 max-w-[1400px] mx-auto mb-8 ">
        <span>Carousel item : {count}</span>
        <button
          className=" ml-8 bg-white text-black rounded-md px-2 py-1"
          onClick={() => setCount((c) => (c + 1) % 3)}
        >
          Next
        </button>
      </div>
      <div className="px-6 grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-6 max-w-[1400px] mx-auto">
        {Children.map(children, (child, i) => (
          <div
            key={i}
            className={
              " outline outline-4 outline-offset-4 rounded-xl " +
              (count === i ? "outline-red-500 " : "  outline-transparent ")
            }
          >
            {child}
          </div>
        ))}
      </div>
    </section>
  );
};
export default Grid;
