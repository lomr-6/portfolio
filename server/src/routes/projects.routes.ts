import { Router, type Request, type Response } from "express";
import { readFile } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const router = Router();

async function loadProjectsData(): Promise<unknown[]> {
  const filePath = join(__dirname, "..", "data", "projects.json");
  const content = await readFile(filePath, "utf-8");
  return JSON.parse(content) as unknown[];
}

router.get("/projects", async (_req: Request, res: Response) => {
  try {
    const items = await loadProjectsData();
    res.json(items);
  } catch {
    res.status(500).json({ error: "Failed to load projects." });
  }
});

export default router;
