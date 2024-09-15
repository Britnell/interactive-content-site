import "../styles/globals.css";
import { Blok, ComponentSwitcher } from "@/components/storyblok";
import page from '@/components/page.json'

export const getStaticProps = async () => {
  
  return {
    props: { story: page },
  };
};

export default function Homepage({
  story,
}: {
  story: {
    component:string;
    content: Blok;
  };
}) {

  
  return <ComponentSwitcher blok={story} />;
}
