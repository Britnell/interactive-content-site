import StoryblokClient from "storyblok-js-client";
import "../styles/globals.css";
import { Blok, ComponentSwitcher } from "@/storyblok";

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

  return {
    props: { story },
  };
};

export default function Homepage({
  story,
}: {
  story: {
    content: Blok;
  };
}) {
  return <ComponentSwitcher blok={story.content} />;
}
