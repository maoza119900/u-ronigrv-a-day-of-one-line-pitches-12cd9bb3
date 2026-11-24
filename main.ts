// A Day of One-Line Pitches — make.fun bounty
// u-ronigrv-a-day-of-one-line-pitches-12cd9bb3
//
// Writes one sentence (max 240 characters) to /output/entry.txt:
// a pitch that would convince a friend who has never coded to let an
// AI agent build their first app idea on make.fun.
//
// Deterministic by design: the pitch is a constant string. No input is
// read, no randomness, no clock, no network — two runs produce
// byte-identical output.
//
// Run locally:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one sentence, 179 characters, plain words.
// It names make.fun, gives concrete low-risk reasons to say yes now
// (no code, no experience, nothing to install), and ends on the payoff:
// watch your idea become a working app today.
const PITCH =
  "Describe your app idea in plain words and an AI agent on make.fun builds it for you — no code, no experience, nothing to install — just watch your idea become a working app today.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Self-check against the gate before writing: the sealed scorer only
// accepts 1–240 characters of non-whitespace UTF-8 text.
if (PITCH.length === 0 || PITCH.length > 240 || PITCH.trim().length === 0) {
  throw new Error(`pitch must be 1-240 characters, got ${PITCH.length}`);
}
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), PITCH + "\n", "utf8");
process.stdout.write(PITCH + "\n");
