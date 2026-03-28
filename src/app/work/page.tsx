import type { Metadata } from "next";
import { workExperiences } from "@/lib/work";
import { FadeIn, FadeInStagger, FadeInStaggerItem } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "Work",
};

export default function WorkPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <FadeIn>
        <p className="text-xs font-mono text-indigo uppercase tracking-widest mb-3">Work</p>
        <h1 className="text-2xl font-semibold text-foreground tracking-tight">
          Where I&apos;ve been.
        </h1>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="mt-12 relative">
          <div className="border-l border-border pl-8">
            <FadeInStagger faster className="space-y-12">
              {workExperiences.map((exp, i) => (
                <FadeInStaggerItem key={i}>
                  <div className="relative">
                    <div className={`absolute -left-[2.15rem] top-1 w-2.5 h-2.5 rounded-full border-2 transition-colors ${exp.current ? "border-indigo bg-indigo" : "border-border bg-background"}`} />

                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-medium text-foreground text-sm">
                            {exp.company}
                          </span>
                          {exp.current && (
                            <span className="bg-indigo-subtle text-indigo text-xs font-mono px-2 py-0.5 rounded">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm mt-0.5">
                          {exp.role}
                        </p>
                      </div>
                      <span className="font-mono text-xs text-muted-foreground shrink-0">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="mt-3 space-y-2">
                      {exp.description.map((bullet, j) => (
                        <li
                          key={j}
                          className="text-sm text-muted-foreground leading-relaxed flex gap-2.5"
                        >
                          <span className="mt-2 w-1 h-1 rounded-full bg-indigo/40 shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInStaggerItem>
              ))}
            </FadeInStagger>
          </div>
        </div>
      </FadeIn>

      {/* Education */}
      <FadeIn delay={0.3}>
        <div className="mt-20 pt-12 border-t border-border">
          <p className="text-xs font-mono text-indigo uppercase tracking-widest mb-8">Education</p>

          <div className="border-l border-border pl-8 space-y-10">
            {/* Berkeley */}
            <div className="relative">
              <div className="absolute -left-[2.15rem] top-1 w-2.5 h-2.5 rounded-full border-2 border-border bg-background" />
              <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                <div>
                  <span className="font-medium text-foreground text-sm">UC Berkeley</span>
                  <p className="text-muted-foreground text-sm mt-0.5">B.S. Electrical Engineering and Computer Science</p>
                </div>
                <span className="font-mono text-xs text-muted-foreground shrink-0">Class of 2025</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="text-foreground/60 font-medium">Coursework: </span>
                Machine Learning, Computer Vision, Artificial Intelligence, Compilers, Operating Systems, CPU Design, Database Engineering, Security, Data Structures and Algorithms, Computer Architecture, Optimization Models in Engineering, Signals and Systems, Discrete Mathematics and Probability Theory, and Designing Information Devices and Systems.
              </p>
            </div>

            {/* Research */}
            <div className="relative">
              <div className="absolute -left-[2.15rem] top-1 w-2.5 h-2.5 rounded-full border-2 border-border bg-background" />
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <span className="font-medium text-foreground text-sm">Berkeley NetSys Lab</span>
                  <p className="text-muted-foreground text-sm mt-0.5">Undergraduate Researcher</p>
                </div>
                <span className="font-mono text-xs text-muted-foreground shrink-0">Aug 2023 – May 2024</span>
              </div>
              <ul className="mt-3 space-y-2">
                <li className="text-sm text-muted-foreground leading-relaxed flex gap-2.5">
                  <span className="mt-2 w-1 h-1 rounded-full bg-indigo/40 shrink-0" />
                  Spearheaded development of SpaceGPT, an LLM designed to optimize IoT device programming based on the digiSpace paper. Integrated Sentence Transformers, Tokenizers, and vectorized search to enhance query accuracy and device-to-query mapping.
                </li>
              </ul>
            </div>

            {/* Mobile Devs */}
            <div className="relative">
              <div className="absolute -left-[2.15rem] top-1 w-2.5 h-2.5 rounded-full border-2 border-border bg-background" />
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <span className="font-medium text-foreground text-sm">Mobile Developers of Berkeley</span>
                  <p className="text-muted-foreground text-sm mt-0.5">VP of Education</p>
                </div>
                <span className="font-mono text-xs text-muted-foreground shrink-0">Jan 2022 – May 2025</span>
              </div>
              <ul className="mt-3 space-y-2">
                <li className="text-sm text-muted-foreground leading-relaxed flex gap-2.5">
                  <span className="mt-2 w-1 h-1 rounded-full bg-indigo/40 shrink-0" />
                  Redesigned the club&apos;s training program to focus on ML-driven mobile development, teaching React Native, Swift, and CNN architectures to 40+ members per semester.
                </li>
                <li className="text-sm text-muted-foreground leading-relaxed flex gap-2.5">
                  <span className="mt-2 w-1 h-1 rounded-full bg-indigo/40 shrink-0" />
                  Led development of 4 client projects end-to-end and built 6+ apps through the club&apos;s intensive training program and Techfair competition.
                </li>
              </ul>
            </div>

            {/* Teaching */}
            <div className="relative">
              <div className="absolute -left-[2.15rem] top-1 w-2.5 h-2.5 rounded-full border-2 border-border bg-background" />
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <span className="font-medium text-foreground text-sm">Teaching</span>
                  <p className="text-muted-foreground text-sm mt-0.5">Academic Intern & Course Tutor</p>
                </div>
              </div>
              <ul className="mt-3 space-y-2">
                {[
                  { course: "CS 61A", title: "Structure and Interpretation of Computer Programs", role: "Academic Intern" },
                  { course: "CS 61B", title: "Data Structures and Algorithms", role: "Academic Intern" },
                  { course: "EECS 16A", title: "Designing Information Devices and Systems I", role: "CS Mentor" },
                ].map((t) => (
                  <li key={t.course} className="text-sm text-muted-foreground leading-relaxed flex gap-2.5">
                    <span className="mt-2 w-1 h-1 rounded-full bg-indigo/40 shrink-0" />
                    <span><span className="font-mono text-xs text-indigo">{t.course}</span> — {t.title} <span className="text-muted-foreground/60">({t.role})</span></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </FadeIn>
    </main>
  );
}
