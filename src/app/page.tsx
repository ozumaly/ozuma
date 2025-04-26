import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import TechStack from "@/components/sections/TechStack";
import WorkProcess from "@/components/sections/WorkProcess";
import HireMe from "@/components/sections/HireMe";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TechStack />
      <WorkProcess />
      <Services />
      <HireMe />
    </main>
  );
}
