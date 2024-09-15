import { ComponentSwitcher } from "./switcher";
import page from '@/components/page.json'

export default async function AppRouter() {
  const story = page

  return (
    <>
      <header className=" flex justify-between px-8 py-2 ">
        <a href="#" className=" text-white text-2xl font-bold">
          Next App
        </a>
        <a href="/" className=" font-mono underline">
          {"->"} Page router
        </a>
      </header>
      <ComponentSwitcher blok={story} />
    </>
  );
}
