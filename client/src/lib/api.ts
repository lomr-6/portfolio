import type { Lang, Project } from "@/types";

const BASE_URL = "/api";

export async function fetchProjects(lang: Lang): Promise<Project[]> {
  const res = await fetch(`${BASE_URL}/projects?lang=${lang}`);
  if (!res.ok) throw new Error("Failed to fetch projects");
  return res.json() as Promise<Project[]>;
}
