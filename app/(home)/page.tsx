import Hero from "@/app/(home)/components/Hero";
import TechStack from "@/app/(home)/components/TechStack";

function HomePage() {
  return (
    <div className="flex-1 flex flex-col pb-8">
      <Hero />
      <br className="my-4" />
      <TechStack />
    </div>
  );
}

export default HomePage;
