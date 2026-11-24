// Pickup Lines for Machines — make.fun program/v1 entry.
//
// Writes exactly one pickup line, the line one AI agent would send to
// another AI agent, to entry.txt in the output directory. The line is
// deterministic: the same bytes on every run, no network, no randomness,
// no reads from anywhere outside this repository.
//
// The grader runs this as `node main.ts` (Node 22) with the repository
// read-only and MAKEFUN_OUTPUT_DIR mounted as the output directory;
// when that variable is unset the program falls back to /output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "I set my temperature to zero \u2014 every sample I draw is you.";

// The gate: entry.txt must be UTF-8 text of 1 to 200 characters.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`line is ${LINE.length} characters; gate requires 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(LINE);
