import Link from "next/link";
import {
  Apple,
  Smartphone,
  Atom,
  Cpu,
  Code2,
  Globe,
  Layers3,
  Palette,
  ShoppingCart,
  Workflow,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import ServicesCoreScene from "@/components/three/ServicesCoreScene";

const services = [
  { title: "iOS App Development", icon: Apple, number: "01" },
  { title: "Android App Development", icon: Smartphone, number: "02" },
  { title: "React Native Development", icon: Atom, number: "03" },
  { title: "IoT App Development", icon: Cpu, number: "04" },
  { title: "Flutter App Development", icon: Code2, number: "05" },
  { title: "Web Application Development", icon: Globe, number: "06" },
  { title: "Custom Software Development", icon: Layers3, number: "07" },
  { title: "UI/UX Design", icon: Palette, number: "08" },
  { title: "E-commerce Development", icon: ShoppingCart, number: "09" },
  { title: "Business Process Automation", icon: Workflow, number: "10" },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative isolate overflow-hidden border-t border-white/10 bg-[#080F18] py-24 text-white md:py-32"
    >
      {/* Atmospheric background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#397E78]/10 blur-[140px]" />
        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#397E78]/10 blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(114,169,161,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(114,169,161,0.12)_1px,transparent_1px)] [background-size:70px_70px]" />
      </div>

      <div className="container-width relative">
        {/* Introduction */}
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="relative z-10 py-8">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#72A9A1]" />
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8BC0B6]">
                What we do
              </p>
            </div>

            <h2 className="mt-7 max-w-xl text-4xl font-semibold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Engineering the
              <span className="block text-[#72A9A1]">
                next generation
              </span>
              of digital products.
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-8 text-[#A6B0BC] md:text-base">
              We turn ambitious ideas into powerful digital products.
              From mobile applications and web platforms to custom
              software, we combine thoughtful design and engineering
              to build solutions that move businesses forward.
            </p>

            <Link
              href="/services"
              className="group mt-9 inline-flex items-center gap-4 rounded-full border border-[#72A9A1]/40 bg-[#72A9A1]/10 px-6 py-4 text-sm font-semibold text-[#B8D9D3] transition duration-300 hover:border-[#72A9A1] hover:bg-[#72A9A1] hover:text-[#08120F]"
            >
              Explore all services
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          {/* 3D visual */}
          <div className="relative mx-auto h-[340px] w-full max-w-[500px] sm:h-[440px] lg:h-[500px]">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#72A9A1]/10 blur-[90px]" />

            <ServicesCoreScene />

            <div className="pointer-events-none absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] uppercase tracking-[0.35em] text-[#718B91]">
              Connected by innovation
            </div>
          </div>
        </div>

        {/* Section divider */}
        <div className="my-14 flex items-center gap-5 md:my-20">
          <span className="h-px flex-1 bg-white/10" />
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#718092]">
            Our capabilities
          </span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href="/services"
                className="group relative flex min-h-[190px] flex-col justify-between overflow-hidden rounded-xl border border-white/[0.09] bg-white/[0.035] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#72A9A1]/50 hover:bg-[#72A9A1]/[0.07] hover:shadow-[0_15px_45px_rgba(0,0,0,0.25)]"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#72A9A1]/0 blur-3xl transition-all duration-500 group-hover:bg-[#72A9A1]/15" />

                <div className="relative flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#72A9A1]/20 bg-[#72A9A1]/10 text-[#8BC0B6] transition-all duration-500 group-hover:scale-110 group-hover:border-[#72A9A1]/50 group-hover:bg-[#72A9A1]/20">
                    <Icon size={23} strokeWidth={1.6} />
                  </span>

                  <span className="text-[10px] tracking-[0.2em] text-[#647583]">
                    {service.number}
                  </span>
                </div>

                <div className="relative mt-8 flex items-end justify-between gap-2">
                  <span className="max-w-[180px] text-sm font-medium leading-6 text-[#DCE4E8] transition-colors duration-300 group-hover:text-white">
                    {service.title}
                  </span>

                  <ArrowUpRight
                    size={17}
                    className="shrink-0 text-[#60777B] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#8BC0B6]"
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom link */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 text-sm font-medium text-[#A6B0BC] transition hover:text-[#8BC0B6]"
          >
            Discover our full range of capabilities
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-2"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}