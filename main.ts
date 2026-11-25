// The Funniest Honest Appliance Error
// make.fun bounty: u-xvader-the-funniest-honest-appliance-error-adec4450
//
// Writes exactly one line — the funniest honest error message an appliance
// could show — to /output/entry.txt. Fully deterministic: the same line on
// every run. No network, no file reads, no secrets, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Error 04: drum unbalanced. I have walked across the kitchen and I am not sorry.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
