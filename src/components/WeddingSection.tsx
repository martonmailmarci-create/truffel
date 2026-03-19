"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  { number: "15", unit: "év", label: "tapasztalat" },
  { number: "200+", unit: "", label: "esküvő évente" },
  { number: "Ingyenes", unit: "", label: "személyes kóstoló" },
];

export default function WeddingSection() {
  const ref = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 75%" },
        }
      );
      gsap.fromTo(
        textRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 75%" },
        }
      );

      // Parallax on image
      gsap.fromTo(
        imageRef.current?.querySelector("img") ?? null,
        { y: "-8%" },
        {
          y: "8%",
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
    <section ref={ref} className="flex flex-col lg:flex-row min-h-[640px]">

      {/* Left: full-bleed image with parallax */}
      <div
        ref={imageRef}
        className="lg:w-1/2 relative min-h-[440px] lg:min-h-0 overflow-hidden order-2 lg:order-1"
      >
        <Image
          src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=1400"
          alt="Esküvői torta"
          fill
          className="object-cover scale-[1.18]"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        {/* Subtle right-edge fade into text panel */}
        <div className="hidden lg:block absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white-warm to-transparent z-10" />
      </div>

      {/* Right: text content */}
      <div
        ref={textRef}
        className="lg:w-1/2 flex items-center bg-white-warm order-1 lg:order-2"
      >
        <div className="px-10 lg:px-16 xl:px-20 py-20 md:py-28 w-full">

          {/* Overline */}
          <div className="flex items-center gap-4 mb-10">
            <span className="block w-10 h-[1px] bg-blush/60" />
            <span className="font-body text-[10px] uppercase tracking-[0.32em] text-anthracite/40">
              esküvő &amp; rendezvény
            </span>
          </div>

          <h2
            className="font-display text-anthracite font-light leading-[1.1]"
            style={{ fontSize: "clamp(30px, 4vw, 52px)", letterSpacing: "-0.02em" }}
          >
            Az esküvő<br />
            <span className="italic text-blush-deep">legédesebb</span> pillanatai
          </h2>

          {/* Brand rule */}
          <div className="flex items-center gap-3 my-8">
            <span className="block w-8 h-[1px] bg-border" />
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
              <rect x="3" y="0" width="3" height="3" transform="rotate(45 3 0)" fill="#C4974A" fillOpacity="0.5" />
            </svg>
          </div>

          <p className="font-body text-anthracite/55 text-[14px] leading-[1.9] max-w-sm">
            Tizenöt éves tapasztalattal, évi több mint 200 esküvő
            lebonyolításában segítünk. Ingyenes személyes kóstoló,
            virágdekorációkkal összehangolt édességek, helyszínre szállítás.
          </p>

          {/* Stats row */}
          <div className="flex gap-10 mt-10 pt-10 border-t border-border">
            {pillars.map((p, i) => (
              <div key={i}>
                <span className="font-display text-anthracite font-light leading-none block" style={{ fontSize: "clamp(22px, 2.5vw, 30px)" }}>
                  {p.number}
                  {p.unit && <span className="text-blush-deep ml-0.5">{p.unit}</span>}
                </span>
                <span className="font-body text-[10px] uppercase tracking-[0.18em] text-anthracite/40 mt-1.5 block">
                  {p.label}
                </span>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="inline-block mt-10 bg-anthracite text-white-warm font-body text-[11px] uppercase tracking-[0.2em] px-10 py-[15px] hover:bg-anthracite-mid transition-colors duration-300"
          >
            Időpontot foglalok
          </a>
        </div>
      </div>
    </section>
  );
}
