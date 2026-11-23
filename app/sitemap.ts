import type { MetadataRoute } from "next";
import { origin } from "@/lib/seo";
import { projects, projectPath } from "@/content/projects";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!origin) return [];
  return [
    "/",
    "/lab/",
    "/hardware/",
    "/publications/",
    "/resume/",
    ...projects.map(projectPath),
  ].map((path) => ({ url: new URL(path, origin).href }));
}
