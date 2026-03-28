import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/fade-in";
import { TravelMap } from "@/components/travel-map";

export const metadata: Metadata = {
  title: "About",
  description: "A little more about Amol — outside of the code.",
};

const sports = {
  watching: [
    { name: "Sacramento Kings", color: "#5A2D82", league: "NBA" },
    { name: "San Francisco 49ers", color: "#AA0000", league: "NFL" },
    { name: "SF Giants", color: "#FD5A1E", league: "MLB" },
    { name: "Red Bull Racing", color: "#3671C6", league: "F1" },
  ],
  playing: [
    "Pickleball",
    "Basketball",
    "Flag football",
    "Grass volleyball",
    "Running",
  ],
};

const countries = [
  "USA", "Canada", "UK", "Spain", "France", "India", "Japan",
];

const apps = [
  {
    name: "Spotify",
    handle: "@amolbudhiraja",
    description: "what I'm actually listening to",
    href: "https://open.spotify.com/user/31oerxti2kfvzwso7y4xefr7z52m?si=31cc20e79387488c",
    color: "#1DB954",
  },
  {
    name: "Beli",
    handle: "@amolb",
    description: "every restaurant worth knowing about",
    href: "https://beliapp.co/app/amolb",
    color: "#FF6B35",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="mb-20">
        <FadeIn delay={0.1}>
          <p className="text-xs font-mono text-indigo uppercase tracking-widest mb-3">About</p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4 bg-gradient-to-r from-foreground to-indigo bg-clip-text text-transparent">
            Beyond the code.
          </h1>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            I grew up in{" "}
            <span className="text-foreground font-medium">Sacramento, CA</span>.{" "}
            Now I&apos;m based in{" "}
            <span className="text-foreground font-medium">San Francisco</span>,
            engineering at Meta. Outside of work I&apos;m usually on a court,
            at a new restaurant, or somewhere I&apos;ve never been before.
          </p>
        </FadeIn>
      </section>

      {/* Travel map */}
      <section className="mb-20">
        <FadeIn>
          <p className="text-xs font-mono text-indigo uppercase tracking-widest mb-3">Travels</p>
          <h2 className="text-xl font-semibold tracking-tight mb-2">
            Places I&apos;ve been.
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            {countries.join(" · ")} · and more on the list.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <TravelMap />
        </FadeIn>
      </section>

      {/* Sports */}
      <section className="mb-20">
        <FadeIn>
          <p className="text-xs font-mono text-indigo uppercase tracking-widest mb-6">Sports</p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Watching */}
          <FadeIn delay={0.1}>
            <div>
              <h2 className="text-sm font-medium text-foreground mb-4">Teams I follow</h2>
              <FadeInStagger faster>
                <div className="space-y-3">
                  {sports.watching.map((team) => (
                    <FadeInStaggerItem key={team.name}>
                      <div className="flex items-center gap-3">
                        <span
                          className="w-2.5 h-2.5 rounded-full shrink-0"
                          style={{ backgroundColor: team.color }}
                        />
                        <span className="text-sm text-foreground">{team.name}</span>
                        <span className="font-mono text-xs text-muted-foreground ml-auto">{team.league}</span>
                      </div>
                    </FadeInStaggerItem>
                  ))}
                </div>
              </FadeInStagger>
            </div>
          </FadeIn>

          {/* Playing */}
          <FadeIn delay={0.15}>
            <div>
              <h2 className="text-sm font-medium text-foreground mb-4">Sports I play</h2>
              <div className="space-y-3">
                {sports.playing.map((sport) => (
                  <div key={sport} className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-indigo/40 shrink-0" />
                    <span className="text-sm text-foreground">{sport}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Apps / online */}
      <section>
        <FadeIn>
          <p className="text-xs font-mono text-indigo uppercase tracking-widest mb-6">Find me on</p>
        </FadeIn>
        <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 gap-4" faster>
          {apps.map((app) => (
            <FadeInStaggerItem key={app.name}>
              <Link
                href={app.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-border rounded-lg p-5 hover:border-indigo/40 hover:bg-muted transition-all"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: app.color }}
                  />
                  <span className="font-medium text-sm text-foreground group-hover:text-indigo transition-colors">
                    {app.name}
                  </span>
                </div>
                <p className="text-xs font-mono text-muted-foreground mb-1">{app.handle}</p>
                <p className="text-xs text-muted-foreground">{app.description}</p>
              </Link>
            </FadeInStaggerItem>
          ))}
        </FadeInStagger>
      </section>
    </div>
  );
}
