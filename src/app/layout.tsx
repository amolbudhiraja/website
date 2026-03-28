import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "Amol Budhiraja",
    template: "%s | Amol Budhiraja",
  },
  description:
    "Software Engineer at Meta. UC Berkeley EECS. Building things at scale.",
  keywords: ["Amol Budhiraja", "Software Engineer", "Meta", "UC Berkeley", "EECS"],
  authors: [{ name: "Amol Budhiraja" }],
  openGraph: {
    title: "Amol Budhiraja",
    description: "Software Engineer at Meta. UC Berkeley EECS.",
    url: "https://amol.budhiraja.com",
    siteName: "Amol Budhiraja",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amol Budhiraja",
    description: "Software Engineer at Meta. UC Berkeley EECS.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <main className="flex-1 pt-14">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
