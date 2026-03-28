import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-32 text-center">
      <p className="font-mono text-sm text-muted-foreground mb-2">404</p>
      <h1 className="text-2xl font-semibold text-foreground mb-4">
        Page not found
      </h1>
      <p className="text-muted-foreground mb-8">
        Whatever you were looking for doesn&apos;t exist here.
      </p>
      <Link
        href="/"
        className="text-sm text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
      >
        Go home →
      </Link>
    </div>
  );
}
