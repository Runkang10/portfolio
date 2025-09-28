import Hero from "@/app/(home)/components/Hero";

function HomePage() {
  return (
    <div className="flex-1 flex flex-col">
      <div className="m-16 py-16 grid grid-cols-2">
        <div className="flex justify-center items-center">
          <Hero />
        </div>
        <div className="flex justify-center items-center">
          <span className="text-5xl font-medium text-glow">No Image :p</span>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
