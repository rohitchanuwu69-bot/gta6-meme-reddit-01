import { copyFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

try {
  const src = join(botDir, "POST.json");
  if (!existsSync(src)) {
    throw new Error(`POST.json not found in bot directory: ${src}`);
  }
  mkdirSync(outDir, { recursive: true });
  copyFileSync(src, join(outDir, "POST.json"));
} catch (err) {
  const message = err instanceof Error ? err.message : String(err);
  console.error(`main.ts failed: ${message}`);
  process.exit(1);
}
