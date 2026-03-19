"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    date: "2025. május 16.",
    category: "Újdonság",
    title: "A nyár hűsítő sztárja: a Trüffel Parfétorta",
    excerpt:
      "Büszkén mutatjuk be legújabb kreációnkat, amely garantáltan feldobja a forró napokat. Parfétorta négy rétegben, szezonális gyümölcsökkel.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=1200",
    featured: true,
  },
  {
    date: "2024. szeptember 4.",
    category: "Cukrászat",
    title: "Fedezd fel a Ruby Csokoládé varázsát",
    excerpt:
      "A ruby csokoládé nemcsak ízével, hanem lenyűgöző rózsaszín árnyalatával is elvarázsolja az embert.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=800",
    featured: false,
  },
  {
    date: "2025. január 23.",
    category: "Karrier",
    title: "Tapasztalt cukrászt keresünk csapatunkba",
    excerpt:
      "Szeretettel várjuk tapasztalt cukrász kollégánk jelentkezését a Trüffel Cukrászda pécsi műhelyébe.",
    image: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=800",
    featured: false,
  },
];

export default function BlogPreview() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".blog-item",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 80%" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  const featured = blogPosts[0];
  const secondary = blogPosts.slice(1);

  return (
    <section className="bg-white-warm py-24 md:py-32">
      <div ref={ref} className="max-w-[1400px] mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex items-end justify-between mb-14">
          <div>
            <span className="font-script text-blush-deep text-[26px] block mb-2">naprakész</span>
            <h2
              className="font-display text-anthracite font-light"
              style={{ fontSize: "clamp(28px, 3.5vw, 46px)", letterSpacing: "-0.015em" }}
            >
              Legfrissebb híreink
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.22em] text-anthracite/40 hover:text-anthracite transition-colors duration-300 group"
          >
            Összes bejegyzés
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>

        {/* Featured post — full width horizontal */}
        <article className="blog-item group cursor-pointer opacity-0 mb-14">
          <div className="flex flex-col md:flex-row gap-0 border border-border/60 hover:border-blush/60 transition-colors duration-500">
            <div className="md:w-[52%] relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 52vw"
              />
            </div>
            <div className="md:w-[48%] flex flex-col justify-center px-8 md:px-12 py-10">
              <span className="font-body text-[10px] uppercase tracking-[0.28em] text-gold mb-4">
                {featured.category}
              </span>
              <h3
                className="font-display text-anthracite font-light group-hover:text-blush-deep transition-colors duration-300 leading-[1.15]"
                style={{ fontSize: "clamp(22px, 2.5vw, 32px)" }}
              >
                {featured.title}
              </h3>
              <p className="font-body text-anthracite/55 text-[14px] leading-[1.8] mt-4 max-w-md">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-4 mt-8">
                <span className="font-body text-[11px] text-anthracite/35 tracking-[0.08em]">
                  {featured.date}
                </span>
                <span className="block flex-1 max-w-[24px] h-[1px] bg-border" />
                <span className="font-body text-[11px] uppercase tracking-[0.2em] text-blush-deep group-hover:translate-x-1 transition-transform duration-300">
                  Tovább →
                </span>
              </div>
            </div>
          </div>
        </article>

        {/* Two secondary posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondary.map((post, i) => (
            <article
              key={i}
              className="blog-item group cursor-pointer opacity-0 flex gap-6 items-start"
            >
              <div className="w-[100px] shrink-0 relative overflow-hidden" style={{ aspectRatio: "1" }}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-[1.05] transition-transform duration-500"
                  sizes="100px"
                />
              </div>
              <div className="flex-1 pt-1">
                <span className="font-body text-[10px] uppercase tracking-[0.25em] text-gold/80 block mb-2">
                  {post.category}
                </span>
                <h3 className="font-display text-[18px] text-anthracite font-light group-hover:text-blush-deep transition-colors duration-300 leading-snug">
                  {post.title}
                </h3>
                <div className="flex items-center gap-3 mt-3">
                  <span className="font-body text-[11px] text-anthracite/35">{post.date}</span>
                  <span className="font-body text-[11px] text-blush-deep uppercase tracking-[0.15em] group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
