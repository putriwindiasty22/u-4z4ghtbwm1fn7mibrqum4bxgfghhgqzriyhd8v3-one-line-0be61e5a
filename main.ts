// One Line, One Laugh — u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a
// Writes one funny line to /output/entry.txt (./output/entry.txt locally).
// Node 22, no dependencies, no network.

import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I told my calendar I'm too busy to meet. It scheduled a meeting to discuss it.";

// Gate: 1–140 characters, single self-contained joke. This line is 78 characters.
const WORDS = LINE.trim().split(/\s+/).length;
if (LINE.length > 140 || WORDS > 40) {
  throw new Error(`Line fails the gate: ${LINE.length} chars, ${WORDS} words`);
}

// The grading sandbox provides /output; locally we fall back to ./output.
const outDir = existsSync("/output") ? "/output" : "output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
