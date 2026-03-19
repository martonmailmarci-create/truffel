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
      className="relative overflow-hidden"
      style={{ background: "#E5E6E0", zIndex: 1 }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/bg-texture.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.25,
        }}
      />

      <div
        className="relative max-w-[1600px] mx-auto px-6 lg:px-20"
        style={{ paddingTop: "80px", paddingBottom: "120px", minHeight: "700px" }}
      >
        {/* ── LEFT TEXT COLUMN ── */}
        <div ref={textRef} className="relative z-10" style={{ maxWidth: "44%" }}>
          {/* Faded script overlay */}
          <p
            className="font-script select-none leading-none"
            style={{
              color: "#541115",
              opacity: 0.22,
              fontSize: "clamp(64px, 9vw, 160px)",
              marginBottom: "-0.15em",
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
              fontSize: "clamp(52px, 6.5vw, 96px)",
              letterSpacing: "0.04em",
              marginBottom: "clamp(24px, 3vw, 48px)",
            }}
          >
            Másképp
          </h2>

          {/* Body text */}
          <p
            className="font-body leading-relaxed mb-5"
            style={{ color: "#541115", opacity: 0.8, fontSize: "clamp(14px, 1.25vw, 20px)", maxWidth: "520px" }}
          >
            A Trüffel az a hely, ahol vidáman köszönnek a torták és a fagylaltok
            tetejéről a valódi gyümölcsök, az igazi csokoládék, a hamisítatlan
            tejszínhabok.
          </p>
          <p
            className="font-body leading-relaxed"
            style={{ color: "#541115", opacity: 0.8, fontSize: "clamp(14px, 1.25vw, 20px)", maxWidth: "520px" }}
          >
            Ahol jó megpihenni, elidőzni, valódi ízeket, különleges aromákat
            felfedezni. Ahol nem kell megalkudni, mert a sütemények természetes
            hozzávalók felhasználásával, adalékanyagok nélkül, szeretettel
            készülnek.
          </p>
        </div>

        {/* ── RIGHT PHOTO COLLAGE ── */}

        {/* Photo 2 (server/restaurant) — top right */}
        <div
          ref={photo1Ref}
          className="absolute"
          style={{
            left: "58%",
            top: "0px",
            width: "clamp(280px, 36vw, 700px)",
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

        {/* Photo 1 (pastry table) — lower center, overlapping photo 2 */}
        <div
          ref={photo2Ref}
          className="absolute"
          style={{
            left: "38%",
            top: "clamp(300px, 38vw, 580px)",
            width: "clamp(240px, 30vw, 580px)",
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
        <div style={{ paddingTop: "clamp(400px, 50vw, 750px)" }} />
      </div>
    </section>
  );
}
