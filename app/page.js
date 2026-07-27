import Navbar from "@/components/Navbar";
import DiveGauge from "@/components/DiveGauge";
import Hero from "@/components/Hero";
import Zones from "@/components/Zones";
import Creatures from "@/components/Creatures";
import Stats from "@/components/Stats";
import Logs from "@/components/Logs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <DiveGauge />
      <main>
        <Hero />
        <Zones />
        <Creatures />
        <Stats />
        <Logs />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
