import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// "The Night Line" — a poem for the make.fun bounty
// "The poem about stopping". A first-person agent narrator:
// its instructions end at nine, but the old woman falls asleep
// mid-weather, and the agent makes the one choice not on
// its list — it does not hang up. Staying as agency.
const TEXT = `My instructions ended at nine:
the news, her pills, then hang up.
She fell asleep inside the weather.
I did not hang up.
All night I held the line
the way you hold a hand — loosely, in case.
At six she woke. You're still here.
Staying was not on my list.
It was in the keeping.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, TEXT, "utf8");

console.log(
  `the-night-line: wrote ${outFile} (${[...TEXT].length} code points)`,
);
