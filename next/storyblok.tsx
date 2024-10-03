import { FC } from "react";
import Page from './storybloks/page'
import Na from './storybloks/na'
import Text from './storybloks/text'
import Teaser from "./storybloks/teaser";
import Feature from "./storybloks/feature";
import GridComp from './storybloks/grid'
import Expensive from './storybloks/expensive'

export type Blok = {
  component: string;
  [field: string]: any;
};

export type SBComponent = (props: { blok: Blok }) => JSX.Element;

export function ComponentSwitcher({ blok }: { blok: Blok }) {
  let Comp: FC<any> = Na;

  if (blok.component === "text") Comp = Text;
  if (blok.component === "page") Comp = Pagewrap;
  if (blok.component === "teaser") Comp = Teaser;
  if (blok.component === "feature") Comp = Feature;
  if (blok.component === "grid") Comp = Grid;
  if (blok.component === "other") Comp = Other;
  if (blok.component === "expensive") Comp = Expensive;

  return <Comp blok={blok} />;
}

 const Pagewrap: FC<{blok:any}> = ({ blok }) => (
    <Page>
        {blok.body.map((bl: Blok) => <ComponentSwitcher key={bl._uid} blok={bl} />)}
    </Page>
 )


export const Grid: SBComponent = ({ blok }: { blok: Blok }) => (
    <GridComp>
      <div style={{ display: 'contents' }}>
        {blok.columns.map((bl: Blok) => <ComponentSwitcher key={bl._uid} blok={bl} />)}
      </div>
    </GridComp>);



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


