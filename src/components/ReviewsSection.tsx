"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { Star } from "lucide-react";

const REVIEWS = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner",
    text: "VoltPro completely rewired our 1960s home in under three days. Professional, tidy, and explained every step. Passed inspection first time.",
    featured: true,
  },
  {
    name: "James Okafor",
    role: "Restaurant owner",
    text: "Emergency fault on a Friday night before a big event. They arrived in 45 minutes and had us running before midnight.",
    featured: false,
  },
  {
    name: "Priya Sharma",
    role: "Property manager",
    text: "We use them across 14 properties. Reliable, fair pricing, and EICR reports are always thorough.",
    featured: false,
  },
  {
    name: "Tom Hargreaves",
    role: "Homeowner",
    text: "Installed EV chargers for three vehicles. Clean work, smart load-balancing sorted perfectly.",
    featured: false,
  },
  {
    name: "Linda Chen",
    role: "Office manager",
    text: "The quote was exactly what we paid. Full panel upgrade over a weekend — zero disruption Monday morning.",
    featured: false,
  },
  {
    name: "Marcus Reid",
    role: "Landlord",
    text: "Found a fault two other electricians missed. Diagnosed and fixed in 30 minutes. Genuinely care about getting it right.",
    featured: false,
  },
] as const;

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function ReviewCard({
  review,
  className = "",
}: {
  review: (typeof REVIEWS)[number];
  className?: string;
}) {
  const featured = review.featured;

  return (
    <motion.article
      variants={fadeUp}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl border border-white/[0.06] bg-[#0B1220]/40 p-6 sm:p-7 lg:p-8 transition-[border-color,box-shadow] duration-500 hover:border-white/[0.12] hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] ${className}`}
    >
      {featured && (
        <div
          className="pointer-events-none absolute inset-0 opacity-100"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 0% 0%, rgba(61, 122, 184,0.07), transparent 65%)",
          }}
        />
      )}

      <blockquote className="relative">
        <p
          className={`leading-relaxed text-[#F5F7FA]/75 ${
            featured
              ? "text-lg sm:text-xl lg:text-[1.35rem] lg:leading-[1.65]"
              : "text-[15px] sm:text-base leading-[1.7]"
          }`}
        >
          &ldquo;{review.text}&rdquo;
        </p>
      </blockquote>

      <footer className="relative mt-6 sm:mt-8 pt-5 border-t border-white/[0.05]">
        <p className="text-sm font-medium text-[#F5F7FA]">{review.name}</p>
        <p className="mt-0.5 text-sm text-[#F5F7FA]/35">{review.role}</p>
      </footer>
    </motion.article>
  );
}

export default function ReviewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const [featured, ...rest] = REVIEWS;

  return (
    <section id="reviews" className="relative py-24 sm:py-28 lg:py-32 bg-[#02050A]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(61, 122, 184,0.06),transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-12 sm:mb-14 lg:mb-16"
        >
          <p className="text-[#3D7AB8]/80 text-sm font-medium mb-3">
            Customer stories
          </p>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-[2.75rem] tracking-tight leading-[1.15] mb-4">
            People trust us with their homes and businesses
          </h2>
          <p className="text-[#F5F7FA]/40 text-base sm:text-lg leading-relaxed">
            Honest feedback from real jobs — rewires, emergencies, commercial
            upgrades, and everything in between.
          </p>

          <div className="inline-flex items-center gap-3 mt-7 rounded-full border border-white/[0.07] bg-white/[0.03] px-4 py-2.5">
            <div className="flex items-center gap-0.5" aria-hidden>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5 fill-[#3D7AB8]/80 text-[#3D7AB8]/80"
                />
              ))}
            </div>
            <span className="text-sm text-[#F5F7FA]/55">
              4.9 average · 500+ reviews
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4"
        >
          <ReviewCard
            review={featured}
            className="sm:col-span-2 lg:col-span-7 lg:row-span-2 lg:min-h-[340px]"
          />

          {rest.slice(0, 2).map((review) => (
            <ReviewCard
              key={review.name}
              review={review}
              className="lg:col-span-5"
            />
          ))}

          {rest.slice(2).map((review) => (
            <ReviewCard
              key={review.name}
              review={review}
              className="sm:col-span-1 lg:col-span-4"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
