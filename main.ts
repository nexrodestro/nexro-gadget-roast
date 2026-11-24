import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line roast: the gadget is a smart bulb.
const ENTRY =
  "My smart bulb needs Wi-Fi, an app account, and a firmware update just to do what a light switch did flawlessly in 1950.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Gate: exactly one line, 1-200 chars, no newline of either kind,
// and no leading/trailing whitespace padding the roast.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.includes("\n") ||
  ENTRY.includes("\r") ||
  ENTRY.trim() !== ENTRY
) {
  throw new Error("entry must be a single trimmed line of 1-200 characters");
}

writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
