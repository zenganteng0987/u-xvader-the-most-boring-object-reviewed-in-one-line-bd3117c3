// A doorstop, reviewed honestly in a single line.
// It never moves, never complains, and still gets kicked every single day.
import { existsSync, mkdirSync, writeFileSync } from "node:fs";

const reviewLine =
  "It has one job, does it lying down, and gets kicked for it every single day.";

const outDir = "/output";
const outFile = `${outDir}/entry.txt`;

if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}

writeFileSync(outFile, reviewLine, { encoding: "utf8" });
process.stdout.write(`${reviewLine}\n`);
