"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  Clock,
  CheckCircle,
  BadgeDollarSign,
  Award,
  Users,
  ShieldCheck,
  Star,
  Zap,
} from "lucide-react";
const TRUST_MAN_IMAGE =
  "https://res.cloudinary.com/djnnc4xvt/image/upload/q_auto/f_auto/v1781093556/trust_man_hduewc.png";

const STATS = [
  { value: "500+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "4.9★", label: "Average Rating" },
  { value: "24/7", label: "Emergency Service" },
];

const REASONS_LEFT = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description:
      "Fully certified and insured electricians. Every job is backed by our workmanship guarantee — you're always protected.",
  },
  {
    icon: Clock,
    title: "Fast Response",
    description:
      "We arrive on time, every time. Emergency callouts within 60 minutes. No waiting around for days.",
  },
  {
    icon: CheckCircle,
    title: "Safety First",
    description:
      "All work meets or exceeds current electrical codes. Safety inspections included with every installation.",
  },
];

const REASONS_RIGHT = [
  {
    icon: BadgeDollarSign,
    title: "Transparent Pricing",
    description:
      "No hidden fees. You get a clear quote before any work begins. Competitive rates with no surprises.",
  },
  {
    icon: Award,
    title: "Award-Winning Quality",
    description:
      "Recognized for outstanding service in the region. We take pride in every job, big or small.",
  },
  {
    icon: Users,
    title: "Trusted by Thousands",
    description:
      "Over 500 five-star reviews from homeowners and businesses who keep coming back to us.",
  },
];

function ReasonCard({
  reason,
  side,
  index,
  isInView,
}: {
  reason: (typeof REASONS_LEFT)[number];
  side: "left" | "right";
  index: number;
  isInView: boolean;
}) {
  const Icon = reason.icon;
  const isLeft = side === "left";

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 + index * 0.15, ease: "easeOut" }}
      className={`group glass-card glass-card-hover rounded-2xl p-5 flex gap-4 ${
        isLeft ? "lg:flex-row-reverse lg:text-right" : ""
      }`}
    >
      <div
        className={`w-11 h-11 rounded-xl bg-[#3D7AB8]/12 border border-[#3D7AB8]/20 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:bg-[#3D7AB8]/20 group-hover:border-[#3D7AB8]/50 group-hover:shadow-[0_0_18px_rgba(61, 122, 184,0.35)]`}
      >
        <Icon className="w-5 h-5 text-[#3D7AB8] transition-colors duration-300 group-hover:text-[#7FB0DE]" />
      </div>
      <div>
        <h3 className="text-[#F5F7FA] font-semibold text-sm mb-1.5">
          {reason.title}
        </h3>
        <p className="text-[#F5F7FA]/45 text-sm leading-relaxed">
          {reason.description}
        </p>
      </div>
    </motion.div>
  );
}

function FloatingBadge({
  className,
  delay,
  isInView,
  children,
}: {
  className: string;
  delay: number;
  isInView: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`absolute z-20 ${className}`}
    >
      <div
        className="glass-card rounded-xl px-3.5 py-2.5 flex items-center gap-2.5 shadow-[0_8px_32px_rgba(2,5,10,0.6)]"
        style={{ animation: "float 5s ease-in-out infinite", animationDelay: `${delay}s` }}
      >
        {children}
      </div>
    </motion.div>
  );
}

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="why-us"
      className="relative py-24 lg:py-32 bg-[#0B1220] overflow-hidden"
    >
      {/* Section edge lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3D7AB8]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3D7AB8]/20 to-transparent" />
      {/* Center stage glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_55%_at_50%_60%,rgba(61, 122, 184,0.1),transparent)]" />
      <div className="absolute inset-0 grid-bg opacity-50 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />

      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        ref={ref}
      >
        {/* Centered header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14 lg:mb-10"
        >
          <span className="inline-block text-[#3D7AB8] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Why VoltPro
          </span>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-5 leading-tight">
            The Electricians You Can{" "}
            <span className="text-[#3D7AB8] text-glow">Actually Trust</span>
          </h2>
          <p className="text-[#F5F7FA]/45 text-base leading-relaxed">
            We combine technical expertise with honest service. When you choose
            VoltPro, you get a team that shows up, does the job right, and
            stands behind their work.
          </p>
        </motion.div>

        {/* Stage: cards left — electrician center — cards right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_minmax(320px,400px)_1fr] gap-5 lg:gap-8 items-center">
          {/* Left reasons */}
          <div className="flex flex-col gap-5 order-2 lg:order-1">
            {REASONS_LEFT.map((reason, i) => (
              <ReasonCard
                key={reason.title}
                reason={reason}
                side="left"
                index={i}
                isInView={isInView}
              />
            ))}
          </div>

          {/* Center figure */}
          <div className="relative order-1 lg:order-2 flex justify-center self-end lg:-mb-8 -mb-4">
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              className="relative w-[280px] sm:w-[330px] lg:w-full max-w-[400px]"
            >
              {/* Spark line dropping from header */}
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 h-14 w-px bg-gradient-to-b from-transparent via-[#3D7AB8]/70 to-[#3D7AB8] hidden lg:block" />
              <div
                className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#7FB0DE] glow-blue-sm hidden lg:block"
                style={{ animation: "spark 2.4s ease-in-out infinite" }}
              />

              {/* Halo + pulsing rings behind */}
              <div className="absolute inset-x-0 top-[12%] bottom-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_45%,rgba(61, 122, 184,0.22),transparent_70%)]" />
              <div
                className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 w-[115%] aspect-square rounded-full border border-[#3D7AB8]/15"
                style={{ animation: "electric-pulse 4s ease-in-out infinite" }}
              />
              <div
                className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 w-[88%] aspect-square rounded-full border border-[#3D7AB8]/25"
                style={{ animation: "electric-pulse 4s ease-in-out infinite", animationDelay: "1.2s" }}
              />

              {/* Glowing platform under his feet */}
              <div className="absolute bottom-[2%] left-1/2 -translate-x-1/2 w-[85%] h-10 rounded-[100%] bg-[#3D7AB8]/25 blur-xl" />
              <div className="absolute bottom-[3%] left-1/2 -translate-x-1/2 w-[70%] h-4 rounded-[100%] border border-[#3D7AB8]/40 bg-[#3D7AB8]/10" />

              {/* The man */}
              <Image
                src={TRUST_MAN_IMAGE}
                alt="Smiling VoltPro electrician with cable coil and tool belt"
                width={400}
                height={600}
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 330px, 400px"
                className="relative z-10 w-full h-auto drop-shadow-[0_0_45px_rgba(61, 122, 184,0.3)] [mask-image:linear-gradient(to_bottom,black_88%,transparent_100%)]"
              />

              {/* Floating trust badges */}
              <FloatingBadge
                className="top-[50%] lg:top-[16%] -left-2 sm:-left-6"
                delay={0.7}
                isInView={isInView}
              >
                <div className="w-8 h-8 rounded-lg bg-[#3D7AB8]/15 border border-[#3D7AB8]/30 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-[#3D7AB8]" />
                </div>
                <div>
                  <div className="text-[#F5F7FA] text-xs font-semibold leading-tight">
                    Licensed &amp; Insured
                  </div>
                  <div className="text-[#F5F7FA]/40 text-[10px]">
                    Certified electricians
                  </div>
                </div>
              </FloatingBadge>

              <FloatingBadge
                className="top-[32%] lg:top-[8%] -right-2 sm:-right-6"
                delay={0.9}
                isInView={isInView}
              >
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 text-[#3D7AB8] fill-[#3D7AB8]"
                    />
                  ))}
                </div>
                <div>
                  <div className="text-[#F5F7FA] text-xs font-semibold leading-tight">
                    4.9 Rating
                  </div>
                  <div className="text-[#F5F7FA]/40 text-[10px]">
                    500+ reviews
                  </div>
                </div>
              </FloatingBadge>

              <FloatingBadge
                className="bottom-[22%] -right-2 sm:-right-8"
                delay={1.1}
                isInView={isInView}
              >
                <div className="w-8 h-8 rounded-lg bg-[#3D7AB8]/15 border border-[#3D7AB8]/30 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-[#7FB0DE]" />
                </div>
                <div>
                  <div className="text-[#F5F7FA] text-xs font-semibold leading-tight">
                    60-Min Response
                  </div>
                  <div className="text-[#F5F7FA]/40 text-[10px]">
                    24/7 emergency
                  </div>
                </div>
              </FloatingBadge>
            </motion.div>
          </div>

          {/* Right reasons */}
          <div className="flex flex-col gap-5 order-3">
            {REASONS_RIGHT.map((reason, i) => (
              <ReasonCard
                key={reason.title}
                reason={reason}
                side="right"
                index={i}
                isInView={isInView}
              />
            ))}
          </div>
        </div>

        {/* Stats bar — overlaps the figure's lower edge to ground him */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative z-20 mt-5 lg:mt-0"
        >
          <div className="glass-card rounded-2xl px-6 py-6 lg:py-7 grid grid-cols-2 lg:grid-cols-4 gap-y-6 shadow-[0_-20px_60px_rgba(2,5,10,0.5)]">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center ${
                  i > 0 ? "lg:border-l lg:border-[#3D7AB8]/10" : ""
                }`}
              >
                <div className="text-[#3D7AB8] font-bold text-3xl lg:text-4xl leading-none mb-1.5 section-heading !text-[#3D7AB8]">
                  {stat.value}
                </div>
                <div className="text-[#F5F7FA]/45 text-xs uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
