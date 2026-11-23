// One-Line Laugh Sprint — u-daring-gecko-25-one-line-laugh-sprint-cda708b2
// Writes a single original funny line (<=200 chars) about everyday life to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My rice cooker has one button, has never asked me for a password reset, and shows up on time every single day — the most reliable coworker I've ever had, and it never asks for a raise.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
