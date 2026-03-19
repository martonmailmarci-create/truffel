"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const photo1Ref = useRef<HTMLDivElement>(null);
  const photo2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1.0, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 85%" },
        }
      );
      gsap.fromTo(
        photo1Ref.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 1.0, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );
      gsap.fromTo(
        photo2Ref.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1.0, delay: 0.2, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ background: "#E5E6E0", zIndex: 1 }}
    >

      <div
        className="relative max-w-[1920px] mx-0 pl-20"
        style={{ paddingTop: "80px", paddingBottom: "120px", minHeight: "700px" }}
      >
        {/* ── LEFT TEXT COLUMN ── */}
        <div ref={textRef} className="relative z-10" style={{ maxWidth: "48%" }}>
          {/* Faded script overlay */}
          <p
            className="font-script select-none leading-none"
            style={{
              color: "#541115",
              opacity: 0.28,
              fontSize: "clamp(72px, 10.4vw, 200px)",
              marginBottom: "-0.3em",
              lineHeight: 1,
            }}
          >
            Nassoljunk
          </p>

          {/* Bold heading */}
          <h2
            className="font-body font-medium leading-none"
            style={{
              color: "#541115",
              fontSize: "clamp(48px, 5vw, 96px)",
              letterSpacing: "3.84px",
              marginBottom: "clamp(24px, 2.5vw, 40px)",
            }}
          >
            Másképp
          </h2>

          {/* Body text */}
          <p
            className="font-body leading-relaxed mb-5"
            style={{ color: "#541115", opacity: 0.8, fontSize: "24px", maxWidth: "clamp(340px, 58vw, 1100px)" }}
          >
            A Trüffel az a hely, ahol vidáman köszönnek a torták és a fagylaltok
            tetejéről a valódi gyümölcsök, az igazi csokoládék, a hamisítatlan
            tejszínhabok.
          </p>
          <p
            className="font-body leading-relaxed"
            style={{ color: "#541115", opacity: 0.8, fontSize: "24px", maxWidth: "clamp(340px, 58vw, 1100px)" }}
          >
            Ahol jó megpihenni, elidőzni, valódi ízeket, különleges aromákat
            felfedezni. Ahol nem kell megalkudni, mert a sütemények természetes
            hozzávalók felhasználásával, adalékanyagok nélkül, szeretettel
            készülnek.
          </p>
        </div>

        {/* ── RIGHT PHOTO COLLAGE ── */}

        {/* Photo 1 (restaurant) — top right */}
        <div
          ref={photo1Ref}
          className="absolute"
          style={{
            left: "57%",
            top: "clamp(120px, 12vw, 240px)",
            width: "clamp(260px, 36vw, 695px)",
            zIndex: 2,
          }}
        >
          <Image
            src="/about-photo2.jpg"
            alt="Trüffel Cukrászda"
            width={695}
            height={464}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Photo 2 (pastry table) — lower, overlapping photo 1 */}
        <div
          ref={photo2Ref}
          className="absolute"
          style={{
            left: "40%",
            top: "clamp(360px, 38vw, 580px)",
            width: "clamp(220px, 29vw, 571px)",
            zIndex: 3,
          }}
        >
          <Image
            src="/about-photo1.jpg"
            alt="Trüffel rendezvény"
            width={571}
            height={381}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Spacer so the section is tall enough for the absolutely-positioned photos */}
        <div style={{ paddingTop: "clamp(160px, 22vw, 380px)" }} />
      </div>
    </section>
  );
}
