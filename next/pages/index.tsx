import { useState } from "react";
import StoryblokClient from "storyblok-js-client";

type Blok = {
  component: string;
  [field: string]: any;
};

type SBComponent = (props: { blok: Blok }) => JSX.Element;

export default function Home({
  story,
}: {
  story: {
    content: Blok;
  };
}) {
  console.log(story);

  return (
    <>
      <header className=" flex justify-between px-8 py-2">
        <a href="#" className="text-2xl font-bold">
          Next Pages
        </a>
        <a href="#" className=" font-mono">
          Profile
        </a>
      </header>
      <main>
        <ComponentSwitcher blok={story.content} />
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const storyblok = new StoryblokClient({
    accessToken: "W1vLyxT5rQ15jBpANjnv0gtt",
  });

  const resp = await storyblok.get("cdn/stories/home", {
    version: "draft",
  });
  const story = resp.data.story;

  if (story.content?.body?.[0]?.headline)
    story.content.body[0].headline =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas blanditiis unde fugiat, mollitia repellendus incidunt nostrum. Magnam, eius, sint est voluptatum non ab quas sapiente hic nam itaque, labore aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas blanditiis unde fugiat, mollitia repellendus incidunt nostrum. Magnam, eius, sint est voluptatum non ab quas sapiente hic nam itaque, labore aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas blanditiis unde fugiat, mollitia repellendus incidunt nostrum. Magnam, eius, sint est voluptatum non ab quas sapiente hic nam itaque, labore aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas blanditiis unde fugiat, mollitia repellendus incidunt nostrum. Magnam, eius, sint est voluptatum non ab quas sapiente hic nam itaque, labore aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas blanditiis unde fugiat, mollitia repellendus incidunt nostrum. Magnam, eius, sint est voluptatum non ab quas sapiente hic nam itaque, labore aspernatur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas blanditiis unde fugiat, mollitia repellendus incidunt nostrum. Magnam, eius, sint est voluptatum non ab quas sapiente hic nam itaque, labore aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas blanditiis unde fugiat, mollitia repellendus incidunt nostrum. Magnam, eius, sint est voluptatum non ab quas sapiente hic nam itaque, labore aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas blanditiis unde fugiat, mollitia repellendus incidunt nostrum. Magnam, eius, sint est voluptatum non ab quas sapiente hic nam itaque, labore aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas blanditiis unde fugiat, mollitia repellendus incidunt nostrum. Magnam, eius, sint est voluptatum non ab quas sapiente hic nam itaque, labore aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas blanditiis unde fugiat, mollitia repellendus incidunt nostrum. Magnam, eius, sint est voluptatum non ab quas sapiente hic nam itaque, labore aspernatur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas blanditiis unde fugiat, mollitia repellendus incidunt nostrum. Magnam, eius, sint est voluptatum non ab quas sapiente hic nam itaque, labore aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas blanditiis unde fugiat, mollitia repellendus incidunt nostrum. Magnam, eius, sint est voluptatum non ab quas sapiente hic nam itaque, labore aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nobis nam reprehenderit excepturi nihil dolore maxime perspiciatis delectus nulla incidunt laudantium rem numquam fugit facere deserunt quas totam id quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nobis nam reprehenderit excepturi nihil dolore maxime perspiciatis delectus nulla incidunt laudantium rem numquam fugit facere deserunt quas totam id quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nobis nam reprehenderit excepturi nihil dolore maxime perspiciatis delectus nulla incidunt laudantium rem numquam fugit facere deserunt quas totam id quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nobis nam reprehenderit excepturi nihil dolore maxime perspiciatis delectus nulla incidunt laudantium rem numquam fugit facere deserunt quas totam id quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nobis nam reprehenderit excepturi nihil dolore maxime perspiciatis delectus nulla incidunt laudantium rem numquam fugit facere deserunt quas totam id quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nobis nam reprehenderit excepturi nihil dolore maxime perspiciatis delectus nulla incidunt laudantium rem numquam fugit facere deserunt quas totam id quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nobis nam reprehenderit excepturi nihil dolore maxime perspiciatis delectus nulla incidunt laudantium rem numquam fugit facere deserunt quas totam id quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nobis nam reprehenderit excepturi nihil dolore maxime perspiciatis delectus nulla incidunt laudantium rem numquam fugit facere deserunt quas totam id quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nobis nam reprehenderit excepturi nihil dolore maxime perspiciatis delectus nulla incidunt laudantium rem numquam fugit facere deserunt quas totam id quaerat? ";

  // story.content?.body?.push({
  //   component: "feature",
  //   name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas blanditiis unde fugiat, mollitia repellendus incidunt nostrum. Magnam, eius, sint est voluptatum non ab quas sapiente hic nam itaque, labore aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas blanditiis unde fugiat, mollitia repellendus incidunt nostrum. Magnam, eius, sint est voluptatum non ab quas sapiente hic nam itaque, labore aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas blanditiis unde fugiat, mollitia repellendus incidunt nostrum. Magnam, eius, sint est voluptatum non ab quas sapiente hic nam itaque, labore aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas blanditiis unde fugiat, mollitia repellendus incidunt nostrum. Magnam, eius, sint est voluptatum non ab quas sapiente hic nam itaque, labore aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas blanditiis unde fugiat, mollitia repellendus incidunt nostrum. Magnam, eius, sint est voluptatum non ab quas sapiente hic nam itaque, labore aspernatur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas blanditiis unde fugiat, mollitia repellendus incidunt nostrum. Magnam, eius, sint est voluptatum non ab quas sapiente hic nam itaque, labore aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas blanditiis unde fugiat, mollitia repellendus incidunt nostrum. Magnam, eius, sint est voluptatum non ab quas sapiente hic nam itaque, labore aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas blanditiis unde fugiat, mollitia repellendus incidunt nostrum. Magnam, eius, sint est voluptatum non ab quas sapiente hic nam itaque, labore aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas blanditiis unde fugiat, mollitia repellendus incidunt nostrum. Magnam, eius, sint est voluptatum non ab quas sapiente hic nam itaque, labore aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas blanditiis unde fugiat, mollitia repellendus incidunt nostrum. Magnam, eius, sint est voluptatum non ab quas sapiente hic nam itaque, labore aspernatur!Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas blanditiis unde fugiat, mollitia repellendus incidunt nostrum. Magnam, eius, sint est voluptatum non ab quas sapiente hic nam itaque, labore aspernatur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas blanditiis unde fugiat, mollitia repellendus incidunt nostrum. Magnam, eius, sint est voluptatum non ab quas sapiente hic nam itaque, labore aspernatur!",
  // });
  return {
    props: { story },
  };
};

function ComponentSwitcher({ blok }: { blok: Blok }) {
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

const Teaser: SBComponent = ({ blok }: { blok: Blok }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="teaser  ">
      <h1 className=" mt-20 font-bold flex flex-col items-center">
        <span className=" text-4xl block underline pr-4 mb-4">TEASER</span>
        {show ? (
          <>
            <button onClick={() => setShow(false)}>hide</button>
            <span className=" text-xs font-normal">{blok.headline}</span>
          </>
        ) : (
          <button onClick={() => setShow(true)}>reveal</button>
        )}
      </h1>
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

const Grid: SBComponent = ({ blok }: { blok: Blok }) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className=" px-6 max-w-[1400px] mx-auto mb-8 ">
        <span>Carousel item : {count}</span>
        <button
          className=" ml-8 bg-white text-black rounded-md px-2 py-1"
          onClick={() => setCount((c) => (c + 1) % 3)}
        >
          Next
        </button>
      </div>
      <div className=" px-6 grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-6 max-w-[1400px] mx-auto ">
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
    </>
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
