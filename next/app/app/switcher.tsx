import { Teaser } from "./teaser";
import Grid from "./grid";

export type Blok = {
  component: string;
  [field: string]: any;
};

export type SBComponent = (props: { blok: Blok }) => JSX.Element;

export function ComponentSwitcher({ blok }: { blok: Blok }) {
  let Comp: SBComponent = NA;

  if (blok.component === "page") Comp = Page;
  if (blok.component === "teaser") Comp = Teaser;
  if (blok.component === "text") Comp = Text;
  if (blok.component === "feature") Comp = Feature;
  if (blok.component === "grid") Comp = GridWrap;
  if (blok.component === "other") Comp = Other;

  return <Comp blok={blok} />;
}


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

const GridWrap: SBComponent = (props: { blok: Blok }) => {
  return (
    <Grid {...props}>
      {props.blok.columns.map((col: Blok, i: number) => (
        <ComponentSwitcher blok={col} key={i} />
      ))}
    </Grid>
  );
};

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
      <h2>Blabla</h2>
      <p>
        Other component that is also bundled even though it is not used, because
        the page doesnt know which components will be needed
      </p>
    </div>
  );
};
