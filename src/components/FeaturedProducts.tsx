"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const products = [
  { id: 1, name: "Fertődi Kirsch torta", price: "13.000 Ft", img: "/cake1.jpg" },
  { id: 2, name: "Epres Ruby torta",     price: "13.000 Ft", img: "/cake2.jpg" },
  { id: 3, name: "Trüffel torta",        price: "13.000 Ft", img: "/cake3.jpg" },
  { id: 4, name: "Almás mákos torta",    price: "13.000 Ft", img: "/cake4.jpg" },
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
      className="relative py-24 px-6 lg:px-20 overflow-hidden"
      style={{ background: "#E5E6E0" }}
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

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <p className="font-script text-[#541115]/30 text-[80px] leading-none -mb-8 select-none">
            Kiemelt
          </p>
          <h2 className="font-body text-[#541115] text-[clamp(36px,4vw,64px)] uppercase tracking-[0.15em] font-medium">
            Termékeink
          </h2>
          <p className="mt-4 font-body text-[#541115]/70 text-[15px] max-w-[620px] mx-auto leading-relaxed">
            A Trüffel az a hely, ahol vidáman köszönnek a torták és a fagylaltok
            tetejéről a valódi gyümölcsök, az igazi csokoládék, a hamisítatlan tejszínhabok.
          </p>
        </div>

        {/* Product grid */}
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
          {products.map((product) => (
            <div key={product.id} className="product-card group cursor-pointer">
              <div className="overflow-hidden rounded-sm aspect-square mb-4 bg-white/40">
                <Image
                  src={product.img}
                  alt={product.name}
                  width={350}
                  height={350}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="font-body text-[#541115] text-[13px] tracking-[0.05em] mb-1">
                {product.name}
              </p>
              <p className="font-body text-[#541115]/60 text-[12px]">{product.price}</p>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <div className="mt-14 flex justify-center">
          <a
            href="#"
            className="inline-block px-10 py-3 border border-[#541115] text-[#541115] font-body text-[12px] uppercase tracking-[0.2em] hover:bg-[#541115] hover:text-white transition-all duration-300"
          >
            Összes termék
          </a>
        </div>
      </div>
    </section>
  );
}
