"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { getAllPosts } from "@/lib/blog";
import type { BlogPost } from "@/lib/blog";
import { projects } from "@/lib/projects";

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const navCommands = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Projects", href: "/projects" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
];

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    async function loadPosts() {
      try {
        const res = await fetch("/api/posts");
        const data = await res.json();
        setPosts(data);
      } catch {
        // posts not critical for command palette
      }
    }
    if (open) loadPosts();
  }, [open]);

  const navigate = (href: string) => {
    router.push(href);
    onOpenChange(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh]"
      onClick={() => onOpenChange(false)}
    >
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-lg mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <Command
          className="rounded-xl border border-border bg-background shadow-2xl overflow-hidden"
          label="Command palette"
        >
          <Command.Input
            placeholder="Type a command or search..."
            className="w-full px-4 py-3.5 text-sm bg-transparent text-foreground placeholder:text-muted-foreground outline-none border-b border-border"
            autoFocus
          />
          <Command.List className="max-h-72 overflow-y-auto p-2">
            <Command.Empty className="py-8 text-center text-sm text-muted-foreground">
              No results found.
            </Command.Empty>

            <Command.Group heading="Navigation" className="mb-2">
              {navCommands.map((cmd) => (
                <Command.Item
                  key={cmd.href}
                  onSelect={() => navigate(cmd.href)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm cursor-pointer text-muted-foreground hover:text-foreground hover:bg-muted data-[selected=true]:bg-muted data-[selected=true]:text-foreground transition-colors"
                >
                  <ArrowIcon />
                  {cmd.label}
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group heading="Projects" className="mb-2">
              {projects.map((project) => (
                <Command.Item
                  key={project.slug}
                  onSelect={() => navigate(`/projects/${project.slug}`)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm cursor-pointer text-muted-foreground hover:text-foreground hover:bg-muted data-[selected=true]:bg-muted data-[selected=true]:text-foreground transition-colors"
                >
                  <FolderIcon />
                  <span>{project.title}</span>
                  <span className="ml-auto font-mono text-xs">{project.year}</span>
                </Command.Item>
              ))}
            </Command.Group>

            {posts.length > 0 && (
              <Command.Group heading="Blog Posts">
                {posts.map((post) => (
                  <Command.Item
                    key={post.slug}
                    onSelect={() => navigate(`/blog/${post.slug}`)}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm cursor-pointer text-muted-foreground hover:text-foreground hover:bg-muted data-[selected=true]:bg-muted data-[selected=true]:text-foreground transition-colors"
                  >
                    <PenIcon />
                    {post.title}
                  </Command.Item>
                ))}
              </Command.Group>
            )}
          </Command.List>

          <div className="px-4 py-2 border-t border-border flex items-center gap-3 text-xs text-muted-foreground">
            <span><kbd className="font-mono">↑↓</kbd> navigate</span>
            <span><kbd className="font-mono">↵</kbd> select</span>
            <span><kbd className="font-mono">esc</kbd> close</span>
          </div>
        </Command>
      </div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function PenIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  );
}
