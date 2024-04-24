import React from "react";

const Teaser = ({ children }: { children: React.ReactNode }) => {
  const [show, setShow] = React.useState(false);

  return (
    <>
      {show ? (
        <>
          <button onClick={() => setShow(false)}>hide</button>
          <div>{children}</div>
        </>
      ) : (
        <button onClick={() => setShow(true)}>reveal</button>
      )}
    </>
  );
};

export default Teaser;
