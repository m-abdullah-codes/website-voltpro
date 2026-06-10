"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, AlertTriangle, Zap, MessageCircle, Clock } from "lucide-react";
import { BackgroundPlus } from "@/components/ui/background-plus";

export default function EmergencySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative py-20 overflow-hidden bg-[#02050A]">
      <BackgroundPlus
        plusColor="#fb3a5d"
        plusSize={60}
        className="opacity-35"
        fade
        style={{
          maskImage:
            "radial-gradient(ellipse 65% 55% at 50% 45%, white 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 55% at 50% 45%, white 0%, transparent 75%)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_45%,rgba(251,58,93,0.14),transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_50%_50%,transparent_35%,rgba(2,5,10,0.75)_100%)]" />

      {/* Animated lightning lines */}
      <LightningLines />

      <div
        ref={ref}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Alert badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/30 rounded-full px-4 py-1.5 mb-6"
        >
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <AlertTriangle className="w-4 h-4 text-red-400" fill="currentColor" />
          </motion.div>
          <span className="text-red-300 text-sm font-semibold uppercase tracking-wide">
            24 / 7 Emergency Service
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-5"
        >
          Electrical Emergency?{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3D7AB8] to-[#7FB0DE]">
            We&apos;re On It.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="text-[#F5F7FA]/50 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Power outage, burning smell, sparking outlet, tripped breakers? Don&apos;t wait —
          our emergency crew is available <strong className="text-[#F5F7FA]/70">around the clock</strong>,
          every day of the year.
        </motion.p>

        {/* Feature chips */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {[
            { icon: Clock, label: "60-Min Response" },
            { icon: Zap, label: "Same-Day Fix" },
            { icon: AlertTriangle, label: "No Extra Weekend Fees" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 bg-[#3D7AB8]/8 border border-[#3D7AB8]/20 rounded-full px-4 py-2"
            >
              <Icon className="w-4 h-4 text-[#3D7AB8]" />
              <span className="text-[#F5F7FA]/70 text-sm font-medium">{label}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="tel:+15551234567"
            className="flex items-center justify-center gap-2.5 bg-[#3D7AB8] hover:bg-[#4A8AC9] text-white font-bold px-10 py-4 rounded-full glow-blue hover:glow-blue-lg transition-all text-lg"
          >
            <Phone className="w-5 h-5" />
            Call Emergency Line
          </a>
          <a
            href="https://wa.me/15551234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-bold px-10 py-4 rounded-full transition-all text-lg"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function LightningLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[
        { left: "15%", delay: 0, height: "60%" },
        { left: "75%", delay: 1.2, height: "40%" },
        { left: "45%", delay: 0.6, height: "50%" },
      ].map((line, i) => (
        <motion.div
          key={i}
          className="absolute top-0 w-px bg-gradient-to-b from-[#fb3a5d]/35 via-[#fb3a5d]/12 to-transparent"
          style={{ left: line.left, height: line.height }}
          animate={{ opacity: [0, 0.6, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: line.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
