import { GrapheneLogo } from "@/components/LogoProvider";
import Link from "next/link";
import fetchCurrentGitCommit from "@/lib/GitCommitFetcher";

const FooterBrand = () => {
  const gitCommit = fetchCurrentGitCommit();

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-start gap-2 cursor-default">
        <GrapheneLogo
          iconSize={30}
          iconClassName={""}
          textClassName={"text-xl font-medium"}
        />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-sm text-muted-foreground">
          This portfolio is open source.
        </span>
        <span className="text-sm text-muted-foreground">
          <Link href={"#"} className="hover:underline">
            main@{gitCommit}
          </Link>
          <span className="ml-1">(Not implemented).</span>
        </span>
      </div>
    </div>
  );
};

export default FooterBrand;
