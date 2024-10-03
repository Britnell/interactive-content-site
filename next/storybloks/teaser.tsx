import React from "react";

const Teaser : React.FC<{blok:any}> = ({ blok }) => {
  const [show, setShow] = React.useState(false);

  return (
      <div className="teaser">
        <h1
          className="h-[min(50vh,800px)] font-bold flex flex-col items-center justify-center"
        >
          <span className="text-4xl block underline pr-4 mb-4">TEASER</span>
          <button onClick={() => setShow(s=>!s)}>{show ? 'hide' : 'reveal'}</button>
          <div className="relative">
              <div className={" absolute p-2 w-[400px] border border-white transition-all  "+ (
                show ? ' translate-x-0 opacity-100 ':' translate-x-5 opacity-0 invisible'
              )}>
                <h3>Pop!</h3>
                <span className="text-xs font-normal leading-none " >
                  {blok.headline}
                </span>
              </div>
            </div>
        </h1>
      </div>
  );
};

export default Teaser;
