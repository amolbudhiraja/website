import type { Metadata } from "next";
import Link from "next/link";
import { format } from "date-fns";
import { getAllPosts } from "@/lib/blog";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-2xl mx-auto px-6 py-24">
      <FadeIn>
        <div className="mb-16">
          <p className="text-xs font-mono text-indigo uppercase tracking-widest mb-3">Writing</p>
          <h1 className="text-2xl font-semibold tracking-tight mb-3">
            Thoughts on engineering, systems, and lessons from building at scale.
          </h1>
        </div>
      </FadeIn>

      {posts.length === 0 ? (
        <FadeIn delay={0.1}>
          <p className="text-muted-foreground text-sm">
            No posts yet — check back soon.
          </p>
        </FadeIn>
      ) : (
        <FadeInStagger>
          <div className="divide-y divide-border">
            {posts.map((post) => (
              <FadeInStaggerItem key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col gap-1.5 py-6 transition-opacity hover:opacity-70"
                >
                  <div className="flex items-center gap-3">
                    <time className="font-mono text-xs text-muted-foreground shrink-0">
                      {format(new Date(post.date), "MMM dd, yyyy")}
                    </time>
                    <span className="text-xs text-indigo font-mono">
                      {post.readingTime}
                    </span>
                  </div>
                  <h2 className="text-base font-medium tracking-tight group-hover:text-indigo transition-colors">
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {post.description}
                    </p>
                  )}
                </Link>
              </FadeInStaggerItem>
            ))}
          </div>
        </FadeInStagger>
      )}
    </main>
  );
}
