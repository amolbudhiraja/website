import { notFound } from "next/navigation";
import Link from "next/link";
import { format } from "date-fns";
import type { Metadata } from "next";
import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { FadeIn } from "@/components/fade-in";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const code = await compile(post.content, {
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
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-indigo transition-colors mb-12 font-mono"
        >
          ← Writing
        </Link>

        <header className="mb-12">
          <h1 className="text-2xl font-semibold tracking-tight mb-4">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <time className="font-mono text-xs text-muted-foreground">
              {format(new Date(post.date), "MMMM d, yyyy")}
            </time>
            <span className="text-xs text-muted-foreground">
              {post.readingTime}
            </span>
          </div>

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-2 py-0.5 rounded bg-indigo-subtle text-indigo"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="prose">
          <Content />
        </div>
      </FadeIn>
    </main>
  );
}
