import { Router, type Request, type Response } from "express";
import { readFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const router = Router();

const SUPPORTED_LANGS = ["fr", "en"] as const;
type Lang = (typeof SUPPORTED_LANGS)[number];

function isValidLang(lang: string): lang is Lang {
  return SUPPORTED_LANGS.includes(lang as Lang);
}

async function loadProjectsData(lang: Lang): Promise<unknown[]> {
  const filePath = join(__dirname, "..", "data", `${lang}.json`);
  const content = await readFile(filePath, "utf-8");
  const data = JSON.parse(content) as { projects: { items: unknown[] } };
  return data.projects.items;
}

router.get("/projects", async (req: Request, res: Response) => {
  const lang = (req.query.lang as string) ?? "fr";

  if (!isValidLang(lang)) {
    res.status(400).json({ error: "Unsupported language. Use 'fr' or 'en'." });
    return;
  }

  try {
    const items = await loadProjectsData(lang);
    res.json(items);
  } catch {
    res.status(500).json({ error: "Failed to load projects." });
  }
});

export default router;
