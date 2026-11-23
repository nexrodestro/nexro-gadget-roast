// One-Line Roast: The Gadget You Use Every Day
// Writes a single original roast line (<=200 chars) to entry.txt.
// Deterministic: same bytes on every run, no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My smart bulb needs Wi-Fi, an app account, and a firmware update just to do what a light switch did flawlessly in 1950.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
