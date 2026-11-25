// Make the AI Judge Laugh — one-liner entry.
// The whole entry is a single line; main.ts writes it to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I told the AI judge my code has no bugs — it laughed so hard it segfaulted.";

// Self-checking gate: the entry must be exactly one non-empty line.
// If the line ever gains a newline or goes blank, fail loudly instead of
// writing a broken entry.
if (!line || line.includes("\n") || line.trim() !== line) {
  throw new Error("entry must be exactly one non-empty line");
}

// The sealed scorer reads /output/entry.txt (MAKEFUN_OUTPUT_DIR when set),
// not stdout — write the entry there, then print it as well.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
// No trailing newline: the file must hold exactly the line, byte for byte.

console.log(line);
