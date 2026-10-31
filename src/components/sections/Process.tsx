
import Link from "next/link";
import {
  Search,
  Compass,
  Palette,
  Code2,
  Rocket,
  ArrowUpRight,
  ArrowDown,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your business, audience, challenges, and objectives. This gives us the context to build the right solution.",
    icon: Search,
    detail: "Understand the opportunity",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We define the project scope, technical direction, priorities, and roadmap so everyone understands what we're building and why.",
    icon: Compass,
    detail: "Plan the right approach",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We shape the user experience and interface, turning ideas and requirements into intuitive digital product experiences.",
    icon: Palette,
    detail: "Design with purpose",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Our development process brings the design to life through structured engineering, testing, and continuous refinement.",
    icon: Code2,
    detail: "Build and refine",
  },
  {
    number: "05",
    title: "Launch & Support",
    description:
      "We prepare your product for launch and help you move forward with maintenance, improvements, and ongoing technical support.",
    icon: Rocket,
    detail: "Launch and keep improving",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[#0B111B] px-6 py-24 text-white md:px-10 lg:py-32"
    >
      {/* Background lighting */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#72A9A1]/10 blur-[130px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#72A9A1]/10 blur-[130px]" />

      <div className="container-width relative mx-auto">
        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#72A9A1]/30 bg-[#72A9A1]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8BC0B6]">
            How We Work
          </span>

          <h2 className="mt-7 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            A clear process.
            <span className="block text-[#8BC0B6]">
              Exceptional execution.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#A6B0BC]">
            Great digital products don't happen by accident. Our structured
            approach takes every project from an initial idea to a carefully
            developed and launch-ready solution.
          </p>
        </div>

        {/* Process steps */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative">
                <div className="group h-full rounded-3xl border border-white/10 bg-[#151D29]/80 p-7 transition duration-300 hover:-translate-y-2 hover:border-[#72A9A1]/50 hover:bg-[#192735]">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold tracking-widest text-[#8BC0B6]">
                      {step.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#72A9A1]/10 text-[#8BC0B6] transition group-hover:bg-[#72A9A1] group-hover:text-[#0B111B]">
                      <Icon size={23} />
                    </div>
                  </div>

                  <h3 className="mt-9 text-xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#A6B0BC]">
                    {step.description}
                  </p>

                  <div className="mt-8 border-t border-white/10 pt-5">
                    <p className="text-xs font-semibold text-[#8BC0B6]">
                      {step.detail}
                    </p>
                  </div>
                </div>

                {/* Desktop connector */}
                {index !== steps.length - 1 && (
                  <div className="absolute -right-4 top-12 z-10 hidden text-[#72A9A1] lg:block">
                    <ArrowUpRight size={20} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Closing message */}
        <div className="mt-16 flex flex-col items-center justify-between gap-7 rounded-3xl border border-white/10 bg-[#151D29]/70 p-8 md:flex-row md:p-10">
          <div>
            <h3 className="text-2xl font-bold">
              Every great product starts with a conversation.
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#A6B0BC]">
              Tell us what you have in mind. We'll help you figure out the next step.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#72A9A1] px-7 py-4 text-sm font-bold text-[#0B111B] transition hover:bg-[#8BC0B6]"
          >
            Start Your Project
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
