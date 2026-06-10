"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, Phone, ArrowRight, Zap } from "lucide-react";

const TIERS = [
  {
    name: "Basic Check",
    price: "Free",
    description: "Quick site assessment for straightforward jobs",
    features: [
      "On-site inspection",
      "Written quote",
      "Safety overview",
      "No obligation",
    ],
    cta: "Book Free Check",
    href: "#contact",
    featured: false,
  },
  {
    name: "Standard Service",
    price: "From $99",
    description: "Most common repairs, faults, and small installations",
    features: [
      "Full fault diagnosis",
      "Parts & labour included",
      "Up to 3 hours on-site",
      "30-day workmanship guarantee",
      "Completion certificate",
    ],
    cta: "Get a Quote",
    href: "#contact",
    featured: true,
  },
  {
    name: "Full Installation",
    price: "Custom Quote",
    description: "Large-scale wiring, commercial & industrial projects",
    features: [
      "Dedicated project manager",
      "Full design & planning",
      "All permits & certification",
      "Priority scheduling",
      "12-month guarantee",
      "Aftercare support",
    ],
    cta: "Request Scope",
    href: "#contact",
    featured: false,
  },
];

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-[#0B1220]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3D7AB8]/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3D7AB8]/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(61, 122, 184,0.06),transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14 lg:mb-18"
        >
          <span className="inline-block text-[#3D7AB8] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Pricing
          </span>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
            Transparent, Fair Pricing
          </h2>
          <p className="text-[#F5F7FA]/45 text-lg max-w-xl mx-auto">
            No hidden fees. No surprise invoices. Get a clear quote before we start any work.
          </p>
        </motion.div>

        {/* Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className={`relative rounded-2xl p-7 flex flex-col ${
                tier.featured
                  ? "bg-gradient-to-b from-[#3D7AB8]/15 to-[#3D7AB8]/5 border border-[#3D7AB8]/40 shadow-[0_0_40px_rgba(61, 122, 184,0.15)]"
                  : "glass-card glass-card-hover"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#3D7AB8] text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-5">
                <h3 className="section-heading text-xl mb-1">{tier.name}</h3>
                <p className="text-[#F5F7FA]/45 text-sm">{tier.description}</p>
              </div>

              <div className="mb-6">
                <span
                  className={`text-3xl font-bold ${tier.featured ? "text-[#3D7AB8]" : "text-[#F5F7FA]"}`}
                  style={{ fontFamily: "var(--font-manrope)" }}
                >
                  {tier.price}
                </span>
              </div>

              <ul className="space-y-2.5 mb-7 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-[#F5F7FA]/60">
                    <CheckCircle className="w-4 h-4 text-[#3D7AB8] flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={tier.href}
                className={`flex items-center justify-center gap-2 font-semibold px-6 py-3 rounded-full transition-all text-sm ${
                  tier.featured
                    ? "bg-[#3D7AB8] hover:bg-[#4A8AC9] text-white glow-blue hover:glow-blue-lg"
                    : "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#3D7AB8]/30 text-[#F5F7FA]"
                }`}
              >
                {tier.featured && <Zap className="w-4 h-4" />}
                {tier.cta}
                {!tier.featured && <ArrowRight className="w-4 h-4" />}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-[#F5F7FA]/35 text-sm">
            All prices exclude materials unless stated. VAT may apply.{" "}
            <a href="tel:+15551234567" className="text-[#3D7AB8] hover:underline">
              Call us
            </a>{" "}
            for an exact quote on your job.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
