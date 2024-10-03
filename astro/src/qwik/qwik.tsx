/** @jsxImportSource @builder.io/qwik */

import { $, component$, useSignal } from "@builder.io/qwik";

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
    <div class="teaser">
        <div 
          class="h-[min(50vh,800px)] font-bold flex flex-col items-center justify-center"
        >
          <h1 class="text-4xl block underline pr-4 mb-4">TEASER</h1>
          <button onClick$={() =>(show.value = !show.value)}>
            {show.value ? 'hide' : 'reveal'}
          </button>
          <div class="relative">
              <div class={" absolute p-2 w-[400px] border border-white transition-all  "+ (
                show.value ? ' translate-x-0 opacity-100 ':' translate-x-5 opacity-0 invisible'
              )}>
                <h3>Pop!</h3>
                <span class="text-xs font-normal leading-none " >
                  {blok.headline}
                </span>
              </div>
            </div>
        </div>

      </div>

  );
});

const NA = component$(({ blok }: { blok: Blok }) => {
  return <p>Component {blok.component} not found</p>;
});

const Grid = component$(({ blok }: { blok: Blok }) => {
  const count = useSignal(0);
  const ref = useSignal<Element>()

  const next = $(() => {
    count.value = (count.value + 1) % 3
    const children = ref.value?.firstElementChild?.children;
    if (!children) return;
    Array.from(children).forEach((el, i) => {
      const activeClass = 'scale-110'
      if (i === count.value) {
        el.scrollIntoView({
          inline: 'center',
          behavior: 'smooth'
        })
        el.classList.add(activeClass)
      } else {
        el.classList.remove(activeClass)
      }
    });
  }
)
  return (
    <>
    <div class=" px-6 max-w-[1400px] mx-auto mb-8  ">
        <span>Carousel item : {count}</span>
        <button
          class=" ml-8 bg-white text-black rounded-md px-2 py-1"
          onClick$={next}
        >
          Next
        </button>
      </div>
      <div
        class=" flex gap-14 px-10 py-8 overflow-x-auto snap-x snap-mandatory scroll-p-20"
        ref={ref}
      >
        <div style={{ display: 'contents'}}>
         {blok.columns.map((col: Blok, i: number) => (
            <div class=" flex-[0_0_80%] snap-center transition-all duration-100 ">
              <Switcher blok={col} />
            </div>
          ))}
        </div>
      </div>

    </>
  );
});

const Feature = component$(({ blok }: { blok: Blok }) => {
  return (
    <div >
        <div class="rounded-xl bg-white feature  text-black p-6 ">
          <h2 class="text-2xl font-bold mb-2">Feature</h2>
          <p class="italic">{blok.name}</p>
        </div>
    </div>
  );
});
