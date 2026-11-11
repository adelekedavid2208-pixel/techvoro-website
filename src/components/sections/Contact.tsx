
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Layers3,
  Lightbulb,
  Send,
  Sparkles,
} from "lucide-react";

const services = [
  "Mobile App Development",
  "Web Development",
  "Custom Software Development",
  "UI/UX & Product Design",
  "E-commerce Development",
  "Automation & Integrations",
  "Not Sure Yet",
];

const budgets = [
  "Under $2,500",
  "$2,500 – $5,000",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000+",
  "Let's discuss",
];

const timelines = [
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "Flexible",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xwllnakb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      

if (!response.ok) {
  throw new Error("Submission failed");
}

// Meta Pixel Lead tracking
const metaPixel = (
  window as Window & {
    fbq?: (...args: (string | Record<string, unknown>)[]) => void;
  }
).fbq;

if (typeof metaPixel === "function") {
  metaPixel("track", "Lead");
}

setSubmitted(true);
form.reset();



if (typeof metaPixel === "function") {
  metaPixel("track", "Lead");
}

setSubmitted(true);
form.reset();

    } catch {
      alert("Your request could not be sent. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0B111B] px-6 py-28 text-white md:px-12 lg:px-20"
    >
      {/* Background lighting */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#72A9A1]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#72A9A1]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#72A9A1]/30 bg-[#72A9A1]/10 px-4 py-2 text-sm text-[#9BC9C0]">
            <Sparkles size={15} />
            Let's build something meaningful
          </div>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Have an idea?
            <span className="block text-[#72A9A1]">
              Let's make it real.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#A6B0BC] md:text-lg">
            Tell us what you're planning. Whether it's a new digital product,
            a business platform, or a better way to work, we'd like to hear
            about it.
          </p>
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Visual panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative min-h-[520px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#172633] via-[#111C29] to-[#0D151F] p-8"
          >
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:42px_42px]" />

            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#72A9A1]">
                The Techvoro approach
              </p>

              <h3 className="mt-4 max-w-sm text-3xl font-semibold leading-snug">
                Turning complex ideas into elegant digital experiences.
              </h3>

              {/* Animated orb */}
              <div className="relative mx-auto my-10 flex h-56 w-56 items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 24,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-52 w-52 rounded-full border border-[#72A9A1]/30"
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-40 w-40 rounded-full border border-dashed border-[#72A9A1]/40"
                />

                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    boxShadow: [
                      "0 0 35px rgba(114,169,161,0.15)",
                      "0 0 75px rgba(114,169,161,0.4)",
                      "0 0 35px rgba(114,169,161,0.15)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-32 w-32 items-center justify-center rounded-full border border-[#A9D3CA]/40 bg-gradient-to-br from-[#9BC9C0] via-[#477D78] to-[#142B35]"
                >
                  <Code2 size={42} className="text-white" />
                </motion.div>

                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute right-0 top-5 rounded-xl border border-white/10 bg-[#1A2935]/90 p-3 shadow-xl backdrop-blur-xl"
                >
                  <Layers3 className="text-[#9BC9C0]" size={20} />
                </motion.div>

                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-5 left-0 rounded-xl border border-white/10 bg-[#1A2935]/90 p-3 shadow-xl backdrop-blur-xl"
                >
                  <Lightbulb className="text-[#9BC9C0]" size={20} />
                </motion.div>
              </div>

              {/* Floating information cards */}
              <div className="space-y-3">
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
                  <div className="rounded-xl bg-[#72A9A1]/15 p-3">
                    <Lightbulb className="text-[#9BC9C0]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Your vision</p>
                    <p className="mt-1 text-xs text-[#A6B0BC]">
                      We start by understanding your goals.
                    </p>
                  </div>
                  <ArrowUpRight className="ml-auto text-[#72A9A1]" size={18} />
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
                  <div className="rounded-xl bg-[#72A9A1]/15 p-3">
                    <Layers3 className="text-[#9BC9C0]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Our expertise</p>
                    <p className="mt-1 text-xs text-[#A6B0BC]">
                      Strategy, design and engineering.
                    </p>
                  </div>
                  <ArrowUpRight className="ml-auto text-[#72A9A1]" size={18} />
                </div>
              </div>

              <p className="mt-8 text-sm text-[#A6B0BC]">
                Thoughtful planning. Exceptional execution. Technology that
                moves your business forward.
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-3xl border border-white/10 bg-[#111B27]/90 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-10"
          >
            {submitted ? (
              <div className="flex min-h-[550px] flex-col items-center justify-center text-center">
                <CheckCircle2 size={58} className="text-[#72A9A1]" />
                <h3 className="mt-6 text-3xl font-semibold">
                  Request received.
                </h3>
                <p className="mt-4 max-w-sm leading-7 text-[#A6B0BC]">
                  Thank you for sharing your project with Techvoro. We'll be
                  in touch as soon as possible.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-full border border-[#72A9A1]/40 px-6 py-3 text-sm text-[#9BC9C0] transition hover:bg-[#72A9A1]/10"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <p className="text-sm font-medium text-[#72A9A1]">
                    PROJECT ENQUIRY
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold md:text-3xl">
                    Request a quote
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#A6B0BC]">
                    Share a few details and we'll review your requirements.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm text-[#D5DCE2]">
                        Full name *
                      </label>
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        className="contact-input"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm text-[#D5DCE2]">
                        Business email *
                      </label>
                      <input
                        required
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        className="contact-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-[#D5DCE2]">
                      Company name
                    </label>
                    <input
                      name="company"
                      type="text"
                      placeholder="Your company (optional)"
                      className="contact-input"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-[#D5DCE2]">
                      What do you need? *
                    </label>
                    <select
                      required
                      name="service"
                      defaultValue=""
                      className="contact-input"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm text-[#D5DCE2]">
                        Estimated budget
                      </label>
                      <select
                        name="budget"
                        defaultValue=""
                        className="contact-input"
                      >
                        <option value="" disabled>
                          Select a budget
                        </option>
                        {budgets.map((budget) => (
                          <option key={budget} value={budget}>
                            {budget}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm text-[#D5DCE2]">
                        Project timeline
                      </label>
                      <select
                        name="timeline"
                        defaultValue=""
                        className="contact-input"
                      >
                        <option value="" disabled>
                          Select a timeline
                        </option>
                        {timelines.map((timeline) => (
                          <option key={timeline} value={timeline}>
                            {timeline}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-[#D5DCE2]">
                      Tell us about your project *
                    </label>
                    <textarea
                      required
                      name="details"
                      rows={5}
                      placeholder="What are you looking to build? What problem should it solve?"
                      className="contact-input resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#72A9A1] px-7 py-4 font-semibold text-[#0B111B] transition duration-300 hover:bg-[#8BC0B6] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Sending request..." : "Submit project enquiry"}
                    <Send
                      size={17}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </button>

                  <p className="text-center text-xs leading-5 text-[#7F8B98]">
                    Your project information will only be used to respond to
                    your enquiry.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
