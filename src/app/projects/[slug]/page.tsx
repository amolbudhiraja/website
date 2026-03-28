import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { projects } from "@/lib/projects";
import { getProjectBySlug } from "@/lib/projects-content";
import { FadeIn } from "@/components/fade-in";
import { SystemDiagram } from "@/components/system-diagram";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const meta = projects.find((p) => p.slug === slug);

  const code = await compile(project.content, {
    outputFormat: "function-body",
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: { dark: "github-dark", light: "github-light" },
          keepBackground: false,
        },
      ],
    ],
  });

  const { default: Content } = await run(String(code), {
    ...runtime,
    baseUrl: import.meta.url,
  });

  return (
    <main className="max-w-2xl mx-auto px-6 py-24">
      <FadeIn>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-indigo transition-colors mb-12 font-mono"
        >
          ← Projects
        </Link>

        <header className="mb-12">
          <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
            <h1 className="text-2xl font-semibold tracking-tight">
              {project.title}
            </h1>
            <span className="font-mono text-xs text-muted-foreground shrink-0 mt-1.5">
              {project.year}
            </span>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-2 py-0.5 rounded bg-indigo-subtle text-indigo"
              >
                {tag}
              </span>
            ))}
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-muted-foreground hover:text-indigo transition-colors ml-auto"
              >
                GitHub →
              </Link>
            )}
            {project.demo && project.demo !== "#" && (
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-muted-foreground hover:text-indigo transition-colors"
              >
                Demo →
              </Link>
            )}
          </div>

        </header>

        <div className="prose">
          <Content components={{ SystemDiagram }} />
        </div>
      </FadeIn>
    </main>
  );
}
