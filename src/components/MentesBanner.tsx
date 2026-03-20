"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function MentesBanner() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 1.0,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );

      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 1.0,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 lg:px-20"
      style={{ background: "#EDEDEB" }}
    >

      <div className="relative z-10 max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div ref={imageRef} className="overflow-hidden rounded-sm">
          <Image
            src="/mentes-photo.jpg"
            alt="Mentes sütemények"
            width={700}
            height={800}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text */}
        <div ref={textRef}>
          <h2 className="font-body font-medium text-[#541115] leading-tight mb-6" style={{ fontSize: "clamp(28px, 3vw, 48px)" }}>
            Nem kell megalkudni, mentes sem jelent kevesebbet
          </h2>
          <p className="font-body text-[#541115]/70 text-[24px] leading-relaxed mb-6">
            &bdquo;Az országban az elsők között készítettünk cukormentes, laktóz- és
            lisztmentes süteményeket. Mára bátran kijelenthetjük: sem íz, sem
            minőség tekintetében nem kell megalkudnia annak, aki valamilyen
            táplálkozási problémával küzd.&ldquo;
          </p>
          <ul className="space-y-2 mb-10">
            {[
              "Cukor- és lisztmentes torták",
              "Laktóz- és tejmentes opciók",
              "Teljes vegán választék",
              "Íz és minőség kompromisszum nélkül",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 font-body text-[#541115] text-[15px]">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#541115] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="inline-block px-16 py-4 border border-[#541115] text-[#541115] font-body text-[13px] uppercase tracking-[0.25em] hover:bg-[#541115] hover:text-white transition-all duration-300"
          >
            Mentes termékeink
          </a>
        </div>
      </div>
    </section>
  );
}
