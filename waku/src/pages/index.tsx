import StoryblokClient from "storyblok-js-client";
import { ComponentSwitcher } from "../components/switcher.js";

export default async function AppRouter() {
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

  return (
    <>
      <header className=" flex justify-between px-8 py-2 ">
        <a href="#" className=" text-white text-2xl font-bold">
          Next App
        </a>
        <a href="#" className=" text-white  font-mono">
          Profile
        </a>
      </header>
      <main>
        <ComponentSwitcher blok={story.content} />
      </main>
    </>
  );
}
