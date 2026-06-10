"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const PROJECTS = [
  {
    title: "Full Home Rewire",
    category: "Residential",
    location: "Greenfield Estate",
    image:
      "https://res.cloudinary.com/djnnc4xvt/image/upload/q_auto/f_auto/v1781093557/Full_Home_Rewire_dcgrop.png",
    accent: "#3D7AB8",
    size: "large",
  },
  {
    title: "Commercial Panel Upgrade",
    category: "Commercial",
    location: "Downtown Business Center",
    image:
      "https://res.cloudinary.com/djnnc4xvt/image/upload/q_auto/f_auto/v1781093556/Commercial_Panel_Upgrade_jjasu0.png",
    accent: "#5C97CC",
    size: "small",
  },
  {
    title: "EV Charger Installation",
    category: "Installation",
    location: "Lakewood Residences",
    image:
      "https://res.cloudinary.com/djnnc4xvt/image/upload/q_auto/f_auto/v1781093556/EV_Charger_Installation_rsic1g.png",
    accent: "#7FB0DE",
    size: "small",
  },
  {
    title: "Security Lighting System",
    category: "Residential",
    location: "Oakview Heights",
    image:
      "https://res.cloudinary.com/djnnc4xvt/image/upload/q_auto/f_auto/v1781093555/Security_Lighting_System_ib2nip.png",
    accent: "#3D7AB8",
    size: "small",
  },
  {
    title: "Smart Home Wiring",
    category: "Smart Home",
    location: "Riverside Apartments",
    image:
      "https://res.cloudinary.com/djnnc4xvt/image/upload/q_auto/f_auto/v1781093556/Smart_Home_Wiring_hw7ht0.png",
    accent: "#3E8FA8",
    size: "small",
  },
  {
    title: "Industrial Switchgear",
    category: "Industrial",
    location: "Northport Industrial Park",
    image:
      "https://res.cloudinary.com/djnnc4xvt/image/upload/q_auto/f_auto/v1781093556/Industrial_Switchgear_flp8if.png",
    accent: "#3D7AB8",
    size: "large",
  },
];

const FILTERS = ["All", "Residential", "Commercial", "Industrial", "Smart Home", "Installation"];

export default function WorkGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="gallery" className="relative py-24 lg:py-32 bg-[#0B1220]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3D7AB8]/25 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3D7AB8]/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_30%_50%,rgba(61, 122, 184,0.05),transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-10 lg:mb-14"
        >
          <span className="inline-block text-[#3D7AB8] text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Our Work
          </span>
          <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
            Project Gallery
          </h2>
          <p className="text-[#F5F7FA]/45 text-lg max-w-xl mx-auto">
            A selection of completed projects across residential, commercial, and industrial sites.
          </p>
        </motion.div>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "bg-[#3D7AB8] text-white glow-blue-sm"
                  : "bg-white/5 text-[#F5F7FA]/50 hover:bg-white/10 hover:text-[#F5F7FA]/80 border border-white/8"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Masonry-style grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={`group relative overflow-hidden rounded-2xl border border-white/8 hover:border-[#3D7AB8]/30 transition-all cursor-pointer ${
                  project.size === "large" ? "sm:col-span-1 lg:row-span-1" : ""
                }`}
              >
                <div className="relative h-52">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220]/80 via-[#0B1220]/20 to-transparent" />
                  <div className="absolute inset-0 grid-bg opacity-20" />

                  <div
                    className="absolute top-3 left-3 z-10 text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{
                      background: `${project.accent}20`,
                      border: `1px solid ${project.accent}35`,
                      color: project.accent,
                    }}
                  >
                    {project.category}
                  </div>

                  <div className="absolute inset-0 bg-[#3D7AB8]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Info */}
                <div className="glass-card p-4 rounded-b-2xl">
                  <h3 className="text-[#F5F7FA] font-semibold text-sm mb-0.5">
                    {project.title}
                  </h3>
                  <p className="text-[#F5F7FA]/40 text-xs">{project.location}</p>
                </div>
              </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
