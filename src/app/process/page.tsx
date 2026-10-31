
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import {
  Search,
  Compass,
  Palette,
  Code2,
  TestTube2,
  Rocket,
  Headset,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";

const stages = [
  {
    number: "01",
    title: "Discovery & Consultation",
    subtitle: "Understanding your vision",
    description:
      "Every successful project starts with understanding. We learn about your business, target audience, challenges, objectives, and expectations before recommending a solution.",
    deliverables: [
      "Initial project consultation",
      "Business and requirements assessment",
      "Target audience understanding",
      "Project objectives and priorities",
    ],
    icon: Search,
  },
  {
    number: "02",
    title: "Strategy & Planning",
    subtitle: "Defining the right direction",
    description:
      "With a clear understanding of your goals, we establish the project scope, define essential features, identify technical requirements, and create a practical development roadmap.",
    deliverables: [
      "Project scope and feature definition",
      "Technical recommendations",
      "Development roadmap",
      "Estimated timeline and milestones",
    ],
    icon: Compass,
  },
  {
    number: "03",
    title: "UI/UX Design",
    subtitle: "Creating the experience",
    description:
      "We transform requirements into intuitive digital experiences. Our design process considers usability, accessibility, visual consistency, and the needs of your users.",
    deliverables: [
      "User flows and wireframes",
      "Interface design",
      "Interactive prototypes where applicable",
      "Design review and refinement",
    ],
    icon: Palette,
  },
  {
    number: "04",
    title: "Development",
    subtitle: "Bringing your product to life",
    description:
      "Our engineers turn approved designs and requirements into working software. We focus on clean implementation, performance, security, and maintainable architecture.",
    deliverables: [
      "Frontend and backend development",
      "Database and API integration",
      "Third-party integrations where required",
      "Progress reviews and demonstrations",
    ],
    icon: Code2,
  },
  {
    number: "05",
    title: "Quality Assurance",
    subtitle: "Testing every important detail",
    description:
      "Before launch, we test the product to identify issues, validate functionality, and improve reliability across supported devices and environments.",
    deliverables: [
      "Functional testing",
      "Responsive and compatibility checks",
      "Bug identification and resolution",
      "Final quality review",
    ],
    icon: TestTube2,
  },
  {
    number: "06",
    title: "Launch & Deployment",
    subtitle: "Taking your product live",
    description:
      "Once the product is ready, we prepare the deployment process, configure the required environment, and support the release of your digital solution.",
    deliverables: [
      "Production deployment preparation",
      "Environment configuration",
      "Launch support",
      "Final handover and documentation",
    ],
    icon: Rocket,
  },
  {
    number: "07",
    title: "Ongoing Support & Growth",
    subtitle: "Building beyond launch",
    description:
      "Launching your product is an important milestone, not necessarily the end of the journey. We can help maintain, improve, and extend your solution as your needs evolve.",
    deliverables: [
      "Maintenance and technical assistance",
      "Performance improvements",
      "Feature enhancements",
      "Future development planning",
    ],
    icon: Headset,
  },
];

const principles = [
  {
    title: "Clear Communication",
    description:
      "You stay informed about project progress, important decisions, and upcoming milestones.",
  },
  {
    title: "Collaborative Decisions",
    description:
      "Your feedback helps shape the product throughout the design and development journey.",
  },
  {
    title: "Quality at Every Stage",
    description:
      "We consider usability, performance, and reliability throughout the project, not just before launch.",
  },
];

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-[#0B111B] text-[#F2F4F5]">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-24 pt-40 md:px-10 lg:pb-32">
        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#72A9A1]/10 blur-[150px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[350px] w-[350px] rounded-full bg-[#72A9A1]/5 blur-[120px]" />

        <div className="container-width relative mx-auto">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-[#72A9A1]/30 bg-[#72A9A1]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#8BC0B6]">
              Our Process
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
              From your idea
              <span className="block text-[#8BC0B6]">
                to something exceptional.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[#A6B0BC] md:text-lg">
              Building great software requires more than writing code.
              It takes clear thinking, thoughtful design, disciplined
              engineering, and collaboration at every stage. Here's
              how we approach every project.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#72A9A1] px-7 py-4 text-sm font-bold text-[#0B111B] transition hover:bg-[#8BC0B6]"
              >
                Discuss Your Project
                <ArrowUpRight size={17} />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white transition hover:border-[#72A9A1] hover:bg-white/5"
              >
                Explore Our Services
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process overview */}
      <section className="border-y border-white/10 bg-[#111A26] px-6 py-12 md:px-10">
        <div className="container-width mx-auto">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              ["01–07", "Project stages"],
              ["Strategy", "Before development"],
              ["Collaboration", "Throughout the journey"],
              ["Growth", "Beyond launch"],
            ].map(([heading, description]) => (
              <div key={heading}>
                <p className="text-xl font-bold text-[#8BC0B6] md:text-2xl">
                  {heading}
                </p>
                <p className="mt-2 text-xs text-[#A6B0BC] md:text-sm">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed stages */}
      <section className="px-6 py-24 md:px-10 lg:py-32">
        <div className="container-width mx-auto">
          <div className="mb-20 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8BC0B6]">
              The Journey
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
              A thoughtful approach to every stage.
            </h2>

            <p className="mt-6 leading-8 text-[#A6B0BC]">
              Each stage has a purpose. Together, they create a structured
              journey from the initial conversation to a product ready
              for real-world use.
            </p>
          </div>

          <div className="space-y-6">
            {stages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <div
                  key={stage.number}
                  className="group grid gap-8 rounded-3xl border border-white/10 bg-[#111A26] p-7 transition duration-300 hover:border-[#72A9A1]/40 md:p-10 lg:grid-cols-[0.8fr_1.5fr_1fr] lg:gap-12"
                >
                  {/* Stage identity */}
                  <div>
                    <div className="flex items-center justify-between lg:block">
                      <span className="text-4xl font-bold tracking-tight text-[#72A9A1]/60">
                        {stage.number}
                      </span>

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#72A9A1]/10 text-[#8BC0B6] lg:mt-8">
                        <Icon size={27} />
                      </div>
                    </div>

                    <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-[#8BC0B6]">
                      Stage {index + 1}
                    </p>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-2xl font-bold">
                      {stage.title}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-[#8BC0B6]">
                      {stage.subtitle}
                    </p>

                    <p className="mt-6 text-sm leading-8 text-[#A6B0BC]">
                      {stage.description}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div className="rounded-2xl border border-white/[0.06] bg-[#0B111B] p-6">
                    <h4 className="text-sm font-bold text-white">
                      Key activities
                    </h4>

                    <ul className="mt-5 space-y-4">
                      {stage.deliverables.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-6 text-[#A6B0BC]"
                        >
                          <CheckCircle2
                            size={17}
                            className="mt-1 shrink-0 text-[#72A9A1]"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Working principles */}
      <section className="bg-[#F4F6F5] px-6 py-24 text-[#142B45] md:px-10 lg:py-28">
        <div className="container-width mx-auto">
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#548A80]">
                How We Collaborate
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">
                A better process starts with a better partnership.
              </h2>

              <p className="mt-6 leading-8 text-[#52657A]">
                The best outcomes come from working together. We value
                transparency, thoughtful feedback, and a shared understanding
                of what success should look like.
              </p>
            </div>

            <div className="space-y-5">
              {principles.map((principle) => (
                <div
                  key={principle.title}
                  className="rounded-2xl border border-[#E5EAE8] bg-white p-6"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2
                      size={21}
                      className="text-[#548A80]"
                    />
                    <h3 className="font-bold">{principle.title}</h3>
                  </div>

                  <p className="mt-3 pl-8 text-sm leading-7 text-[#52657A]">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-6 py-24 md:px-10 lg:py-32">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#72A9A1]/10 blur-[140px]" />

        <div className="container-width relative mx-auto text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#72A9A1]/15 text-[#8BC0B6]">
            <MessageSquare size={29} />
          </div>

          <h2 className="mx-auto mt-8 max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Ready to take your idea
            <span className="block text-[#8BC0B6]">
              to the next stage?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-[#A6B0BC]">
            Tell us what you're planning to build. Let's discuss your
            requirements and explore the right way forward.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#72A9A1] px-8 py-4 text-sm font-bold text-[#0B111B] transition hover:bg-[#8BC0B6]"
          >
            Start Your Project
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
