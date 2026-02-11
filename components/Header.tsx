"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import icon from "@/public/PDT-transparent-NoBuffer.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Services", href: "/#services" },
    { label: "Pricing", href: "/price-list" },
    { label: "Tech Stack", href: "/#techstack" },
    { label: "Why Us", href: "/#features" },
    { label: "Testimonials", href: "/#testimonials" },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full pt-4 transition-all duration-300">
      <nav
        className={`max-w-6xl mx-auto px-6 h-16 flex items-center justify-between rounded-2xl transition-all duration-300 ${
          isScrolled
            ? "bg-[#111111]/80 backdrop-blur-lg shadow-lg mx-4 md:mx-auto"
            : "bg-transparent mx-4 md:mx-auto"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative h-8 md:h-10 w-auto">
            {" "}
            {/* Mengunci tinggi, lebar otomatis */}
            <img
              src={icon.src}
              alt="Logo"
              className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              // Menggunakan h-full agar gambar selalu mengikuti tinggi container div-nya
            />
          </div>
          {/* <span
            className={`text-lg font-bold transition-colors ${
              isScrolled ? "text-slate-900" : "text-slate-200"
            }`}
          >
            PIntu Digital Teknologi
          </span> */}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-sm font-semibold transition-colors hover:text-[#1a6994] ${
                isScrolled ? "text-slate-100" : "text-slate-200"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <Button
            size="sm"
            className="bg-[#0F3B52] hover:bg-[#0F3B52]/50 text-white rounded-xl px-5 font-bold transition-all"
            asChild
          >
            <a href="#contact">Mulai Konsultasi</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-slate-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-24 left-4 right-4 bg-white rounded-3xl p-6 shadow-2xl md:hidden flex flex-col gap-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-bold text-slate-900  pb-2"
              >
                {item.label}
              </Link>
            ))}
            <Button className="w-full bg-blue-600 h-12 rounded-2xl font-bold">
              Hubungi Kami
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
