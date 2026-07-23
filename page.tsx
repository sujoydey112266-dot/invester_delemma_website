import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Mindset from "@/components/Mindset";
import Playbook from "@/components/Playbook";
import Journey from "@/components/Journey";
import Arena from "@/components/Arena";
import Quote from "@/components/Quote";
import Team from "@/components/Team";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="relative overflow-hidden">
        <Hero />
        <Ticker />
        <Mindset />
        <Playbook />
        <Journey />
        <Arena />
        <Quote />
        <Team />
        <Faq />
        <Cta />
      </main>
      <SiteFooter />
    </>
  );
}
