import { ComponentsSlideshow } from "./components/landing/components-slideshow";
import Divider from "./components/landing/divider";
import { Features } from "./components/landing/features";
import { Hero } from "./components/landing/hero";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen max-w-7xl flex-col">
      <Divider orientation="vertical" />
      <Divider orientation="vertical" className="right-auto left-0" />
      <Hero />
      <Features />
      <ComponentsSlideshow />
    </main>
  );
}
