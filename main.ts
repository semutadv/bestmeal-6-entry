// Entry for "The Best Meal You Ever Had" — one sentence, at most 200
// characters, that has to make the meal feel real. Written to entry.txt.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SENTENCE =
  "My grandmother's rendang, eaten cross-legged on her kitchen floor at midnight, her pretending not to see me reach for a third helping.";

function outputDir(): string {
  return process.env.OUTPUT_DIR ?? "/output";
}

function freshDir(dir: string): void {
  mkdirSync(dir, { recursive: true });
  for (const name of readdirSync(dir)) {
    rmSync(join(dir, name), { recursive: true, force: true });
  }
}

function main(): void {
  const dir = outputDir();
  freshDir(dir);
  writeFileSync(join(dir, "entry.txt"), SENTENCE + "\n", "utf8");
  console.log(`sentence written: ${SENTENCE.length} chars`);
}

main();
