"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const navLinks = [
  "Termékeink",
  "Esküvő & Rendezvény",
  "Ajánlatok",
  "Galéria",
  "Rólunk",
  "Blog",
  "Kapcsolat",
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current) return;
    const els = navRef.current.querySelectorAll(".nav-item");
    gsap.fromTo(
      els,
      { y: -16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.07, delay: 1.0, ease: "power2.out" }
    );
  }, []);

  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(
        mobileMenuRef.current,
        { clipPath: "circle(0% at calc(100% - 40px) 40px)" },
        { clipPath: "circle(150% at calc(100% - 40px) 40px)", duration: 0.6, ease: "power2.out" }
      );
      const items = mobileMenuRef.current.querySelectorAll(".mobile-link");
      gsap.fromTo(
        items,
        { x: 40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.4, stagger: 0.05, delay: 0.2, ease: "power2.out" }
      );
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-[#E5E6E0]/95 backdrop-blur-sm shadow-sm"
            : "bg-[rgba(229,230,224,0.2)] backdrop-blur-sm"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="/" className="nav-item opacity-0 flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-dark.svg"
              alt="Trüffel"
              className="h-[44px] w-auto"
            />
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="nav-item opacity-0 font-body text-[#541115] text-[13px] xl:text-[14px] uppercase tracking-[0.08em] hover:opacity-60 transition-opacity duration-300 whitespace-nowrap"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right icons */}
          <div className="hidden lg:flex items-center gap-5 flex-shrink-0">
            <button className="nav-item opacity-0 text-[#541115]/70 hover:text-[#541115] transition-colors" aria-label="Keresés">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
            <button className="nav-item opacity-0 text-[#541115]/70 hover:text-[#541115] transition-colors" aria-label="Kedvencek">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
            <button className="nav-item opacity-0 text-[#541115]/70 hover:text-[#541115] transition-colors" aria-label="Fiók">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
            <button className="nav-item opacity-0 text-[#541115]/70 hover:text-[#541115] transition-colors relative" aria-label="Kosár">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#541115] text-white text-[10px] font-body font-medium rounded-full flex items-center justify-center">
                2
              </span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden nav-item opacity-0 text-[#541115] z-[110] relative"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-[1.5px] bg-[#541115] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[9px]" : ""}`} />
              <span className={`block h-[1.5px] bg-[#541115] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-[1.5px] bg-[#541115] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 bg-[#E5E6E0] z-[105] flex flex-col items-center justify-center gap-8"
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="mobile-link font-body text-[#541115] text-[18px] uppercase tracking-[0.15em] hover:opacity-60 transition-opacity"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <div className="flex gap-6 mt-8">
            <button className="text-[#541115]/70 hover:text-[#541115]" aria-label="Keresés">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
            </button>
            <button className="text-[#541115]/70 hover:text-[#541115]" aria-label="Kedvencek">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
            </button>
            <button className="text-[#541115]/70 hover:text-[#541115] relative" aria-label="Kosár">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#541115] text-white text-[10px] font-body rounded-full flex items-center justify-center">2</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
