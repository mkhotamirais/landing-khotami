import Clock from "./apps/Clock";
import { BackToTopBtn } from "./home/HomeBtn";
import Hero from "./home/Hero";
import Summary from "./home/Summary";

export default function Home() {
  return (
    <section className="bg-zinc-50">
      <div className="relative z-10">
        <Hero />
        <Summary />
        <BackToTopBtn />
      </div>
      <Clock className={"z-0 opacity-[0.03]"} />
    </section>
  );
}
