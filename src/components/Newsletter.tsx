"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Newsletter() {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 85%" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative bg-anthracite py-24 md:py-36 overflow-hidden">

      {/* Decorative background script — large faint wordmark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-script text-white-warm/[0.03] whitespace-nowrap"
          style={{ fontSize: "clamp(80px, 16vw, 220px)" }}
        >
          Trüffel Cukrászda
        </span>
      </div>

      <div ref={contentRef} className="relative z-10 max-w-[520px] mx-auto px-6 text-center opacity-0">

        {/* Overline */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="block w-8 h-[1px] bg-white-warm/20" />
          <span className="font-body text-[10px] uppercase tracking-[0.32em] text-white-warm/35">
            Csatlakozz
          </span>
          <span className="block w-8 h-[1px] bg-white-warm/20" />
        </div>

        <span className="font-script text-blush text-[42px] leading-none block mb-4">
          maradj velünk
        </span>

        <h2
          className="font-display text-white-warm font-light leading-[1.15]"
          style={{ fontSize: "clamp(48px, 5vw, 96px)", letterSpacing: "-0.01em" }}
        >
          Légy az első, aki megtudja
        </h2>

        <p className="font-body text-white-warm/45 text-[24px] mt-5 leading-[1.9] max-w-[380px] mx-auto">
          Új kreációk, szezonális ajánlatok és exkluzív meglepetések — egyenesen
          a Trüffel műhelyéből a postaládádba.
        </p>

        {/* Brand rule */}
        <div className="flex items-center justify-center gap-3 my-8">
          <span className="block w-8 h-[1px] bg-white-warm/15" />
          <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
            <rect x="3" y="0" width="3" height="3" transform="rotate(45 3 0)" fill="#E8B4B8" fillOpacity="0.4" />
          </svg>
          <span className="block w-8 h-[1px] bg-white-warm/15" />
        </div>

        <form
          className="flex flex-col sm:flex-row gap-0"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Email cím"
            className="flex-1 bg-transparent border border-white-warm/20 text-white-warm font-body text-[13px] px-6 py-4 placeholder:text-white-warm/30 focus:border-white-warm/40 focus:outline-none transition-colors sm:border-r-0"
          />
          <button
            type="submit"
            className="bg-blush-deep text-white-warm font-body text-[13px] uppercase tracking-[0.25em] px-8 py-4 hover:bg-blush transition-colors duration-300 shrink-0"
          >
            Feliratkozás
          </button>
        </form>

        <label className="flex items-start gap-3 mt-5 text-left cursor-pointer">
          <input
            type="checkbox"
            className="mt-0.5 accent-blush-deep w-3.5 h-3.5 shrink-0"
          />
          <span className="font-body text-white-warm/30 text-[11px] leading-relaxed">
            Elfogadom az adatvédelmi tájékoztatót és hozzájárulok a hírlevél küldéséhez.
          </span>
        </label>
      </div>
    </section>
  );
}
