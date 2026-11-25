// The Funniest Honest Appliance Error — make.fun entry.
// Writes one honest error line (101 characters, one line) to /output/entry.txt.
import { writeFileSync } from "node:fs";

const line =
  "E5: Charging cable ingested. I regret nothing. Please remove it and stop leaving cables on the floor.";

// The format allows 1-200 characters on a single line; refuse to emit
// anything outside it instead of silently submitting an invalid entry.
if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error(`entry line must be 1-200 characters on one line, got ${line.length}`);
}

writeFileSync("/output/entry.txt", line, "utf8");
