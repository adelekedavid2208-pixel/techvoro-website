
import Link from "next/link";
import {
  ArrowUpRight,
  ShoppingBag,
  HeartPulse,
  Wallet,
  ArrowRight,
} from "lucide-react";

const projects = [
  {
    name: "Finova",
    category: "FINTECH · MOBILE APPLICATION",
    description:
      "A modern financial experience designed to make managing money simpler, smarter and more accessible.",
    icon: Wallet,
    theme: "from-[#243B43] via-[#172A32] to-[#101A2B]",
    accent: "#72A9A1",
    type: "Finance dashboard",
    label: "Concept Project",
  },
  {
    name: "MedFlow",
    category: "HEALTHCARE · WEB PLATFORM",
    description:
      "A connected healthcare platform that brings appointments, patient records and care management together.",
    icon: HeartPulse,
    theme: "from-[#263B38] via-[#192C2C] to-[#101A2B]",
    accent: "#8BC0B6",
    type: "Healthcare platform",
    label: "Concept Project",
  },
  {
    name: "Cartly",
    category: "E-COMMERCE · DIGITAL EXPERIENCE",
    description:
      "A refined shopping experience built around effortless discovery, smooth checkout and customer engagement.",
    icon: ShoppingBag,
    theme: "from-[#344047] via-[#1C2931] to-[#101A2B]",
    accent: "#A6B0BC",
    type: "Commerce experience",
    label: "Concept Project",
  },
];

export default function PortfolioPreview() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden border-t border-white/[0.06] bg-[#0A1020] py-24 md:py-32"
    >
      <div className="container-width">

        {/* Section heading */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#39D5E8]">
              Selected work
            </p>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-5xl">
              Ideas turned into
              <span className="block bg-gradient-to-r from-[#477BFF] to-[#39D5E8] bg-clip-text text-transparent">
                digital experiences.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-8 text-[#A6B0C2] md:text-base">
              Explore a selection of digital product concepts that
              demonstrate how strategy, design and technology come
              together to solve real business challenges.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#477BFF]/50 pb-2 text-sm font-semibold text-white transition hover:border-[#39D5E8]"
          >
            Explore Our Portfolio
            <ArrowUpRight
              size={17}
              className="transition group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Project cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <Link
                href="/portfolio"
                key={project.name}
                className="group block"
              >
                {/* Visual preview */}
                <div
                  className={`relative flex h-[260px] items-center justify-center overflow-hidden rounded-sm border border-white/[0.07] bg-gradient-to-br ${project.theme} transition duration-500 group-hover:border-white/20 md:h-[290px]`}
                >
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute -right-12 -top-16 h-52 w-52 rounded-full border border-white/10" />
                    <div className="absolute -right-5 -top-9 h-36 w-36 rounded-full border border-white/10" />
                    <div className="absolute -bottom-20 -left-12 h-56 w-56 rounded-full border border-white/10" />
                  </div>

                  <div className="relative w-[75%] max-w-[280px] rounded-xl border border-white/10 bg-[#0B111B]/90 p-5 shadow-2xl transition duration-500 group-hover:-translate-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span
                          className="flex h-8 w-8 items-center justify-center rounded-lg"
                          style={{
                            backgroundColor: `${project.accent}20`,
                            color: project.accent,
                          }}
                        >
                          <Icon size={17} />
                        </span>

                        <span className="text-xs font-semibold text-white">
                          {project.name}
                        </span>
                      </div>

                      <span className="text-[9px] text-[#A6B0C2]">
                        Preview
                      </span>
                    </div>

                    <div className="mt-6">
                      <p className="text-[10px] text-[#A6B0C2]">
                        {project.type}
                      </p>

                      <div className="mt-2 flex items-end justify-between">
                        <div
                          className="h-7 w-28 rounded-sm"
                          style={{
                            backgroundColor: `${project.accent}35`,
                          }}
                        />
                        <div
                          className="h-7 w-12 rounded-sm"
                          style={{
                            backgroundColor: `${project.accent}20`,
                          }}
                        />
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((item) => (
                        <div
                          key={item}
                          className="h-14 rounded-md border border-white/[0.06] bg-white/[0.03] p-2"
                        >
                          <div
                            className="h-1.5 w-7 rounded-full"
                            style={{
                              backgroundColor: `${project.accent}80`,
                            }}
                          />
                          <div className="mt-3 h-1 w-full rounded-full bg-white/10" />
                          <div className="mt-1 h-1 w-2/3 rounded-full bg-white/10" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <span className="absolute bottom-4 right-4 rounded-full border border-white/10 bg-[#0B111B]/70 px-3 py-1.5 text-[9px] font-medium uppercase tracking-wider text-[#A6B0C2]">
                    {project.label}
                  </span>
                </div>

                {/* Project information */}
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-semibold tracking-[0.15em] text-[#39D5E8]">
                      {project.category}
                    </p>

                    <h3 className="mt-3 text-xl font-semibold text-white transition group-hover:text-[#6F95FF]">
                      {project.name}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#A6B0C2]">
                      {project.description}
                    </p>
                  </div>

                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-white transition group-hover:border-[#477BFF] group-hover:bg-[#477BFF]">
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom link */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#477BFF] hover:bg-[#477BFF]/10"
          >
            Discover All Projects
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
