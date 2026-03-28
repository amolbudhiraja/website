"use client";

import { useState } from "react";
import Link from "next/link";
import { projects, filterTags } from "@/lib/projects";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/fade-in";

const GitHubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState("All");

  const filtered =
    selectedTag === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(selectedTag));

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <FadeIn>
        <p className="text-xs font-mono text-indigo uppercase tracking-widest mb-3">Projects</p>
        <h1 className="text-2xl font-semibold text-foreground tracking-tight">
          Things I&apos;ve built.
        </h1>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-8 flex gap-2 flex-wrap">
          <button
            onClick={() => setSelectedTag("All")}
            className={`px-3 py-1 rounded-full text-xs font-mono border border-border transition-colors ${
              selectedTag === "All"
                ? "bg-indigo text-white border-indigo"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-full text-xs font-mono border border-border transition-colors ${
                selectedTag === tag
                  ? "bg-indigo text-white border-indigo"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </FadeIn>

      <FadeInStagger className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4" faster>
        {filtered.map((project) => (
          <FadeInStaggerItem key={project.title}>
            <Link href={`/projects/${project.slug}`} className="block h-full">
              <div className="relative border border-border rounded-lg p-5 hover:bg-muted hover:border-indigo/40 transition-all h-full flex flex-col group cursor-pointer">
                <div className="flex items-start justify-between gap-2">
                  <span className="font-medium text-foreground text-sm leading-snug group-hover:text-indigo transition-colors">
                    {project.title}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground shrink-0">
                    {project.year}
                  </span>
                </div>

                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs bg-indigo-subtle text-indigo px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="ml-auto font-mono text-xs text-muted-foreground group-hover:text-indigo transition-colors">
                    Read more →
                  </span>
                </div>

                {project.github && (
                  <div className="mt-3 flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="GitHub"
                    >
                      <GitHubIcon />
                    </a>
                  </div>
                )}
              </div>
            </Link>
          </FadeInStaggerItem>
        ))}
      </FadeInStagger>
    </main>
  );
}
