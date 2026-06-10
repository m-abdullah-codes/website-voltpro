"use client";

import { ZoomParallax } from "@/components/ZoomParallax";

const PARALLAX_IMAGES = [
  {
    src: "https://res.cloudinary.com/djnnc4xvt/image/upload/q_auto/f_auto/v1781093580/01-center_p1dvxm.jpg",
    alt: "Electrician wiring a residential panel",
  },
  {
    src: "https://res.cloudinary.com/djnnc4xvt/image/upload/q_auto/f_auto/v1781093580/02-top-left_kivfyv.jpg",
    alt: "Commercial electrical installation",
  },
  {
    src: "https://res.cloudinary.com/djnnc4xvt/image/upload/q_auto/f_auto/v1781093580/03-top-right-portrait_va6oon.jpg",
    alt: "Close-up of professional electrical work",
  },
  {
    src: "https://res.cloudinary.com/djnnc4xvt/image/upload/q_auto/f_auto/v1781093580/04-mid-right_oky7m2.jpg",
    alt: "Modern smart home electrical setup",
  },
  {
    src: "https://res.cloudinary.com/djnnc4xvt/image/upload/q_auto/f_auto/v1781093580/05-bottom-left_env4l7.jpg",
    alt: "EV charger installation",
  },
  {
    src: "https://res.cloudinary.com/djnnc4xvt/image/upload/q_auto/f_auto/v1781093580/06-bottom-right_fx8r37.jpg",
    alt: "Industrial switchgear project",
  },
  {
    src: "https://res.cloudinary.com/djnnc4xvt/image/upload/q_auto/f_auto/v1781093580/07-accent_jsuayv.jpg",
    alt: "Detail shot of electrical components",
  },
];

export default function ParallaxSection() {
  return (
    <section
      id="craft"
      className="relative bg-[#02050A]"
      aria-label="Project craftsmanship showcase"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-[#02050A] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-[#0B1220] to-transparent" />
      <ZoomParallax images={PARALLAX_IMAGES} />
    </section>
  );
}
