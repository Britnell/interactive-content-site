/** @jsxImportSource @builder.io/qwik */

import { component$, useSignal } from "@builder.io/qwik";

type Blok = {
  component: string;
  [field: string]: any;
};

export const Switcher = component$(({ blok }: { blok: Blok }) => {
  let Comp = NA;

  if (blok.component === "page") Comp = Page;
  if (blok.component === "teaser") Comp = Teaser;
  if (blok.component === "grid") Comp = Grid;
  if (blok.component === "feature") Comp = Feature;

  return <Comp blok={blok} />;
});

const Page = component$(({ blok }: { blok: Blok }) => {
  console.log(" Rendering Component - I ONLY HAPPEN ON SERVER");

  return (
    <>
      <header class="flex justify-between px-8 py-2">
        <a href="/" class="text-2xl font-bold">
          Qwik Demo
        </a>
        <a href="#" class="font-mono">
          Profile
        </a>
      </header>
      <main>
        <div class="page">
          {blok.body?.map((bl: Blok) => (
            <Switcher blok={bl} />
          ))}
        </div>
        <p>Qwik in astro</p>
      </main>
    </>
  );
});

const Teaser = component$(({ blok }: { blok: Blok }) => {
  const show = useSignal(false);

  return (
    <div class="teaser ">
      <h1 class="h-[min(50vh,800px)] font-bold flex flex-col items-center justify-center">
        <span class=" text-4xl block underline pr-4 mb-4">TEASER</span>
        <div class="flex flex-col items-center">
          <button onClick$={() => (show.value = !show.value)}>
            {show.value ? "hide" : "reveal"}
          </button>
          <div class={show.value ? "block" : "hidden"}>
            <span class=" text-xs font-normal leading-none absolute">
              {blok.headline}
            </span>
          </div>
        </div>
      </h1>
    </div>
  );
});

const NA = component$(({ blok }: { blok: Blok }) => {
  return <p>Component {blok.component} not found</p>;
});

const Grid = component$(({ blok }: { blok: Blok }) => {
  const count = useSignal(0);

  return (
    <>
      <div class=" px-6 max-w-[1400px] mx-auto mb-8 ">
        <span>Carousel item : {count.value}</span>
        <button
          class=" ml-8 bg-white text-black rounded-md px-2 py-1"
          onClick$={() => (count.value = (count.value + 1) % 3)}
        >
          Next
        </button>
      </div>
      <div
        class={` px-6 grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-6 max-w-[1400px] mx-auto carousel red-child-${count.value} `}
      >
        {/* re-render boundary is here, we have to use classes on the parent, instead of dynamically applying styles to the array of children (as this requires the component jsx code) */}
        {blok.columns.map((col: Blok, i: number) => (
          <div
            class={
              " border-4 rounded-xl border-transparent "
              // +(count.value === i ? "x" : "o")
            }
          >
            <Switcher blok={col} />
          </div>
        ))}
      </div>
    </>
  );
});

const Feature = component$(({ blok }: { blok: Blok }) => {
  return (
    <div class="feature rounded-xl bg-white text-black p-6">
      <h2 class=" text-2xl font-bold mb-2">Feature</h2>
      <p class=" italic">{blok.name}</p>
    </div>
  );
});
