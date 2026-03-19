"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const forkRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to(loadingRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          if (loadingRef.current) loadingRef.current.style.display = "none";
        },
      });

      tl.fromTo(
        logoRef.current,
        { opacity: 0, y: 24, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" },
        "-=0.2"
      );

      tl.fromTo(
        forkRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.0, ease: "power2.out" },
        "-=0.7"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Loading screen */}
      <div ref={loadingRef} className="loading-screen">
        <span className="font-script text-[#541115] text-[48px]">Trüffel</span>
      </div>

      {/*
        Hero section:
        - overflow: visible so the fork bleeds into the next section
        - z-index: 2 so the fork paints above the about section (z-index: 1)
        - min-h-screen ensures the cream hero fills the viewport
      */}
      <section
        ref={sectionRef}
        className="relative min-h-screen"
        style={{ background: "#E5E6E0", overflow: "visible", zIndex: 2 }}
      >
        {/* Background texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/bg-texture.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.4,
          }}
        />

        {/*
          Logo — Figma: top 199px in 908px hero (22vh).
          User wants it lower/centered → 38vh.
        */}
        <div
          ref={logoRef}
          className="absolute left-1/2 -translate-x-1/2 z-10 opacity-0"
          style={{ top: "38vh" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-dark.svg"
            alt="Trüffel"
            style={{ width: "clamp(300px, 35vw, 671px)", height: "auto" }}
          />
        </div>

        {/*
          Fork — Figma crop:
          The source image is 2912×1632 landscape. Figma renders it as a tall
          portrait strip (266×797px container) using overflow:hidden + absolute offsets.

          Figma crop params (relative to 266×797 container):
            image width:  652.89% of container width
            image height: 122.20% of container height
            image left:  -276.45% of container width
            image top:   -16.84%  of container height

          We scale the container UP ("a lot bigger") with the same percentages,
          so the crop proportions are identical — just larger.

          Container: ~20vw wide, 3:1 tall (797/266 ratio) → bleeds below the hero.
          z-index: 20 within hero stacking context (hero itself is z-index 2 > about's 1).
        */}
        <div
          ref={forkRef}
          className="opacity-0"
          style={{
            position: "absolute",
            top: "52vh",
            left: "50%",
            transform: "translateX(-50%)",
            width: "clamp(220px, 20vw, 450px)",
            /* height = width × (797/266) ≈ width × 2.996 */
            aspectRatio: "266 / 797",
            overflow: "hidden",
            zIndex: 20,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/fork-cake.jpg"
            alt="Trüffel sütemény"
            style={{
              position: "absolute",
              width: "652.89%",
              height: "122.20%",
              left: "-276.45%",
              top: "-16.84%",
              maxWidth: "none",
              display: "block",
            }}
          />
        </div>
      </section>
    </>
  );
}
