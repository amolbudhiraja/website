import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { projects } from "@/lib/projects";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/fade-in";
import { format } from "date-fns";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="mb-24">
        <FadeIn delay={0.1}>
          <p className="text-sm font-mono text-muted-foreground mb-4">
            San Francisco, CA
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4 bg-gradient-to-r from-foreground to-indigo bg-clip-text text-transparent">
            Amol Budhiraja
          </h1>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            Software Engineer at{" "}
            <span className="text-indigo font-medium">Meta</span>.
            Berkeley EECS grad. I build things at scale, think about systems,
            and occasionally write about what I learn.
          </p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div className="flex items-center gap-4 mt-6">
            <Link
              href="/work"
              className="text-sm text-indigo underline underline-offset-4 decoration-indigo/30 hover:decoration-indigo transition-colors"
            >
              View my work →
            </Link>
            <Link
              href="/blog"
              className="text-sm text-muted-foreground hover:text-indigo transition-colors"
            >
              Read the blog
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Currently */}
      <FadeIn delay={0.5}>
        <section className="mb-24">
          <h2 className="text-xs font-mono text-indigo uppercase tracking-widest mb-4">
            Currently
          </h2>
          <div className="space-y-3">
            {[
              { label: "Role", value: "Software Engineer @ Meta" },
              { label: "Location", value: "San Francisco, CA" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-baseline gap-2 text-sm"
              >
                <span className="text-muted-foreground w-24 shrink-0">
                  {item.label}
                </span>
                <span className="text-foreground">{item.value}</span>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Featured Projects */}
      <section className="mb-24">
        <FadeIn>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xs font-mono text-indigo uppercase tracking-widest">
              Selected Projects
            </h2>
            <Link
              href="/projects"
              className="text-xs text-muted-foreground hover:text-indigo transition-colors"
            >
              View all →
            </Link>
          </div>
        </FadeIn>
        <FadeInStagger>
          <div className="space-y-px">
            {featuredProjects.map((project) => (
              <FadeInStaggerItem key={project.title}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block py-4 border-t border-border first:border-t-0"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-foreground mb-1 group-hover:text-indigo transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-mono text-indigo bg-indigo-subtle px-2 py-0.5 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 pt-0.5">
                      {project.github && (
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
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="Demo"
                        >
                          <ExternalIcon />
                        </a>
                      )}
                    </div>
                  </div>
                </Link>
              </FadeInStaggerItem>
            ))}
          </div>
        </FadeInStagger>
      </section>

      {/* Latest Posts */}
      {posts.length > 0 && (
        <section>
          <FadeIn>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xs font-mono text-indigo uppercase tracking-widest">
                Writing
              </h2>
              <Link
                href="/blog"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                View all →
              </Link>
            </div>
          </FadeIn>
          <FadeInStagger>
            <div className="space-y-px">
              {posts.map((post) => (
                <FadeInStaggerItem key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex items-start justify-between gap-4 py-4 border-t border-border first:border-t-0 transition-colors"
                  >
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-foreground mb-1 truncate group-hover:text-indigo transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">
                        {post.description}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground shrink-0 pt-0.5">
                      {post.date
                        ? format(new Date(post.date), "MMM d, yyyy")
                        : ""}
                    </span>
                  </Link>
                </FadeInStaggerItem>
              ))}
            </div>
          </FadeInStagger>
        </section>
      )}
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
