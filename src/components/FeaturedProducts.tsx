"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const products = [
  { id: 1, name: "Fertődi Kirsch torta", price: "13.000 Ft", img: "/cake1.png" },
  { id: 2, name: "Epres Ruby torta",     price: "13.000 Ft", img: "/cake2.png" },
  { id: 3, name: "Trüffel torta",        price: "13.000 Ft", img: "/cake3.png" },
  { id: 4, name: "Almás mákos torta",    price: "13.000 Ft", img: "/cake4.png" },
];

export default function FeaturedProducts() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        }
      );

      const cards = gridRef.current?.querySelectorAll(".product-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pt-4 pb-24 px-6 lg:px-20"
      style={{ background: "#EDEDEB" }}
    >

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <p className="font-script text-[#541115]/30 leading-none -mb-14 select-none" style={{ fontSize: "clamp(60px, 7vw, 100px)" }}>
            Kiemelt
          </p>
          <h2 className="font-body text-[#541115] font-medium" style={{ fontSize: "clamp(48px, 5vw, 96px)", letterSpacing: "3.84px" }}>
            Termékeink
          </h2>
          <p className="mt-4 font-body text-[#541115]/70 text-[24px] max-w-[900px] mx-auto leading-relaxed">
            A Trüffel az a hely, ahol vidáman köszönnek a torták és a fagylaltok
            tetejéről a valódi gyümölcsök, az igazi csokoládék, a hamisítatlan tejszínhabok.
          </p>
        </div>

        {/* Product grid with arrows */}
        <div className="relative flex items-center gap-4">
          {/* Left arrow */}
          <button className="flex-shrink-0 text-[#541115]/40 hover:text-[#541115] transition-colors text-[40px] leading-none pb-1">
            &#8249;
          </button>

          <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
            {products.map((product) => (
              <div key={product.id} className="product-card group cursor-pointer text-center">
                <div className="mb-5">
                  <Image
                    src={product.img}
                    alt={product.name}
                    width={290}
                    height={290}
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="font-body text-[#541115] text-[15px] tracking-[0.04em] mb-2">
                  {product.name}
                </p>
                <p className="font-body text-[#541115] text-[14px]">{product.price}</p>
              </div>
            ))}
          </div>

          {/* Right arrow */}
          <button className="flex-shrink-0 text-[#541115]/40 hover:text-[#541115] transition-colors text-[40px] leading-none pb-1">
            &#8250;
          </button>
        </div>

        {/* CTA button */}
        <div className="mt-14 flex justify-center">
          <a
            href="#"
            className="inline-block px-16 py-4 border border-[#541115] text-[#541115] font-body text-[13px] uppercase tracking-[0.25em] hover:bg-[#541115] hover:text-white transition-all duration-300"
          >
            Összes termék
          </a>
        </div>
      </div>
    </section>
  );
}
