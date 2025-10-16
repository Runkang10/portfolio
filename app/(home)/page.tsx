import Hero from "@/app/(home)/components/Hero";
import TechStack from "@/app/(home)/components/TechStack";
import Projects from "@/app/(home)/components/Projects";

function HomePage() {
  return (
    <div className="flex-1 flex flex-col gap-16 pb-16">
      <Hero />
      <TechStack />
      <Projects />
    </div>
  );
}

export default HomePage;
