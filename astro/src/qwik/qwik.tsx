/** @jsxImportSource @builder.io/qwik */

import { component$, useSignal, Slot } from "@builder.io/qwik";

type Blok = {
  component: string;
  [field: string]: any;
};

export const Switcher = component$(({ blok }: { blok: Blok }) => {
  let Comp = NA;
  console.log(blok.component, blok);

  if (blok.component === "page") Comp = Page;
  if (blok.component === "teaser") Comp = Teaser;
  if (blok.component === "grid") Comp = Grid;
  if (blok.component === "feature") Comp = Feature;

  return <Comp blok={blok} />;
});

const Page = component$(({ blok }: { blok: Blok }) => {
  return (
    <div class="page">
      {blok.body?.map((bl: Blok) => (
        <Switcher blok={bl} />
      ))}
    </div>
  );
});

const Teaser = component$(({ blok }: { blok: Blok }) => {
  const show = useSignal(false);

  return (
    <div class="teaser h-[50vh] flex justify-center ">
      <h1 class=" mt-20 font-bold flex flex-col items-center">
        <span class=" text-4xl block underline pr-4 mb-4">TEASER</span>
        <div class="flex flex-col items-center">
          <button onClick$={() => (show.value = !show.value)}>
            {show.value ? "reveal" : "hide"}
          </button>
          <div class={show.value ? "block" : "hidden"}>
            <span class=" text-6xl">{blok.headline}</span>
          </div>
        </div>
      </h1>
    </div>
  );
});

const TeaserTwo = component$(({ blok }: { blok: Blok }) => {
  return (
    <div class="teaser h-[50vh] flex justify-center ">
      <h1 class=" mt-20 font-bold flex flex-col items-center">
        <span class=" text-4xl block underline pr-4 mb-4">TEASER</span>
        <Toggle>
          <span class=" text-6xl">{blok.headline}</span>
        </Toggle>
      </h1>
    </div>
  );
});

const Toggle = component$(() => {
  const show = useSignal(false);

  return (
    <>
      <div class="flex flex-col items-center">
        <button onClick$={() => (show.value = !show.value)}>
          {show.value ? "reveal" : "hide"}
        </button>
        <div class={!show.value ? "block" : "hidden"}>
          <Slot />
        </div>
      </div>
    </>
  );
});

const NA = component$(({ blok }: { blok: Blok }) => {
  return <p>Component {blok.component} not found</p>;
});

const Grid = component$(({ blok }: { blok: Blok }) => {
  return (
    <div class=" px-6 grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-6 max-w-[1400px] mx-auto ">
      {blok.columns.map((col: Blok) => (
        <Switcher blok={col} />
      ))}
    </div>
  );
});

const Feature = component$(({ blok }: { blok: Blok }) => {
  return (
    <div className="feature rounded-xl bg-white text-black p-6">
      <h2 className=" text-2xl font-bold mb-2">Feature</h2>
      <p className=" italic">{blok.name}</p>
    </div>
  );
});
