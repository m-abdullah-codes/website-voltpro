"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";
import ServiceAreasMap from "@/components/ServiceAreasMap";

const COVERAGE_FACTS = [
  { value: "50mi", label: "Coverage Radius" },
  { value: "25+", label: "Areas Served" },
  { value: "2hrs", label: "Max Travel Time" },
  { value: "100%", label: "Same-Day Booking" },
];

export default function ServiceAreas() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="areas" className="relative py-24 lg:py-32 bg-[#0B1220]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3D7AB8]/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3D7AB8]/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_50%,rgba(61, 122, 184,0.06),transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <div className="lg:w-[38%] flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block text-[#3D7AB8] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                Coverage
              </span>
              <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-5 leading-tight">
                We Come to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D7AB8] to-[#7FB0DE]">
                  You
                </span>
              </h2>
              <p className="text-[#F5F7FA]/45 text-base leading-relaxed mb-8">
                Serving the entire metro area and surrounding suburbs. If you&apos;re within 50
                miles of our base, we can be there today — including weekends and public
                holidays.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {COVERAGE_FACTS.map((fact) => (
                  <div key={fact.label} className="glass-card rounded-xl p-4">
                    <div className="text-[#3D7AB8] font-bold text-2xl leading-none mb-1">
                      {fact.value}
                    </div>
                    <div className="text-[#F5F7FA]/45 text-xs">{fact.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 text-[#F5F7FA]/50 text-sm">
                <CheckCircle className="w-4 h-4 text-[#3D7AB8]" />
                Not sure if we cover your area? Just call us.
              </div>
            </motion.div>
          </div>

          <motion.div
            className="flex-1 w-full min-w-0"
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <ServiceAreasMap />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
