
import Navbar from "@/components/layout/Navbar";
import HeroSceneLoader from "@/components/three/HeroSceneLoader";
import HeroEyebrow from "@/components/ui/HeroEyebrow";
import Services from "@/components/sections/Services";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import Link from "next/link";
import AboutPreview from "@/components/sections/AboutPreview";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080D19]">
      <Navbar />

      {/* Background lighting */}
      <div className="pointer-events-none absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-[#477BFF]/10 blur-[150px]" />

      <section className="container-width relative grid min-h-screen items-center gap-8 pt-28 pb-16 lg:grid-cols-2">

        {/* Hero content */}
        <div className="relative z-10">
          <HeroEyebrow />
        

          <h1 className="max-w-3xl text-5xl font-bold leading-[1.08] tracking-tight text-white md:text-6xl xl:text-7xl">
            Ideas Deserve
            <br />
            Great Apps.
            <span className="mt-2 block bg-gradient-to-r from-[#477BFF] to-[#39D5E8] bg-clip-text text-transparent">
              We Make Them Happen.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-8 text-[#A6B0C2] md:text-lg">
            We design and develop powerful mobile apps, web applications
            and custom software that help ambitious businesses turn
            bold ideas into exceptional digital products.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-[#477BFF] px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-[#477BFF]/20 transition hover:-translate-y-1 hover:bg-[#3468F5]"
            >
              Start Your Project →
            </a>

            <Link
  href="/portfolio"
  className="rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/[0.05]"
>
  Explore Our Work
</Link>
          </div>

          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/10 pt-8">
            <div>
              <p className="text-sm font-semibold text-white">
                Strategy First
              </p>
              <p className="mt-1 text-xs text-[#A6B0C2]">
                Built around your goals
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Built to Scale
              </p>
              <p className="mt-1 text-xs text-[#A6B0C2]">
                Ready for what's next
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Global Standards
              </p>
              <p className="mt-1 text-xs text-[#A6B0C2]">
                Quality without borders
              </p>
            </div>
          </div>
        </div>

        {/* 3D experience */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-10 rounded-full bg-[#477BFF]/10 blur-[100px]" />
          <HeroSceneLoader />
        </div>
      </section>
                        <Services />
      <PortfolioPreview />
      <AboutPreview />
      <Process />
      <Contact />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#080D19]">
        <div className="container-width flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-bold text-white">Techvoro</p>
            <p className="mt-2 text-sm text-[#A6B0C2]">
              Building digital products that move businesses forward.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-[#A6B0C2]">
            <Link href="/privacy-policy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              Terms of Service
            </Link>
            <a href="mailto:techvoro.contact@gmail.com" className="transition hover:text-white">
              Contact
            </a>
          </div>

          <p className="text-xs text-[#A6B0C2]">
          © 2026 Techvoro. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
