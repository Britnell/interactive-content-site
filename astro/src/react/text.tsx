import { type FC } from "react";

const Comp: FC<{blok:any}> = ({ blok }) => {
  return (
    <section>
      <h2>Heading</h2>
      {
        blok.text.content.map((bl: any, i: number) => (
          <div key={i}>
            {bl.content.map((text: any,t:number) => (
              <p key={t}>{text.text}</p>
            ))}
          </div>
        ))
      }
    </section>
  );
};

export default Comp;
