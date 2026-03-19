"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function SeasonalBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 80%" },
        }
      );
      gsap.fromTo(
        imageRef.current?.querySelector("img") ?? null,
        { y: "-6%" },
        {
          y: "6%",
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="bg-cream py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Overline */}
        <div className="flex items-center gap-4 mb-14">
          <span className="block w-10 h-[1px] bg-gold/40" />
          <span className="font-body text-[10px] uppercase tracking-[0.3em] text-anthracite/40">
            Szezonális ajánlat
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-0">
          {/* Image — takes left 55%, full bleed feel */}
          <div
            ref={imageRef}
            className="w-full lg:w-[55%] relative overflow-hidden"
            style={{ aspectRatio: "16/10" }}
          >
            <Image
              src="https://images.unsplash.com/photo-1543362906-acfc16c67564?w=1200"
              alt="OMEGAJAM kollekció"
              fill
              className="object-cover scale-[1.1]"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
          </div>

          {/* Text — right panel with cream bg, offset upward */}
          <div
            ref={textRef}
            className="w-full lg:w-[45%] bg-white-warm p-10 md:p-14 lg:p-16 lg:-ml-12 relative z-10 opacity-0"
            style={{ boxShadow: "0 0 60px rgba(42,42,42,0.06)" }}
          >
            <h2
              className="font-display text-anthracite font-light leading-[1.1]"
              style={{ fontSize: "clamp(28px, 3.5vw, 46px)", letterSpacing: "-0.015em" }}
            >
              OMEGAJAM<br />
              <span className="italic text-gold">kollekció</span>
            </h2>

            <div className="flex items-center gap-3 my-6">
              <span className="block w-8 h-[1px] bg-border" />
              <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
                <rect x="3" y="0" width="3" height="3" transform="rotate(45 3 0)" fill="#C4974A" fillOpacity="0.5" />
              </svg>
            </div>

            <p className="font-body text-anthracite/60 text-[14px] leading-[1.85] max-w-sm">
              Ahol az íz találkozik az egészséggel — 3 különleges lekvár, 4 ízletes desszert,
              60% valódi gyümölcs minden falatban.
            </p>

            <div className="mt-4 mb-8">
              <span className="font-body text-[10px] uppercase tracking-[0.25em] text-gold/80">
                Limitált edíció
              </span>
            </div>

            <a
              href="#"
              className="inline-block bg-anthracite text-white-warm font-body text-[11px] uppercase tracking-[0.2em] px-10 py-[15px] hover:bg-anthracite-mid transition-colors duration-300"
            >
              Felfedezem
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
