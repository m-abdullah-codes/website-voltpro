"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export interface ParallaxImage {
  src: string;
  alt?: string;
}

interface ZoomParallaxProps {
  images: ParallaxImage[];
}

const SCALES = [4, 5, 6, 5, 6, 8, 9] as const;

/** Frame sizes use width + aspect-ratio so images never stretch on any viewport. */
const LAYOUTS = [
  {
    wrapper: "inset-0 flex items-center justify-center",
    frame:
      "w-[min(62vw,18.5rem)] sm:w-[min(48vw,20rem)] lg:w-[min(28vw,22rem)] aspect-square",
  },
  {
    wrapper:
      "inset-0 flex items-start justify-start pt-[5vh] pl-[3vw] sm:pt-[7vh] sm:pl-[5vw]",
    frame:
      "w-[min(50vw,14rem)] sm:w-[min(38vw,17rem)] lg:w-[min(32vw,18rem)] aspect-[7/6]",
  },
  {
    wrapper:
      "inset-0 flex items-start justify-end pt-[2vh] pr-[2vw] sm:pt-[4vh] sm:pr-[4vw]",
    frame:
      "w-[min(36vw,9.5rem)] sm:w-[min(24vw,11rem)] lg:w-[min(18vw,12rem)] aspect-[4/9]",
  },
  {
    wrapper: "inset-0 flex items-center justify-end pr-[4vw] sm:pr-[8vw]",
    frame:
      "w-[min(44vw,12rem)] sm:w-[min(32vw,14rem)] lg:w-[min(22vw,15rem)] aspect-square",
  },
  {
    wrapper:
      "inset-0 flex items-end justify-start pb-[8vh] pl-[3vw] sm:pb-[10vh] sm:pl-[5vw]",
    frame:
      "w-[min(42vw,11rem)] sm:w-[min(28vw,12rem)] lg:w-[min(18vw,13rem)] aspect-[4/5]",
  },
  {
    wrapper:
      "inset-0 flex items-end justify-end pb-[6vh] pr-[2vw] sm:pb-[9vh] sm:pr-[6vw]",
    frame:
      "w-[min(48vw,13rem)] sm:w-[min(34vw,15rem)] lg:w-[min(26vw,16rem)] aspect-[6/5]",
  },
  {
    wrapper:
      "inset-0 flex items-end justify-center pb-[14vh] sm:pb-[16vh] lg:pb-[18vh]",
    frame:
      "w-[min(28vw,7rem)] sm:w-[min(18vw,8rem)] lg:w-[min(12vw,9rem)] aspect-square",
  },
] as const;

const PLACEHOLDER_GRADIENTS = [
  "from-[#3D7AB8]/35 via-[#0B1220] to-[#02050A]",
  "from-[#5C97CC]/30 via-[#0B1220] to-[#02050A]",
  "from-[#7FB0DE]/25 via-[#0B1220] to-[#02050A]",
  "from-[#3D7AB8]/28 via-[#0B1220] to-[#02050A]",
  "from-[#3E8FA8]/28 via-[#0B1220] to-[#02050A]",
  "from-[#3D7AB8]/32 via-[#0B1220] to-[#02050A]",
  "from-[#5C97CC]/22 via-[#0B1220] to-[#02050A]",
] as const;

function ParallaxFrame({
  src,
  alt,
  frameClass,
  index,
}: {
  src: string;
  alt: string;
  frameClass: string;
  index: number;
}) {
  const [failed, setFailed] = useState(false);
  const gradient = PLACEHOLDER_GRADIENTS[index % PLACEHOLDER_GRADIENTS.length];

  return (
    <div
      className={`relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/[0.08] bg-[#0B1220] shadow-[0_12px_48px_rgba(0,0,0,0.55)] ring-1 ring-[#3D7AB8]/10 ${frameClass}`}
    >
      {failed ? (
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`}>
          <div className="absolute inset-0 grid-bg opacity-40" />
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#02050A]/50 via-transparent to-[#3D7AB8]/[0.06]" />
    </div>
  );
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
  const container = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const motionScales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

  const headlineOpacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [1, 1, 0.35, 0]);
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -48]);

  if (reduceMotion) {
    return (
      <div className="relative bg-[#02050A] py-16 sm:py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 px-4 sm:grid-cols-3 sm:gap-4 sm:px-6">
          {images.slice(0, 6).map(({ src, alt }, index) => (
            <ParallaxFrame
              key={index}
              index={index}
              src={src}
              alt={alt || `Project photo ${index + 1}`}
              frameClass={LAYOUTS[index % LAYOUTS.length].frame}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={container}
      className="relative h-[220vh] sm:h-[260vh] lg:h-[300vh]"
      aria-hidden={images.length === 0}
    >
      <div className="sticky top-0 h-[100dvh] overflow-hidden">
        <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(ellipse_70%_55%_at_50%_45%,transparent_35%,#02050A_100%)]" />
        <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(61, 122, 184,0.08),transparent_70%)]" />

        <motion.div
          style={{ opacity: headlineOpacity, y: headlineY }}
          className="pointer-events-none absolute inset-x-0 top-[42%] z-30 mx-auto max-w-lg -translate-y-1/2 px-6 text-center sm:top-[44%]"
        >
          <span className="mb-3 inline-block text-[10px] font-semibold uppercase tracking-[0.28em] text-[#3D7AB8] sm:text-xs">
            Our Craft
          </span>
          <p className="section-heading text-2xl leading-tight tracking-tight text-[#F5F7FA] sm:text-3xl lg:text-4xl">
            Precision work,
            <br />
            <span className="text-[#3D7AB8]/90">project after project</span>
          </p>
        </motion.div>

        {images.map(({ src, alt }, index) => {
          const layout = LAYOUTS[index % LAYOUTS.length];
          const scale = motionScales[index % motionScales.length];

          return (
            <motion.div
              key={index}
              style={{ scale }}
              className={`absolute ${layout.wrapper}`}
            >
              <ParallaxFrame
                index={index}
                src={src}
                alt={alt || `Parallax image ${index + 1}`}
                frameClass={layout.frame}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
