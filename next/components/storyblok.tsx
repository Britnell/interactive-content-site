import { Fragment, useState } from "react";

export type Blok = {
  component: string;
  [field: string]: any;
};

export type SBComponent = (props: { blok: Blok }) => JSX.Element;

export function ComponentSwitcher({ blok }: { blok: Blok }) {
  let Comp: SBComponent = NA;

  if (blok.component === "text") Comp = Text;
  if (blok.component === "page") Comp = Page;
  if (blok.component === "teaser") Comp = Teaser;
  if (blok.component === "feature") Comp = Feature;
  if (blok.component === "grid") Comp = Grid;
  if (blok.component === "other") Comp = Other;

  return <Comp blok={blok} />;
}

export const Page: SBComponent = ({ blok }: { blok: Blok }) => {

  return (
    <>
      <header className=" flex justify-between px-8 py-2">
        <a href="#" className="text-2xl font-bold">
          Next Pages
        </a>
        <a href="/app" className=" font-mono underline">
          {"->"} App router
        </a>
      </header>
      <main>
        <div className="page">
          {blok.body.map((b: Blok, i: number) => (
            <ComponentSwitcher key={i} blok={b} />
          ))}
        </div>
      </main>
    </>
  );
};


export const Text: SBComponent = ({ blok }: { blok: Blok }) => {
  
  return (
    <>
      <h2>Heading</h2>
      {blok.text.content.map((bl:any,i:number)=>(
        <div key={i}>
          {bl.content.map((text,t)=>(
            <p key={t}>{text.text}</p>
          ))}
        </div>
      ))}
    </>
  )
}

export const Teaser: SBComponent = ({ blok }: { blok: Blok }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="teaser  ">
      <h1 className=" h-[min(50vh,800px)] font-bold flex flex-col items-center justify-center">
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
    </div>
  );
};

export const Feature: SBComponent = ({ blok }: { blok: Blok }) => {
  return (
    <div className="feature rounded-xl bg-white text-black p-6">
      <h2 className=" text-2xl font-bold mb-2">Feature</h2>
      <p className=" italic">{blok.name}</p>
    </div>
  );
};

export const Grid: SBComponent = ({ blok }: { blok: Blok }) => {
  const [count, setCount] = useState(0);

  const adjustmentForProductGrid = (blok:Blok)=>{
    // additional functionality as we are reusing this grid component for many different grids and it needs to do loads of different things
    return  blok?.grid?.type.columns
  }

  const cols = adjustmentForProductGrid(blok)

  return (
    <section className="gridcomp ">
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
      <div className=" px-6 grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-6 max-w-[1400px] mx-auto " style={{columns: `${cols}`}}>
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
    </section>
  );
};

export const NA: SBComponent = ({ blok }) => {
  return <p>Component {blok.component} not found</p>;
};

export const Other: SBComponent = () => {
  return (
    <div className="other">
      <p>Blabla</p>
      <p>
        Other component that is also bundled even though it is not used, because
        the page doesnt know which components will be needed
      </p>
    </div>
  );
};
