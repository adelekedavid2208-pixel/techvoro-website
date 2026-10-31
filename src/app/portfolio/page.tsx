
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Smartphone,
  Activity,
  ShoppingBag,
  Workflow,
  Check,
  Layers3,
  Globe,
  Code2,
  Palette,
  Database,
  ShieldCheck,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";

const projects = [
  {
    number: "01",
    id: "finova",
    name: "Finova",
    category: "Fintech",
    tagline: "Making personal finance feel effortless.",
    description:
      "A digital banking and personal finance concept designed to give users a clearer picture of their money. Finova brings account management, spending insights and financial planning into one intuitive experience.",
    challenge:
      "Financial information can be fragmented across accounts, transactions and different tools. Users need a simpler way to understand their finances and make informed decisions.",
    solution:
      "We imagined a unified financial platform with a clean dashboard, accessible transaction history, spending summaries and clear financial insights.",
    services: ["Product Strategy", "UI/UX Design", "Mobile Development"],
    technologies: ["React Native", "TypeScript", "Node.js", "PostgreSQL"],
    features: [
      "Personal finance dashboard",
      "Account and transaction management",
      "Spending insights and categorization",
      "Savings goals and tracking",
      "Secure user authentication",
    ],
    icon: Activity,
    visual: "finova",
  },
  {
    number: "02",
    id: "medflow",
    name: "MedFlow",
    category: "Healthcare",
    tagline: "A more connected patient experience.",
    description:
      "A healthcare management platform concept designed to simplify the relationship between patients, healthcare professionals and appointment services.",
    challenge:
      "Managing appointments and patient information across disconnected processes can create unnecessary friction for patients and healthcare teams.",
    solution:
      "We designed a centralized digital experience for appointment scheduling, patient profiles, care coordination and access to essential information.",
    services: ["Product Design", "Web Development", "UI/UX Design"],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    features: [
      "Appointment scheduling",
      "Patient profile management",
      "Healthcare provider dashboard",
      "Appointment status tracking",
      "Responsive patient interface",
    ],
    icon: Activity,
    visual: "medflow",
  },
  {
    number: "03",
    id: "cartly",
    name: "Cartly",
    category: "E-commerce",
    tagline: "A smoother way to shop online.",
    description:
      "An e-commerce storefront concept focused on product discovery, intuitive navigation and a streamlined shopping experience across desktop and mobile devices.",
    challenge:
      "Online shoppers expect a clear, convenient buying journey. Poor product organization and complicated checkout experiences can make shopping unnecessarily difficult.",
    solution:
      "We created a commerce experience centered on clean product presentation, intuitive browsing, shopping cart management and a simplified checkout journey.",
    services: ["E-commerce Development", "Frontend Development", "UI/UX Design"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe Integration"],
    features: [
      "Product discovery and search",
      "Product detail pages",
      "Shopping cart management",
      "Checkout experience",
      "Responsive storefront",
    ],
    icon: ShoppingBag,
    visual: "cartly",
  },
  {
    number: "04",
    id: "nexus",
    name: "Nexus",
    category: "Business Software",
    tagline: "Bringing business operations together.",
    description:
      "A business operations and workflow management concept designed to help teams organize projects, monitor tasks and keep important operational information in one place.",
    challenge:
      "Growing teams often rely on disconnected tools to manage projects, tasks and communication. This can make it harder to maintain visibility across business operations.",
    solution:
      "We designed a unified workspace with project overviews, task management, team activity and workflow visibility.",
    services: ["Custom Software", "Web Application Development", "Product Design"],
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    features: [
      "Project and task management",
      "Team activity dashboard",
      "Workflow tracking",
      "Role-based access",
      "Operational reporting interface",
    ],
    icon: Workflow,
    visual: "nexus",
  },
];

function ProductPreview({ type }: { type: string }) {
  return (
    <div className="relative min-h-[310px] overflow-hidden rounded-xl border border-white/[0.08] bg-[#111C29] p-5 md:min-h-[370px] md:p-7">
      <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#72A9A1]/10 blur-[90px]" />

      {type === "finova" && (
        <div className="relative">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#72A9A1]/15 text-[#8BC0B6]">
                <Activity size={16} />
              </span>
              <span className="text-sm font-semibold text-white">finova</span>
            </div>
            <span className="text-[10px] text-[#A6B0BC]">OVERVIEW</span>
          </div>

          <p className="mt-6 text-xs text-[#A6B0BC]">Total account balance</p>
          <h3 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            $24,680<span className="text-xl text-[#A6B0BC]">.50</span>
          </h3>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-white/[0.07] bg-[#182535] p-4">
              <p className="text-[10px] text-[#A6B0BC]">Income</p>
              <p className="mt-2 text-lg font-semibold text-white">$4,850</p>
              <p className="mt-1 text-[10px] text-[#8BC0B6]">Monthly overview</p>
            </div>
            <div className="rounded-lg border border-white/[0.07] bg-[#182535] p-4">
              <p className="text-[10px] text-[#A6B0BC]">Expenses</p>
              <p className="mt-2 text-lg font-semibold text-white">$2,140</p>
              <p className="mt-1 text-[10px] text-[#A6B0BC]">Monthly overview</p>
            </div>
          </div>

          <div className="mt-4 rounded-lg border border-white/[0.07] bg-[#182535] p-4">
            <div className="flex justify-between">
              <span className="text-xs text-white">Spending overview</span>
              <span className="text-[10px] text-[#A6B0BC]">Illustrative data</span>
            </div>
            <div className="mt-5 flex h-12 items-end gap-2">
              {[35, 55, 42, 75, 50, 90, 65, 78, 48, 85, 60, 95].map(
                (height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-sm bg-[#72A9A1]/70"
                    style={{ height: `${height}%` }}
                  />
                )
              )}
            </div>
          </div>
        </div>
      )}

      {type === "medflow" && (
        <div className="relative">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#72A9A1]/15 text-[#8BC0B6]">
                <Activity size={16} />
              </span>
              <span className="text-sm font-semibold text-white">MedFlow</span>
            </div>
            <span className="text-[10px] text-[#A6B0BC]">PATIENT PORTAL</span>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div>
              <p className="text-xs text-[#A6B0BC]">Patient dashboard</p>
              <h3 className="mt-2 text-xl font-semibold text-white">Welcome back</h3>
            </div>
            <span className="rounded-full bg-[#72A9A1]/15 px-3 py-2 text-[10px] text-[#8BC0B6]">
              Patient view
            </span>
          </div>

          <div className="mt-6 rounded-lg border border-white/[0.07] bg-[#182535] p-4">
            <p className="text-[10px] text-[#A6B0BC]">Next appointment</p>
            <div className="mt-3 flex items-center gap-4">
              <div className="flex h-14 w-14 flex-col items-center justify-center rounded-lg bg-[#72A9A1]/15 text-[#8BC0B6]">
                <span className="text-lg font-bold">18</span>
                <span className="text-[9px]">JUN</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">General consultation</p>
                <p className="mt-1 text-xs text-[#A6B0BC]">10:30 AM · Consultation room</p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {["Appointments", "Health records"].map((item) => (
              <div key={item} className="rounded-lg border border-white/[0.07] bg-[#182535] p-4">
                <div className="h-7 w-7 rounded-md bg-[#72A9A1]/15" />
                <p className="mt-3 text-xs font-medium text-white">{item}</p>
                <p className="mt-1 text-[10px] text-[#A6B0BC]">View details</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {type === "cartly" && (
        <div className="relative">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#72A9A1]/15 text-[#8BC0B6]">
                <ShoppingBag size={16} />
              </span>
              <span className="text-sm font-semibold text-white">cartly</span>
            </div>
            <span className="text-[10px] text-[#A6B0BC]">ONLINE STORE</span>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">Discover products</h3>
            <span className="text-[10px] text-[#8BC0B6]">Shop all →</span>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              { name: "Essential", price: "$48", shade: "bg-[#31423F]" },
              { name: "Everyday", price: "$65", shade: "bg-[#44433A]" },
              { name: "Classic", price: "$82", shade: "bg-[#343B49]" },
            ].map((product) => (
              <div key={product.name}>
                <div className={`flex h-28 items-center justify-center rounded-lg ${product.shade}`}>
                  <ShoppingBag size={30} className="text-white/60" strokeWidth={1.2} />
                </div>
                <p className="mt-3 text-xs font-medium text-white">{product.name}</p>
                <p className="mt-1 text-xs text-[#A6B0BC]">{product.price}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between rounded-lg border border-white/[0.07] bg-[#182535] p-4">
            <div>
              <p className="text-xs font-semibold text-white">Shopping made simple</p>
              <p className="mt-1 text-[10px] text-[#A6B0BC]">A clean, considered checkout experience</p>
            </div>
            <ArrowUpRight size={18} className="text-[#8BC0B6]" />
          </div>
        </div>
      )}

      {type === "nexus" && (
        <div className="relative">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#72A9A1]/15 text-[#8BC0B6]">
                <Workflow size={16} />
              </span>
              <span className="text-sm font-semibold text-white">Nexus</span>
            </div>
            <span className="text-[10px] text-[#A6B0BC]">WORKSPACE</span>
          </div>

          <div className="mt-6">
            <p className="text-xs text-[#A6B0BC]">Workspace overview</p>
            <h3 className="mt-2 text-xl font-semibold text-white">Project dashboard</h3>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2">
            {[
              ["12", "Projects"],
              ["28", "Tasks"],
              ["08", "Members"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-lg border border-white/[0.07] bg-[#182535] p-3">
                <p className="text-xl font-semibold text-white">{value}</p>
                <p className="mt-1 text-[10px] text-[#A6B0BC]">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-lg border border-white/[0.07] bg-[#182535] p-4">
            <p className="text-xs font-semibold text-white">Current projects</p>
            {[
              ["Website redesign", "75%"],
              ["Mobile application", "55%"],
              ["Operations system", "35%"],
            ].map(([name, progress]) => (
              <div key={name} className="mt-4">
                <div className="flex justify-between text-[10px]">
                  <span className="text-[#D0D6DC]">{name}</span>
                  <span className="text-[#8BC0B6]">{progress}</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-[#72A9A1]" style={{ width: progress }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <span className="absolute bottom-3 right-4 text-[8px] tracking-[0.15em] text-white/30">
        ILLUSTRATIVE CONCEPT INTERFACE
      </span>
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0B111B] text-[#F2F4F5]">
      <Navbar />

      {/* Hero */}
      <section className="relative border-b border-white/[0.07] pb-20 pt-40 md:pb-28 md:pt-48">
        <div className="pointer-events-none absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#72A9A1]/10 blur-[150px]" />

        <div className="container-width relative">
          <div className="flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#72A9A1]" />
            <span className="text-[10px] font-semibold tracking-[0.2em] text-[#8BC0B6]">
              OUR WORK
            </span>
          </div>

          <div className="mt-8 grid gap-10 md:grid-cols-[1.4fr_0.6fr] md:items-end">
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.12] tracking-tight text-white md:text-6xl xl:text-7xl">
              Digital experiences.
              <span className="block text-[#72A9A1]">
                Thoughtfully engineered.
              </span>
            </h1>

            <div>
              <p className="text-sm leading-8 text-[#A6B0BC] md:text-base">
                Explore a collection of product concepts demonstrating
                how we approach design, software engineering and
                digital problem-solving across different industries.
              </p>
              <a
                href="#featured-projects"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#8BC0B6] transition hover:gap-4"
              >
                Explore our projects
                <ArrowRight size={17} />
              </a>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 border-t border-white/[0.08] pt-8 md:grid-cols-4">
            {[
              ["04", "Featured concepts"],
              ["04", "Industry areas"],
              ["06+", "Core capabilities"],
              ["01", "Design philosophy"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="text-2xl font-bold text-white md:text-3xl">{value}</p>
                <p className="mt-2 text-xs text-[#A6B0BC]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project categories */}
      <section className="border-b border-white/[0.07] bg-[#101925] py-8">
        <div className="container-width">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A6B0BC]">
            Explore by industry
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              ["Fintech", "#finova"],
              ["Healthcare", "#medflow"],
              ["E-commerce", "#cartly"],
              ["Business Software", "#nexus"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="border border-white/[0.1] px-4 py-2.5 text-xs font-medium text-[#D0D6DC] transition hover:border-[#72A9A1]/50 hover:text-[#8BC0B6]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured case studies */}
      <section id="featured-projects" className="container-width py-20 md:py-28">
        <div className="mb-16 max-w-2xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#72A9A1]">
            Featured case studies
          </p>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Different challenges.
            <span className="block text-[#A6B0BC]">
              Thoughtful digital solutions.
            </span>
          </h2>
          <p className="mt-5 text-sm leading-8 text-[#A6B0BC]">
            Each concept explores a different product opportunity,
            from the initial challenge to the proposed experience
            and technology behind it.
          </p>
        </div>

        <div className="space-y-20 md:space-y-28">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <article
                key={project.id}
                id={project.id}
                className="scroll-mt-28"
              >
                <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold tracking-[0.16em] text-[#72A9A1]">
                      PROJECT {project.number}
                    </span>
                    <span className="h-1 w-1 rounded-full bg-[#52657A]" />
                    <span className="text-xs text-[#A6B0BC]">{project.category}</span>
                  </div>
                  <span className="border border-[#72A9A1]/30 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.13em] text-[#8BC0B6]">
                    Concept Project
                  </span>
                </div>

                <div className={`grid gap-8 lg:grid-cols-2 lg:items-center ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <ProductPreview type={project.visual} />

                  <div className="py-2 lg:px-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#72A9A1]/20 bg-[#72A9A1]/10 text-[#8BC0B6]">
                      <Icon size={21} strokeWidth={1.6} />
                    </div>

                    <h3 className="mt-6 text-3xl font-bold text-white md:text-4xl">
                      {project.name}
                    </h3>
                    <p className="mt-3 text-base font-medium text-[#8BC0B6]">
                      {project.tagline}
                    </p>
                    <p className="mt-5 text-sm leading-8 text-[#A6B0BC]">
                      {project.description}
                    </p>

                    <div className="mt-8 grid gap-6 sm:grid-cols-2">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#72A9A1]">
                          The challenge
                        </p>
                        <p className="mt-3 text-xs leading-7 text-[#A6B0BC]">
                          {project.challenge}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#72A9A1]">
                          Our solution
                        </p>
                        <p className="mt-3 text-xs leading-7 text-[#A6B0BC]">
                          {project.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project specifications */}
                <div className="mt-9 grid gap-8 border-y border-white/[0.08] py-8 md:grid-cols-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <Layers3 size={15} className="text-[#72A9A1]" />
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
                        Services delivered in concept
                      </p>
                    </div>
                    <div className="mt-5 space-y-3">
                      {project.services.map((service) => (
                        <p key={service} className="flex items-center gap-2 text-xs text-[#A6B0BC]">
                          <Check size={13} className="text-[#72A9A1]" />
                          {service}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <Code2 size={15} className="text-[#72A9A1]" />
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
                        Proposed technology
                      </p>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span key={technology} className="border border-white/[0.09] bg-white/[0.03] px-3 py-2 text-[10px] text-[#C0C8D0]">
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <Check size={15} className="text-[#72A9A1]" />
                      <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
                        Key capabilities
                      </p>
                    </div>
                    <div className="mt-5 space-y-3">
                      {project.features.map((feature) => (
                        <p key={feature} className="text-xs leading-5 text-[#A6B0BC]">
                          {feature}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-y border-white/[0.07] bg-[#101925] py-20 md:py-24">
        <div className="container-width">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#72A9A1]">
              What goes into our work
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-white md:text-4xl">
              More than development.
              <span className="block text-[#A6B0BC]">
                A complete digital approach.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-px border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Palette,
                title: "Product & UI/UX Design",
                text: "Clear product thinking, intuitive user journeys and considered interfaces.",
              },
              {
                icon: Smartphone,
                title: "Mobile Applications",
                text: "Purposeful mobile experiences designed for everyday use.",
              },
              {
                icon: Globe,
                title: "Web Applications",
                text: "Responsive web platforms built around real business needs.",
              },
              {
                icon: Code2,
                title: "Custom Software",
                text: "Software solutions shaped around specific operational challenges.",
              },
              {
                icon: Database,
                title: "Backend Engineering",
                text: "Data structures, APIs and integrations that connect digital products.",
              },
              {
                icon: ShieldCheck,
                title: "Quality & Reliability",
                text: "A considered approach to maintainability, performance and security.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-[#111C29] p-7 md:p-9">
                  <Icon size={23} className="text-[#72A9A1]" strokeWidth={1.5} />
                  <h3 className="mt-6 text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#A6B0BC]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container-width">
          <div className="relative overflow-hidden border border-white/[0.08] bg-[#111C29] px-8 py-14 md:px-16 md:py-20">
            <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-[#72A9A1]/15 blur-[100px]" />

            <div className="relative max-w-3xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8BC0B6]">
                Your idea. Our expertise.
              </p>
              <h2 className="mt-6 text-3xl font-bold leading-tight text-white md:text-5xl">
                Let's create something
                <span className="block text-[#72A9A1]">
                  worth experiencing.
                </span>
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-8 text-[#A6B0BC]">
                Have a product idea, a business challenge or an
                existing platform that needs improvement? Let's
                explore what we can build together.
              </p>
              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-3 bg-[#72A9A1] px-7 py-4 text-sm font-semibold text-[#0B111B] transition hover:bg-[#8BC0B6]"
              >
                Discuss Your Project
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
