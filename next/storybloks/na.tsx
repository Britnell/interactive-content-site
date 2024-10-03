import React, { type FC } from "react";

const Comp:FC<{blok: any}> = ({ blok }) => {
  return (
    <div>
      <p className="font-mono">Component '{blok?.component}' not found</p>
    </div>
  );
};

export default Comp;
