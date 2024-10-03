import React, { type FC } from "react";

const Comp:FC<{children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <header className="flex justify-between px-8 py-2">
        <a href="/" className="text-2xl font-bold"> Content Site Demo</a>
        <a href="#" className="font-mono"> Profile</a>
      </header>
      <main>
      <div className="page">
        {children}
      </div>
      </main>
      <footer>
        <p>This is using Astro components w React islands</p>
      </footer>
    </>
  );
};

export default Comp;
