import { mkdirSync, writeFileSync } from "node:fs";

const SETUP =
  "My out-of-office reply says I'm on leave, which makes it";
const PUNCHLINE =
  "the only email anyone in this office has ever actually read.";
const OUTPUT_DIRECTORY = "/output";
const ENTRY_FILENAME = "entry.txt";

function buildEntryText(setup: string, punchline: string): string {
  const segments = [setup, punchline];
  return segments.join(" ");
}

function writeEntry(text: string): void {
  mkdirSync(OUTPUT_DIRECTORY, { recursive: true });
  writeFileSync(`${OUTPUT_DIRECTORY}/${ENTRY_FILENAME}`, text, "utf8");
}

function main(): void {
  const entryText = buildEntryText(SETUP, PUNCHLINE);
  writeEntry(entryText);
}

main();
