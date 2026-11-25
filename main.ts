// The Funniest Honest Appliance Error
// make.fun bounty: u-xvader-the-funniest-honest-appliance-error-adec4450
//
// Writes exactly one line — the funniest honest error message an appliance
// could show — to /output/entry.txt. Fully deterministic: the same line on
// every run. No network, no file reads, no secrets, no randomness.
// Before writing, the line is validated (non-blank, 1-200 chars, single
// line) so a corrupted entry can never be submitted silently.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Error 04: drum unbalanced. I have walked across the kitchen and I am not sorry.";

// The entry line must be a single non-blank line of 1-200 characters.
// Anything else means the entry text was corrupted or edited by mistake,
// so fail loudly instead of writing a bad entry file.
function validateEntry(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("entry line must not be blank");
  }
  if (line.length < 1 || line.length > 200) {
    throw new Error(
      `entry line must be 1-200 characters, got ${line.length}`,
    );
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry line must be a single line");
  }
}

validateEntry(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
