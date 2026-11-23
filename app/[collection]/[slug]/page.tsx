import { notFound } from "next/navigation";
import { projects, projectPath } from "@/content/projects";
import { ProjectDetail } from "@/components/ProjectDetail";
import { pageMetadata } from "@/lib/seo";
export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map(({ collection, slug }) => ({ collection, slug }));
}
type Props = { params: Promise<{ collection: string; slug: string }> };
async function getProject(params: Props["params"]) {
  const { collection, slug } = await params;
  return (
    projects.find((p) => p.collection === collection && p.slug === slug) ??
    notFound()
  );
}
export async function generateMetadata({ params }: Props) {
  const p = await getProject(params);
  return pageMetadata(p.fullTitle, p.summary, projectPath(p));
}
export default async function ProjectPage({ params }: Props) {
  return <ProjectDetail project={await getProject(params)} />;
}
