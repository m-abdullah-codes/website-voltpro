"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    index: "01",
    title: "Electrical Wiring",
    tagline: "New builds, rewires & panels",
    description:
      "Full home and commercial wiring installations. New builds, rewires, circuit upgrades — done to code, first time.",
    features: ["New Installations", "Full Rewires", "Circuit Panels"],
    accent: "#3D7AB8",
    layout: "col-span-2 lg:col-span-2 lg:row-span-2 lg:min-h-[340px]",
    featured: true,
  },
  {
    index: "02",
    title: "Fault & Repairs",
    tagline: "Diagnose fast, fix right",
    description:
      "Fast diagnosis and repair of electrical faults, tripped breakers, flickering lights, and dead sockets.",
    features: ["Fault Finding", "Breaker Repairs", "Socket Fixes"],
    accent: "#5C97CC",
    layout: "col-span-1 lg:col-span-2 lg:row-span-1",
    featured: false,
  },
  {
    index: "03",
    title: "Appliance Install",
    tagline: "EV, smart home & more",
    description:
      "Safe installation of EV chargers, smart home systems, security lighting, and kitchen appliances.",
    features: ["EV Chargers", "Smart Home", "Security Lighting"],
    accent: "#7FB0DE",
    layout: "col-span-1 lg:col-span-1 lg:row-span-1",
    featured: false,
  },
  {
    index: "04",
    title: "Maintenance Plans",
    tagline: "Stay compliant, stay safe",
    description:
      "Regular inspection and preventive maintenance programs to keep your property compliant and hazard-free.",
    features: ["Safety Inspections", "EICR Certificates", "Annual Plans"],
    accent: "#3D7AB8",
    layout: "col-span-2 lg:col-span-1 lg:row-span-1",
    featured: false,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="relative py-20 sm:py-24 lg:py-32 bg-[#02050A]">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(61, 122, 184,0.06),transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-10 sm:mb-14 lg:mb-16"
          ref={ref}
        >
          <span className="inline-block text-[#3D7AB8]/80 text-xs font-medium uppercase tracking-[0.25em] mb-3">
            What We Do
          </span>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-[2.75rem] tracking-tight mb-3">
            Our Electrical Services
          </h2>
          <p className="text-[#F5F7FA]/40 text-base sm:text-lg max-w-xl leading-relaxed">
            From a single faulty socket to a full commercial installation — precision
            and care on every job.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3 lg:gap-4 auto-rows-auto lg:auto-rows-fr"
        >
          {SERVICES.map((service) => (
            <motion.a
              key={service.title}
              href="#contact"
              variants={cardVariants}
              className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/[0.06] bg-[#0B1220]/50 backdrop-blur-sm transition-[border-color,box-shadow,transform] duration-500 hover:border-[#3D7AB8]/25 hover:shadow-[0_0_40px_rgba(61, 122, 184,0.06)] ${service.layout}`}
            >
              {/* Accent edge */}
              <div
                className="absolute inset-x-0 top-0 h-px opacity-60"
                style={{
                  background: `linear-gradient(90deg, transparent, ${service.accent}55, transparent)`,
                }}
              />

              {/* Hover wash */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 80% 60% at 0% 0%, ${service.accent}08, transparent 70%)`,
                }}
              />

              {/* Watermark index */}
              <span
                className="absolute -right-1 -top-2 sm:top-0 sm:right-2 section-heading text-[4.5rem] sm:text-[5.5rem] lg:text-[7rem] font-bold leading-none select-none pointer-events-none"
                style={{ color: `${service.accent}0A` }}
                aria-hidden
              >
                {service.index}
              </span>

              <div className="relative z-10 flex h-full flex-col p-4 sm:p-5 lg:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <span
                      className="mb-2 inline-block text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em]"
                      style={{ color: `${service.accent}99` }}
                    >
                      {service.index}
                    </span>
                    <h3
                      className={`section-heading tracking-tight text-[#F5F7FA] ${
                        service.featured
                          ? "text-lg sm:text-xl lg:text-2xl"
                          : "text-sm sm:text-base lg:text-lg"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p className="mt-1 text-[11px] sm:text-xs text-[#F5F7FA]/35 leading-snug">
                      {service.tagline}
                    </p>
                  </div>

                  <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full border border-white/[0.06] bg-white/[0.02] text-[#F5F7FA]/30 transition-all duration-300 group-hover:border-[#3D7AB8]/30 group-hover:bg-[#3D7AB8]/10 group-hover:text-[#3D7AB8]">
                    <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>

                {service.featured && (
                  <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-[#F5F7FA]/45 leading-relaxed max-w-sm">
                    {service.description}
                  </p>
                )}

                <div
                  className={
                    service.featured
                      ? "pt-3 sm:pt-4 lg:mt-auto lg:pt-5"
                      : "mt-auto pt-3 sm:pt-4 lg:pt-5"
                  }
                >
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full border border-white/[0.05] bg-white/[0.02] px-2 py-0.5 text-[9px] sm:text-[10px] text-[#F5F7FA]/40 tracking-wide"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
