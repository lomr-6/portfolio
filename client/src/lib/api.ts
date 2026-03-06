import type { Project } from "@/types";

const BASE_URL = "/api";

export async function fetchProjects(): Promise<Project[]> {
  const res = await fetch(`${BASE_URL}/projects`);
  if (!res.ok) throw new Error("Failed to fetch projects");
  return res.json() as Promise<Project[]>;
}
