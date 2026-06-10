"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, ArrowUpRight, ArrowRight, Check } from "lucide-react";

const SERVICES_OPTIONS = [
  "Wiring",
  "Fault & Repairs",
  "Appliance Install",
  "EV Charger",
  "Smart Home",
  "Maintenance",
  "Emergency",
  "Other",
];

const CHANNELS = [
  {
    icon: Phone,
    label: "Call us",
    value: "(555) 123-4567",
    note: "Available 24/7",
    href: "tel:+15551234567",
    accent: "#3D7AB8",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "(555) 123-4567",
    note: "Message anytime",
    href: "https://wa.me/15551234567",
    accent: "#25D366",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@voltpro.com",
    note: "Reply within 1 hour",
    href: "mailto:info@voltpro.com",
    accent: "#3D7AB8",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative py-24 lg:py-36 bg-[#02050A] overflow-hidden">
      {/* Ambient glow — soft, single source */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_-5%,rgba(61, 122, 184,0.12),transparent)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-[#3D7AB8]/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-[#3D7AB8]/60" />
            <span className="text-[#3D7AB8] text-xs font-semibold uppercase tracking-[0.28em]">
              Get in Touch
            </span>
          </div>
          <h2 className="section-heading text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight mb-5">
            Let&apos;s talk about
            <br />
            <span className="text-[#3D7AB8]">your project.</span>
          </h2>
          <p className="text-[#F5F7FA]/50 text-lg leading-relaxed">
            Tell us what you need — a quick fix or a full rewire. We reply within the hour.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: contact channels */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col"
          >
            {/* Live availability */}
            <div className="flex items-center gap-2.5 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#25D366]" />
              </span>
              <span className="text-[#F5F7FA]/60 text-sm">Online now · typically replies in minutes</span>
            </div>

            {/* Channels — minimal rows, hairline dividers */}
            <div className="flex flex-col">
              {CHANNELS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-5 py-5 border-t border-white/[0.07] last:border-b transition-colors hover:border-[#3D7AB8]/25"
                >
                  <div
                    className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: `${c.accent}14`,
                      borderColor: `${c.accent}33`,
                    }}
                  >
                    <c.icon className="h-5 w-5" style={{ color: c.accent }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[#F5F7FA]/40 text-xs mb-0.5">{c.label}</div>
                    <div className="text-[#F5F7FA] font-semibold tracking-tight">{c.value}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="hidden sm:block text-[#F5F7FA]/35 text-xs">{c.note}</span>
                    <ArrowUpRight className="h-4 w-4 text-[#F5F7FA]/30 transition-all duration-300 group-hover:text-[#3D7AB8] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </a>
              ))}
            </div>

            {/* Address */}
            <div className="mt-8 flex items-start gap-3 text-sm">
              <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5 text-[#3D7AB8]/70" />
              <p className="text-[#F5F7FA]/50 leading-relaxed">
                42 Circuit Way, Suite 5 · Downtown, Metro City
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-[#3D7AB8] hover:underline whitespace-nowrap"
                >
                  View map →
                </a>
              </p>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-7 sm:p-9 backdrop-blur-xl">
              {/* subtle top highlight */}
              <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#3D7AB8]/40 to-transparent" />

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366]/15 border border-[#25D366]/40"
                  >
                    <Check className="h-7 w-7 text-[#25D366]" />
                  </motion.div>
                  <h3 className="section-heading text-2xl mb-2">Message sent</h3>
                  <p className="text-[#F5F7FA]/50 text-sm max-w-sm leading-relaxed">
                    Thanks{form.name ? `, ${form.name.split(" ")[0]}` : ""} — we&apos;ll be in touch
                    within the hour. For urgent jobs, call{" "}
                    <a href="tel:+15551234567" className="text-[#3D7AB8] hover:underline">
                      (555) 123-4567
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FloatingInput
                      id="name"
                      name="name"
                      label="Full name"
                      required
                      value={form.name}
                      onChange={handleChange}
                    />
                    <FloatingInput
                      id="phone"
                      name="phone"
                      type="tel"
                      label="Phone number"
                      required
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Email */}
                  <FloatingInput
                    id="email"
                    name="email"
                    type="email"
                    label="Email address"
                    value={form.email}
                    onChange={handleChange}
                  />

                  {/* Service — pills */}
                  <div>
                    <div className="text-[#F5F7FA]/45 text-xs mb-3">What do you need?</div>
                    <div className="flex flex-wrap gap-2">
                      {SERVICES_OPTIONS.map((s) => {
                        const active = form.service === s;
                        return (
                          <button
                            key={s}
                            type="button"
                            onClick={() =>
                              setForm((prev) => ({
                                ...prev,
                                service: active ? "" : s,
                              }))
                            }
                            className={`rounded-full px-4 py-2 text-sm transition-all duration-200 border ${
                              active
                                ? "bg-[#3D7AB8] border-[#3D7AB8] text-white glow-blue-sm"
                                : "border-white/[0.1] text-[#F5F7FA]/60 hover:border-[#3D7AB8]/40 hover:text-[#F5F7FA]"
                            }`}
                          >
                            {s}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder=" "
                      value={form.message}
                      onChange={handleChange}
                      className="peer w-full resize-none rounded-2xl border border-white/[0.1] bg-white/[0.03] px-4 pt-7 pb-3 text-sm text-[#F5F7FA] outline-none transition-all duration-200 focus:border-[#3D7AB8]/50 focus:bg-white/[0.05]"
                    />
                    <label
                      htmlFor="message"
                      className="pointer-events-none absolute left-4 top-4 text-sm text-[#F5F7FA]/40 transition-all duration-200 peer-focus:top-2.5 peer-focus:text-[11px] peer-focus:text-[#3D7AB8] peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:text-[11px]"
                    >
                      Describe your job
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-[#3D7AB8] px-6 py-4 font-semibold text-white glow-blue transition-all duration-300 hover:bg-[#4A8AC9] hover:glow-blue-lg"
                  >
                    Send message
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  <p className="text-center text-xs text-[#F5F7FA]/30">
                    We never share your details · For emergencies call{" "}
                    <a href="tel:+15551234567" className="text-[#3D7AB8]/80 hover:underline">
                      (555) 123-4567
                    </a>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FloatingInput({
  id,
  name,
  label,
  type = "text",
  required = false,
  value,
  onChange,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder=" "
        value={value}
        onChange={onChange}
        className="peer w-full rounded-2xl border border-white/[0.1] bg-white/[0.03] px-4 pt-6 pb-2.5 text-sm text-[#F5F7FA] outline-none transition-all duration-200 focus:border-[#3D7AB8]/50 focus:bg-white/[0.05]"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[#F5F7FA]/40 transition-all duration-200 peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:text-[#3D7AB8] peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[11px]"
      >
        {label}
        {required && <span className="text-[#3D7AB8]/70"> *</span>}
      </label>
    </div>
  );
}
