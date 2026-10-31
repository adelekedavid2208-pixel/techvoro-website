
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import ServicesCoreScene from "@/components/three/ServicesCoreScene";
import {
  ArrowUpRight,
  Target,
  Eye,
  Lightbulb,
  ShieldCheck,
  Users,
  Rocket,
  CheckCircle2,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Purposeful Innovation",
    description:
      "We use technology thoughtfully, creating digital solutions that solve real problems and deliver meaningful value.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Quality Without Compromise",
    description:
      "From architecture to final delivery, we focus on reliability, performance, security, and attention to detail.",
  },
  {
    icon: Users,
    number: "03",
    title: "Partnership Mindset",
    description:
      "We work closely with our clients, maintaining clear communication and treating every project as a shared responsibility.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Built for Growth",
    description:
      "We create scalable digital products designed to adapt as businesses, customers, and opportunities evolve.",
  },
];

const capabilities = [
  "Mobile and web application development",
  "Custom software engineering",
  "UI/UX and product design",
  "E-commerce solutions",
  "Business automation and integrations",
];

const specialists = [
  "Technology strategists",
  "Product and UI/UX designers",
  "Frontend and backend engineers",
  "Mobile application developers",
  "Quality assurance specialists",
  "Project and delivery managers",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#101923]">
      <Navbar />

      {/* HERO */}
      <section className="relative isolate flex min-h-[720px] items-end overflow-hidden bg-[#080D14] pb-20 pt-40 text-white md:min-h-[820px] md:pb-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_35%,rgba(80,139,130,0.2),transparent_48%)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080D14] via-[#080D14]/95 to-[#080D14]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080D14] via-transparent to-[#080D14]/30" />
          <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:90px_90px]" />
        </div>

        {/* Interactive 3D visual */}
        <div className="pointer-events-none absolute right-[-12%] top-[8%] -z-10 h-[560px] w-[560px] opacity-60 md:right-[-4%] md:top-[5%] md:h-[720px] md:w-[720px]">
          <ServicesCoreScene />
        </div>

        <div className="container-width relative z-10">
          <div className="max-w-5xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#8BC0B6]" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8BC0B6]">
                About Techvoro
              </span>
            </div>

            <h1 className="mt-9 text-5xl font-semibold leading-[1.06] tracking-[-0.045em] md:text-7xl lg:text-[90px]">
              We believe in
              <span className="block text-[#8BC0B6]">building what</span>
              comes next.
            </h1>

            <div className="mt-9 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-2xl text-base leading-8 text-[#A6B0BC] md:text-lg">
                Techvoro is a software development agency focused on
                designing and building digital products that help
                ambitious businesses solve problems, improve operations,
                and create new opportunities.
              </p>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 text-sm font-semibold text-white transition hover:text-[#8BC0B6]"
              >
                Get to know us
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          <div className="mt-20 flex items-center justify-between border-t border-white/15 pt-6">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#718092]">
              Independent thinking. Purposeful engineering.
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#718092]">
              Techvoro / About
            </span>
          </div>
        </div>
      </section>

      {/* WHO WE ARE — WHITE */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-width grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#548C83]">
              01 / Who we are
            </p>

            <h2 className="mt-7 text-4xl font-medium leading-[1.15] tracking-tight text-[#101923] md:text-5xl">
              Technology is our craft.
              <span className="block text-[#82909D]">
                Progress is our purpose.
              </span>
            </h2>
          </div>

          <div className="space-y-7 text-base leading-8 text-[#596674]">
            <p>
              Every business has unique challenges. We believe the
              right technology can make those challenges easier to
              solve and create room for sustainable growth.
            </p>

            <p>
              Our approach brings together strategy, design, and
              software engineering to develop digital experiences
              around real business needs.
            </p>

            <p>
              Whether it is a mobile application, a web platform,
              or a custom business system, our focus is on building
              solutions that are useful, dependable, and ready to evolve.
            </p>

            <div className="border-l-2 border-[#72A9A1] py-2 pl-6">
              <p className="text-xl font-medium leading-8 text-[#17232E] md:text-2xl">
                We don't believe in technology for its own sake.
                We believe in technology that makes a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION — CONTRASTING PANELS */}
      <section className="bg-[#F3F6F5] py-24 md:py-32">
        <div className="container-width">
          <div className="mb-14 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#548C83]">
              02 / Our direction
            </p>

            <h2 className="mt-6 text-4xl font-medium tracking-tight text-[#101923] md:text-6xl">
              Guided by purpose.
              <span className="block text-[#82909D]">
                Driven by possibility.
              </span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="group relative overflow-hidden border border-[#DCE4E1] bg-white p-8 transition-colors duration-500 hover:border-[#72A9A1] md:p-12">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#72A9A1]/10 blur-[70px]" />

              <div className="relative">
                <Target size={30} className="text-[#548C83]" />

                <p className="mt-12 text-[10px] uppercase tracking-[0.25em] text-[#82909D]">
                  Our mission
                </p>

                <h3 className="mt-4 text-3xl font-medium text-[#101923]">
                  What drives us.
                </h3>

                <p className="mt-6 leading-8 text-[#596674]">
                  To empower businesses through thoughtfully designed
                  and expertly engineered software solutions that
                  improve experiences, simplify operations, and
                  unlock growth.
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden border border-[#17232E] bg-[#101923] p-8 transition-colors duration-500 hover:border-[#72A9A1]/60 md:p-12">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#72A9A1]/10 blur-[70px]" />

              <div className="relative">
                <Eye size={30} className="text-[#8BC0B6]" />

                <p className="mt-12 text-[10px] uppercase tracking-[0.25em] text-[#82909D]">
                  Our vision
                </p>

                <h3 className="mt-4 text-3xl font-medium text-white">
                  Where we're going.
                </h3>

                <p className="mt-6 leading-8 text-[#A6B0BC]">
                  To become a trusted global technology partner,
                  recognized for creating impactful digital products
                  and helping businesses compete in an increasingly
                  connected world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES — WHITE */}
      <section className="border-y border-[#E7ECEA] bg-white py-24 md:py-32">
        <div className="container-width">
          <div className="mb-16 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#548C83]">
              03 / What we believe
            </p>

            <h2 className="mt-6 text-4xl font-medium tracking-tight text-[#101923] md:text-6xl">
              The principles
              <span className="block text-[#82909D]">
                behind our work.
              </span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-[#596674]">
              Great software comes from more than technical ability.
              It requires the right thinking, standards, and commitment.
            </p>
          </div>

          <div className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group border-t border-[#DCE4E1] py-8 transition-colors duration-300 hover:border-[#548C83]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs tracking-[0.2em] text-[#82909D]">
                      {value.number}
                    </span>
                    <Icon
                      size={24}
                      strokeWidth={1.5}
                      className="text-[#548C83] transition-transform duration-300 group-hover:-translate-y-1"
                    />
                  </div>

                  <h3 className="mt-9 text-xl font-medium text-[#17232E]">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#596674]">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SPECIALIST NETWORK — WHITE */}
      <section className="bg-[#F3F6F5] py-24 md:py-32">
        <div className="container-width">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#548C83]">
                04 / Our people
              </p>

              <h2 className="mt-6 max-w-2xl text-4xl font-medium leading-[1.12] tracking-tight text-[#101923] md:text-6xl">
                The specialists behind
                <span className="block text-[#82909D]">
                  your next big idea.
                </span>
              </h2>

              <p className="mt-7 max-w-xl text-base leading-8 text-[#596674]">
                A network of technology strategists, product designers,
                software engineers, quality specialists, and delivery
                experts. You don't have to figure out who you need —
                Techvoro brings together the right specialists for
                your project.
              </p>

              <div className="mt-9 border-l-2 border-[#72A9A1] py-2 pl-6">
                <h3 className="text-lg font-semibold text-[#17232E]">
                  Our team profiles are being prepared
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-7 text-[#596674]">
                  We're preparing profiles that introduce the specialists
                  behind our work. In the meantime, tell us about your
                  project and we'll help you understand the expertise
                  it needs and who would be involved.
                </p>
              </div>

              <Link
                href="/contact"
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#172C32] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#315B58]"
              >
                Talk to our team
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="border border-[#DCE4E1] bg-white p-7 md:p-10">
              <div className="flex items-center justify-between border-b border-[#E7ECEA] pb-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#548C83]">
                    Our specialist network
                  </p>
                  <p className="mt-2 text-sm text-[#82909D]">
                    The expertise behind every project
                  </p>
                </div>
                <Users size={26} className="text-[#548C83]" />
              </div>

              <div className="mt-3">
                {specialists.map((specialist, index) => (
                  <div
                    key={specialist}
                    className="flex items-center gap-4 border-b border-[#E7ECEA] py-5 last:border-b-0"
                  >
                    <span className="text-xs tracking-[0.15em] text-[#82909D]">
                      0{index + 1}
                    </span>
                    <span className="flex-1 text-sm font-medium text-[#263541] md:text-base">
                      {specialist}
                    </span>
                    <CheckCircle2
                      size={17}
                      className="shrink-0 text-[#72A9A1]"
                    />
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs leading-6 text-[#82909D]">
                The specialists involved in each engagement are selected
                according to the project's scope, goals, and technical needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES — DARK */}
      <section className="border-y border-white/10 bg-[#0D141E] py-24 text-white md:py-32">
        <div className="container-width grid gap-14 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8BC0B6]">
              05 / What we do
            </p>

            <h2 className="mt-6 text-4xl font-medium tracking-tight md:text-5xl">
              One technology partner.
              <span className="block text-[#718092]">
                Multiple possibilities.
              </span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-[#A6B0BC]">
              We bring different areas of software development
              together to help businesses build, improve, and
              scale their digital capabilities.
            </p>

            <Link
              href="/services"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#8BC0B6] transition hover:text-white"
            >
              Discover our services
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div>
            {capabilities.map((capability, index) => (
              <div
                key={capability}
                className="flex items-center gap-5 border-b border-white/10 py-6"
              >
                <span className="text-xs text-[#718092]">
                  0{index + 1}
                </span>

                <span className="flex-1 text-sm font-medium text-[#DCE4E8] md:text-base">
                  {capability}
                </span>

                <CheckCircle2
                  size={18}
                  className="shrink-0 text-[#72A9A1]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="relative isolate overflow-hidden bg-[#080D14] py-28 text-white md:py-40">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_100%,rgba(80,139,130,0.17),transparent_60%)]" />

        <div className="container-width text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#8BC0B6]">
            06 / The next chapter
          </p>

          <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-medium leading-[1.15] tracking-tight md:text-6xl lg:text-7xl">
            The future doesn't
            <span className="block text-[#8BC0B6]">
              build itself.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl leading-8 text-[#A6B0BC]">
            It takes ideas, conviction, and the right people
            working together. Let's create something meaningful.
          </p>

          <Link
            href="/contact"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#72A9A1] px-8 py-4 text-sm font-semibold text-[#08120F] transition duration-300 hover:bg-[#8BC0B6]"
          >
            Start a Conversation
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
