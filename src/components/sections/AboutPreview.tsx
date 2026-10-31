
import Link from "next/link";
import {
  ArrowUpRight,
  Target,
  ShieldCheck,
  TrendingUp,
  MoveUpRight,
} from "lucide-react";

const highlights = [
  {
    icon: Target,
    number: "01",
    title: "Strategic Thinking",
    description:
      "We understand your business goals before designing the technology to achieve them.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Quality Engineering",
    description:
      "We build dependable, secure, and scalable digital products with attention to detail.",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Built for Growth",
    description:
      "Our solutions are designed to evolve alongside your business and its ambitions.",
  },
];

export default function AboutPreview() {
  return (
    <section className="bg-white px-6 py-24 md:px-10 lg:py-32">
      <div className="container-width mx-auto">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#548A80]">
              <span className="h-px w-8 bg-[#72A9A1]" />
              About Techvoro
            </span>

            <h2 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.12] tracking-tight text-[#142B45] md:text-5xl lg:text-6xl">
              Technology should move
              <span className="text-[#548A80]"> business forward.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#657482] md:text-base">
            We bring strategy, design, and engineering together to turn
            ambitious ideas into digital products built for real-world impact.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-[28px] border border-[#E8ECEB] lg:grid-cols-[1.05fr_0.95fr]">
          {/* Dark story panel */}
          <div className="relative flex min-h-[440px] flex-col justify-between overflow-hidden bg-[#0B1722] p-8 text-white md:p-12 lg:p-14">
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#72A9A1]/20" />
            <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full border border-[#72A9A1]/20" />
            <div className="pointer-events-none absolute right-10 top-10 h-32 w-32 rounded-full bg-[#72A9A1]/10 blur-3xl" />

            <div className="relative z-10">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86B9AF]">
                Our approach
              </span>

              <h3 className="mt-8 max-w-lg text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Good technology starts with understanding what matters.
              </h3>

              <p className="mt-6 max-w-md text-sm leading-8 text-[#B5C0C9] md:text-base">
                Every business has a different challenge. We take the time to
                understand yours, then bring together the right thinking,
                creative direction, and technical expertise to solve it.
              </p>
            </div>

            <div className="relative z-10 mt-12 flex items-center justify-between border-t border-white/10 pt-6">
              <span className="text-xs font-medium uppercase tracking-[0.16em] text-[#9EADB8]">
                Thoughtful by design. Built to perform.
              </span>
              <MoveUpRight className="text-[#86B9AF]" size={22} />
            </div>
          </div>

          {/* White principles panel */}
          <div className="bg-[#F7F9F8] p-8 md:p-12 lg:p-14">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A999B]">
                What guides us
              </span>
            </div>

            <div className="space-y-0">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group border-t border-[#E0E7E4] py-7 first:border-t-0 first:pt-0 last:pb-0"
                  >
                    <div className="flex gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#72A9A1]/15 text-[#548A80] transition duration-300 group-hover:bg-[#548A80] group-hover:text-white">
                        <Icon size={22} />
                      </div>

                      <div className="flex-1">
                        <div className="mb-2 text-[10px] font-bold tracking-[0.2em] text-[#9AA8A5]">
                          {item.number}
                        </div>

                        <h4 className="text-lg font-semibold text-[#142B45]">
                          {item.title}
                        </h4>

                        <p className="mt-2 text-sm leading-7 text-[#657482]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Closing link */}
        <div className="mt-10 flex flex-col justify-between gap-5 border-b border-[#E8ECEB] pb-8 sm:flex-row sm:items-center">
          <p className="max-w-lg text-sm leading-7 text-[#657482]">
            Discover the thinking, people, and principles behind the work we do.
          </p>

          <Link
            href="/about"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#142B45] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#254563]"
          >
            Discover Our Story
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
