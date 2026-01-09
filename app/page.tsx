import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Sermons } from "@/components/sections/sermons";
import { Visit } from "@/components/sections/visit";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <About />
      <Sermons />
      <Visit />
      <Footer />
    </main>
  );
}
