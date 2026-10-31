
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Smartphone,
  Globe,
  Layers3,
  Palette,
  ShoppingCart,
  Workflow,
  Check,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import ServicesCoreScene from "@/components/three/ServicesCoreScene";

const services = [
  {
    id: "mobile-app-development",
    number: "01",
    title: "Mobile App Development",
    subtitle: "Mobile experiences people love to use.",
    description:
      "We design and develop mobile applications that bring your business closer to its customers. Whether you're launching a new product, improving an existing service or building an entirely new digital business, we turn your vision into a reliable mobile experience.",
    icon: Smartphone,
    capabilities: [
      "iOS application development",
      "Android application development",
      "React Native development",
      "Flutter application development",
      "API and backend integration",
      "App maintenance and improvements",
    ],
    outcome:
      "A polished, scalable mobile product built around your users and business objectives.",
  },
  {
    id: "web-development",
    number: "02",
    title: "Web Development",
    subtitle: "Digital experiences built for performance.",
    description:
      "Your website or web application should do more than look good. We build responsive digital platforms that communicate your value, deliver excellent user experiences and support your business as it grows.",
    icon: Globe,
    capabilities: [
      "Business and corporate websites",
      "Custom web applications",
      "Progressive web applications",
      "E-commerce websites",
      "Frontend and backend development",
      "Website optimization and maintenance",
    ],
    outcome:
      "A fast, responsive and reliable web presence designed to support real business activity.",
  },
  {
    id: "custom-software",
    number: "03",
    title: "Custom Software Development",
    subtitle: "Software designed around the way you work.",
    description:
      "Off-the-shelf software doesn't always fit the way a business operates. We develop tailored software solutions that address specific operational challenges, simplify complex processes and give your team better tools to work with.",
    icon: Layers3,
    capabilities: [
      "Business management systems",
      "Customer relationship management systems",
      "Enterprise software solutions",
      "SaaS product development",
      "Database and API development",
      "Third-party system integrations",
    ],
    outcome:
      "Purpose-built software that fits your workflows and can evolve with your organization.",
  },
  {
    id: "ui-ux-design",
    number: "04",
    title: "UI/UX & Product Design",
    subtitle: "Thoughtful design. Intuitive experiences.",
    description:
      "Great digital products begin with understanding the people who use them. We combine user research, product thinking and interface design to create experiences that are intuitive, accessible and aligned with your brand.",
    icon: Palette,
    capabilities: [
      "User experience research",
      "User interface design",
      "Wireframing and prototyping",
      "Design systems",
      "Mobile and web product design",
      "Usability improvements",
    ],
    outcome:
      "Clear, consistent and user-focused product experiences that make complex interactions feel simple.",
  },
  {
    id: "ecommerce-development",
    number: "05",
    title: "E-commerce Development",
    subtitle: "Turn more visitors into customers.",
    description:
      "We create online shopping experiences that make it easier for customers to discover products, complete purchases and return to your business. From storefront design to payment and inventory integrations, we build around your commerce requirements.",
    icon: ShoppingCart,
    capabilities: [
      "Custom online storefronts",
      "Shopping cart and checkout experiences",
      "Payment gateway integration",
      "Product and inventory management",
      "Order management systems",
      "E-commerce platform customization",
    ],
    outcome:
      "A streamlined online shopping experience designed around your products, customers and operations.",
  },
  {
    id: "automation-integrations",
    number: "06",
    title: "Automation & Integrations",
    subtitle: "Less repetitive work. Better-connected systems.",
    description:
      "Disconnected tools and repetitive processes can slow down a growing business. We build integrations and automation solutions that connect your systems, reduce manual tasks and help information move more efficiently across your operations.",
    icon: Workflow,
    capabilities: [
      "Business workflow automation",
      "API integrations",
      "Third-party software connections",
      "Data synchronization",
      "Internal process automation",
      "Custom operational tools",
    ],
    outcome:
      "Connected systems and more efficient workflows that give your team time to focus on higher-value work.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080F18] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative isolate overflow-hidden border-b border-white/10 pb-16 pt-36 md:pb-24 md:pt-44">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -right-40 top-10 h-[500px] w-[500px] rounded-full bg-[#397E78]/10 blur-[150px]" />
          <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#397E78]/10 blur-[140px]" />
          <div className="absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(114,169,161,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(114,169,161,0.12)_1px,transparent_1px)] [background-size:70px_70px]" />
        </div>

        <div className="container-width relative grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#72A9A1]" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8BC0B6]">
                What we bring to the table
              </p>
            </div>

            <h1 className="mt-8 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
              Technology that
              <span className="block text-[#72A9A1]">
                moves business
              </span>
              forward.
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-8 text-[#A6B0BC] md:text-base">
              We bring strategy, design and engineering together to
              create digital products that solve problems, improve
              experiences and help ambitious businesses grow.
            </p>

            <a
              href="#our-services"
              className="group mt-9 inline-flex items-center gap-4 rounded-full border border-[#72A9A1]/40 bg-[#72A9A1]/10 px-6 py-4 text-sm font-semibold text-[#B8D9D3] transition duration-300 hover:border-[#72A9A1] hover:bg-[#72A9A1] hover:text-[#08120F]"
            >
              Explore our capabilities
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="relative mx-auto h-[320px] w-full max-w-[480px] sm:h-[420px] lg:h-[460px]">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#72A9A1]/10 blur-[90px]" />
            <ServicesCoreScene />

            <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] uppercase tracking-[0.3em] text-[#718B91]">
              Connected by innovation
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE NAVIGATION */}
      <section className="border-b border-white/10 bg-[#0D1722] py-8">
        <div className="container-width">
          <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8BC0B6]">
            Explore our services
          </p>

          <div className="flex flex-wrap gap-3">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-3 text-xs font-medium text-[#A6B0BC] transition duration-300 hover:border-[#72A9A1]/50 hover:bg-[#72A9A1]/10 hover:text-white"
              >
                <span className="mr-2 text-[#72A9A1]">
                  {service.number}
                </span>
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="our-services" className="relative py-20 md:py-28">
        <div className="pointer-events-none absolute -left-48 top-1/3 h-[500px] w-[500px] rounded-full bg-[#397E78]/[0.06] blur-[150px]" />

        <div className="container-width relative">
          <div className="mb-14 max-w-2xl md:mb-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8BC0B6]">
              Our capabilities
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              The right expertise.
              <span className="block text-[#72A9A1]">
                For the right challenges.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-8 text-[#A6B0BC]">
              From the first product concept to the systems that
              power your operations, we build technology around
              the challenges that matter.
            </p>
          </div>

          <div className="space-y-5">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.id}
                  id={service.id}
                  className="group scroll-mt-28 rounded-2xl border border-white/[0.09] bg-white/[0.035] p-7 transition-all duration-500 hover:border-[#72A9A1]/40 hover:bg-[#72A9A1]/[0.045] md:p-11"
                >
                  <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold tracking-[0.2em] text-[#8BC0B6]">
                          SERVICE {service.number}
                        </span>

                        <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#72A9A1]/20 bg-[#72A9A1]/10 text-[#8BC0B6] transition duration-500 group-hover:scale-110 group-hover:bg-[#72A9A1]/20">
                          <Icon size={23} strokeWidth={1.5} />
                        </span>
                      </div>

                      <h3 className="mt-8 text-2xl font-semibold leading-tight text-white md:text-3xl">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-sm font-medium text-[#8BC0B6]">
                        {service.subtitle}
                      </p>

                      <p className="mt-6 text-sm leading-8 text-[#A6B0BC]">
                        {service.description}
                      </p>
                    </div>

                    <div className="lg:border-l lg:border-white/10 lg:pl-10">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#DCE4E8]">
                        What we do
                      </p>

                      <div className="mt-6 grid gap-x-6 gap-y-5 sm:grid-cols-2">
                        {service.capabilities.map((capability) => (
                          <div
                            key={capability}
                            className="flex items-start gap-3"
                          >
                            <Check
                              size={16}
                              className="mt-1 shrink-0 text-[#72A9A1]"
                            />
                            <span className="text-sm leading-6 text-[#A6B0BC]">
                              {capability}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-10 border-t border-white/10 pt-7">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8BC0B6]">
                          The value
                        </p>

                        <p className="mt-3 text-sm leading-7 text-[#DCE4E8]">
                          {service.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-white/10 bg-[#0D1722] py-24 md:py-32"
      >
        <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-[#72A9A1]/10 blur-[120px]" />

        <div className="container-width relative">
          <div className="rounded-2xl border border-[#72A9A1]/20 bg-white/[0.035] px-8 py-14 md:px-16 md:py-20">
            <div className="max-w-3xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8BC0B6]">
                Have a project in mind?
              </p>

              <h2 className="mt-6 text-3xl font-semibold leading-tight text-white md:text-5xl">
                Let's build something
                <span className="block text-[#72A9A1]">
                  worth talking about.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-8 text-[#A6B0BC]">
                Tell us what you're planning. We'll help you explore
                the right approach and turn your idea into a practical
                digital solution.
              </p>

              <Link
                href="/contact"
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#72A9A1] px-7 py-4 text-sm font-semibold text-[#08120F] transition duration-300 hover:bg-[#8BC0B6]"
              >
                Start Your Project
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
