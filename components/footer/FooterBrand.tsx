import { GrapheneLogo } from "@/components/LogoProvider";
import Link from "next/link";
import fetchBranchAndCommit from "@/lib/GitCommitFetcher";

const FooterBrand = () => {
  const branchAndCommit = fetchBranchAndCommit();
  const branch = branchAndCommit.branch;
  const commit = branchAndCommit.commit;
  const repoUrl = "https://github.com/Runkang10/portfolio/tree/" + branch;
  const repoCommitUrl =
    "https://github.com/Runkang10/portfolio/commit/" + commit;

  const links = [
    {
      key: "repo",
      element: (
        <>
          <span>Repository: </span>
          <Link href={repoUrl} className="text-chart-1 hover:underline">
            Runkang10/portfolio
          </Link>
        </>
      ),
    },
    {
      key: "commit",
      element: (
        <>
          <span>Commit: </span>
          <Link href={repoCommitUrl} className="text-chart-1 hover:underline">
            {branch}@{commit.slice(0, 6)}
          </Link>
        </>
      ),
    },
  ];

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
        {links.map((link) => (
          <span className="text-sm text-muted-foreground" key={link.key}>
            {link.element}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FooterBrand;
