import { Teaser } from "./teaser.js";
import Grid from "./grid.js";

export type Blok = {
  component: string;
  [field: string]: any;
};

export type SBComponent = (props: { blok: Blok }) => JSX.Element;

export function ComponentSwitcher({ blok }: { blok: Blok }) {
  let Comp: SBComponent = NA;

  if (blok.component === "page") Comp = Page;
  if (blok.component === "teaser") Comp = Teaser;
  if (blok.component === "feature") Comp = Feature;
  if (blok.component === "grid") Comp = Grid;
  if (blok.component === "other") Comp = Other;

  return <Comp blok={blok} />;
}

const Page: SBComponent = ({ blok }: { blok: Blok }) => {
  return (
    <div className="page">
      {blok.body.map((b: Blok, i: number) => (
        <ComponentSwitcher key={i} blok={b} />
      ))}
    </div>
  );
};

const Feature: SBComponent = ({ blok }: { blok: Blok }) => {
  return (
    <div className="feature rounded-xl bg-white text-black p-6">
      <h2 className=" text-2xl font-bold mb-2">Feature</h2>
      <p className=" italic">{blok.name}</p>
    </div>
  );
};

const NA: SBComponent = ({ blok }) => {
  return <p>Component {blok.component} not found</p>;
};

const Other: SBComponent = () => {
  return (
    <div className="other">
      <p>
        Other component that is also bundled even though it is not used, because
        the page doesnt know which components will be needed
      </p>
    </div>
  );
};
