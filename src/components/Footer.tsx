import { Zap, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const QUICK_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

const SERVICES_LINKS = [
  "Electrical Wiring",
  "Fault & Repairs",
  "EV Charger Install",
  "Smart Home",
  "Maintenance Plans",
  "Commercial Electrical",
  "Emergency Callouts",
];

export default function Footer() {
  return (
    <footer className="relative bg-[#02050A] border-t border-[#3D7AB8]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#3D7AB8]/15 border border-[#3D7AB8]/40 flex items-center justify-center">
                <Zap className="w-4 h-4 text-[#3D7AB8]" fill="currentColor" />
              </div>
              <span
                className="text-[#F5F7FA] font-bold text-lg"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Volt<span className="text-[#3D7AB8]">Pro</span>
              </span>
            </a>
            <p className="text-[#F5F7FA]/40 text-sm leading-relaxed mb-5 max-w-xs">
              Certified electricians serving the metro area since 2009. Fast, safe, and
              transparent electrical services, 24/7.
            </p>
            <div className="flex gap-3">
              <a
                href="tel:+15551234567"
                className="w-9 h-9 rounded-full bg-[#3D7AB8]/12 border border-[#3D7AB8]/25 flex items-center justify-center hover:glow-blue-sm transition-all"
              >
                <Phone className="w-4 h-4 text-[#3D7AB8]" />
              </a>
              <a
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366]/10 border border-[#25D366]/25 flex items-center justify-center hover:shadow-[0_0_10px_rgba(37,211,102,0.3)] transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
              </a>
              <a
                href="mailto:info@voltpro.com"
                className="w-9 h-9 rounded-full bg-[#3D7AB8]/12 border border-[#3D7AB8]/25 flex items-center justify-center hover:glow-blue-sm transition-all"
              >
                <Mail className="w-4 h-4 text-[#3D7AB8]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#F5F7FA] font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#F5F7FA]/45 hover:text-[#7FB0DE] text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#F5F7FA] font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-2.5">
              {SERVICES_LINKS.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-[#F5F7FA]/45 hover:text-[#7FB0DE] text-sm transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#F5F7FA] font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-3.5">
              <li>
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-2.5 text-[#F5F7FA]/45 hover:text-[#7FB0DE] text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#3D7AB8] flex-shrink-0" />
                  (555) 123-4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@voltpro.com"
                  className="flex items-center gap-2.5 text-[#F5F7FA]/45 hover:text-[#7FB0DE] text-sm transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#3D7AB8] flex-shrink-0" />
                  info@voltpro.com
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-[#F5F7FA]/40 text-sm">
                <MapPin className="w-4 h-4 text-[#3D7AB8] flex-shrink-0 mt-0.5" />
                42 Circuit Way, Downtown<br />Metro City, MC 10001
              </li>
            </ul>

            <div className="mt-5 inline-flex items-center gap-2 bg-[#3D7AB8]/8 border border-[#3D7AB8]/20 rounded-full px-3.5 py-1.5">
              <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
              <span className="text-[#F5F7FA]/50 text-xs">24/7 Emergency Available</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#F5F7FA]/30 text-xs">
            © {new Date().getFullYear()} VoltPro Electrical. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Licenses"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[#F5F7FA]/30 hover:text-[#F5F7FA]/60 text-xs transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
