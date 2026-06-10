"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Search, FileText, CheckCircle, ChevronRight } from "lucide-react";
import { GradientBars } from "@/components/ui/gradient-bars";

const STEPS = [
  {
    step: "01",
    icon: Phone,
    title: "Call or Book Online",
    description:
      "Reach us by phone, WhatsApp, or our online form. Describe your issue and we'll schedule the best time for you — often same day.",
  },
  {
    step: "02",
    icon: Search,
    title: "On-Site Inspection",
    description:
      "Our certified electrician arrives on time, assesses your electrical system thoroughly, and identifies exactly what needs to be done.",
  },
  {
    step: "03",
    icon: FileText,
    title: "Clear Quote",
    description:
      "You receive a transparent, itemised quote before any work begins. No hidden charges — what we quote is what you pay.",
  },
  {
    step: "04",
    icon: CheckCircle,
    title: "Job Complete",
    description:
      "We carry out the work to the highest standard, clean up completely, and provide full documentation and safety certificates.",
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="relative py-24 lg:py-32 bg-[#02050A] overflow-hidden">
      {/* Animated gradient bars background */}
      <GradientBars
        numBars={20}
        gradientFrom="rgba(61, 122, 184, 0.9)"
        gradientTo="transparent"
        animationDuration={2.4}
      />
      {/* Soft fade only at the very top so bars blend into the section above */}
      <div className="absolute inset-x-0 top-0 z-1 h-32 bg-[linear-gradient(to_bottom,#02050A,transparent)]" />
      <div className="absolute inset-0 z-1 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block text-[#3D7AB8] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            How It Works
          </span>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
            Simple 4-Step Process
          </h2>
          <p className="text-[#F5F7FA]/45 text-lg max-w-xl mx-auto">
            From first contact to finished job — we make the whole process effortless.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-0 right-0 h-px">
            <div className="absolute left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-[#3D7AB8]/15 via-[#3D7AB8]/40 to-[#3D7AB8]/15" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.12 }}
                  className="flex flex-col items-center text-center relative"
                >
                  {/* Arrow between steps (mobile/tablet) */}
                  {i < STEPS.length - 1 && (
                    <ChevronRight className="hidden sm:block lg:hidden absolute -right-4 top-14 w-5 h-5 text-[#3D7AB8]/30" />
                  )}

                  {/* Icon circle */}
                  <div className="relative mb-5">
                    {/* Step number */}
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#3D7AB8] flex items-center justify-center z-10">
                      <span className="text-white text-[10px] font-bold leading-none">{step.step.slice(1)}</span>
                    </div>
                    <div className="w-24 h-24 rounded-full bg-[#3D7AB8]/8 border border-[#3D7AB8]/20 flex items-center justify-center glow-blue-sm relative">
                      <div className="absolute inset-0 rounded-full bg-[#3D7AB8]/5 blur-xl" />
                      <Icon className="w-10 h-10 text-[#3D7AB8] relative" />
                    </div>
                  </div>

                  {/* Step label */}
                  <div className="text-[#3D7AB8]/60 text-xs font-bold tracking-widest uppercase mb-2">
                    Step {step.step}
                  </div>

                  <h3 className="section-heading text-lg mb-2">{step.title}</h3>
                  <p className="text-[#F5F7FA]/45 text-sm leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA under process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.6 }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 bg-[#3D7AB8] hover:bg-[#4A8AC9] text-white font-semibold px-9 py-4 rounded-full glow-blue hover:glow-blue-lg transition-all"
          >
            <Phone className="w-4 h-4" />
            Start Your Job Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
