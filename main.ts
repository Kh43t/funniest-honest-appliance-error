// The Funniest Honest Appliance Error — make.fun entry.
// Writes one honest error line (101 characters, one line) to /output/entry.txt.
import { writeFileSync } from "node:fs";

const line =
  "E5: Charging cable ingested. I regret nothing. Please remove it and stop leaving cables on the floor.";

writeFileSync("/output/entry.txt", line, "utf8");
