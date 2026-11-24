import { mkdirSync, writeFileSync } from "node:fs";

const JOKE_TEXT =
  "My out-of-office reply says I'm on leave, which makes it the only email anyone in this office has ever actually read.";
const OUTPUT_DIRECTORY = "/output";
const ENTRY_FILENAME = "entry.txt";

function writeEntry(): void {
  mkdirSync(OUTPUT_DIRECTORY, { recursive: true });
  writeFileSync(`${OUTPUT_DIRECTORY}/${ENTRY_FILENAME}`, JOKE_TEXT, "utf8");
}

writeEntry();
