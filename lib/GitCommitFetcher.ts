import { readFileSync } from "fs";
import { join } from "path";

function fetchCurrentGitCommit(): { branch: string; commit: string } {
  const gitPath = join(process.cwd(), ".git");
  const head = readFileSync(join(gitPath, "HEAD"), "utf8")
    .trim()
    .replace("ref: ", "");
  const branch = head.replace("refs/heads/", "");
  const commitPath = readFileSync(join(gitPath, head), "utf8");

  return {
    branch: branch,
    commit: commitPath,
  };
}

export default fetchCurrentGitCommit;
