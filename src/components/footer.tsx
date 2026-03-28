import Link from "next/link";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/amolbudhiraja" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/amolbudhiraja/" },
  { label: "X", href: "https://x.com/amol_budhiraja" },
  { label: "Email", href: "mailto:amol@budhiraja.com" },
];

export function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground font-mono">
          © {new Date().getFullYear()} Amol Budhiraja
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
