import "@/css/globals.css";
import PageSelector from "@/components/PageSelector";

function NotFound() {
  return (
    <div className="flex-1 backdrop-blur-xs md:backdrop-blur-none flex items-center justify-center">
      <div className="md:py-16 md:px-20 flex flex-col gap-2 md:bg-background md:border md:rounded-4xl text-center">
        <span className="text-6xl font-bold">404</span>
        <span className="text-3xl">I couldn&#39;t find the page :(</span>
        <span>Maybe this is what you&#39;re looking for:</span>
        <br className="my-2" />
        <div className="flex items-center justify-center gap-2">
          <PageSelector />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
