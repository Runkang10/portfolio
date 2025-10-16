import { Skeleton } from "@/components/templates/skeleton";
import Link from "next/link";

const Projects = () => {
  return (
    <section className="flex flex-col items-center gap-4">
      <h2
        aria-label="My Projects"
        className="font-medium text-4xl text-center text-glow"
      >
        My Projects
      </h2>
      <div className="w-max grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div className="flex flex-col space-y-3" key={i}>
            <Skeleton className="h-[96px] w-[192px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[192px]" />
              <Skeleton className="h-4 w-[192px]" />
            </div>
          </div>
        ))}
      </div>
      <span className="text-muted-foreground">
        You can find all projects{" "}
        <Link className="text-chart-1 hover:underline" href="/projects">
          here
        </Link>
        .
      </span>
    </section>
  );
};

export default Projects;
