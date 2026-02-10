"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, CheckCircle2, CreditCard, Sparkles } from "lucide-react";
import Link from "next/link";

const PriceListingSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section
      ref={containerRef}
      id="pricing"
      className="relative py-24 md:py-32 bg-[#072331]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          {/* LEFT COLUMN - PINNED */}
          <aside className="lg:w-1/3 lg:sticky lg:top-32 self-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-xs font-medium text-slate-300 uppercase tracking-widest">
                <CreditCard className="w-3 h-3 text-[#8BCDF0]" />
                <span>Investasi & Harga</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Penawaran <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8BCDF0] via-[#8BCDF0]/60 to-[#8BCDF0]/30">
                  Transparan.
                </span>
              </h2>

              <p className="text-lg text-slate-400 leading-relaxed">
                Tanpa biaya tersembunyi. Investasi terbaik untuk pertumbuhan
                bisnis digital Anda dengan hasil yang terukur.
              </p>

              {/* Progress bar visual */}
              <div className="hidden lg:block w-full h-[2px] bg-slate-800 rounded-full mt-8 relative overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-[#8BCDF0] origin-left"
                  style={{ scaleX: scaleY }}
                />
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN - REPRESENTATIVE CARD */}
          <div className="lg:w-2/3 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative p-8 md:p-10 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-sm hover:border-[#8BCDF0]/30 transition-all duration-500"
            >
              {/* Highlight Badge */}
              <div className="absolute top-0 right-0 p-6">
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#8BCDF0]/10 border border-[#8BCDF0]/20 text-[#8BCDF0] text-xs font-bold uppercase tracking-widest">
                  <Sparkles className="w-3 h-3" /> Most Popular
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Web Development Package
                  </h3>
                  <p className="text-slate-400">
                    Solusi lengkap untuk website bisnis profesional.
                  </p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-slate-500">Mulai dari</span>
                  <span className="text-4xl font-bold text-white">
                    Rp 5.000.000
                  </span>
                </div>

                <div className="h-px bg-slate-800/50 my-2" />

                <div className="grid md:grid-cols-2 gap-4 text-slate-300">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8BCDF0] flex-shrink-0" />
                    <span>Responsive Design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8BCDF0] flex-shrink-0" />
                    <span>SEO Optimization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8BCDF0] flex-shrink-0" />
                    <span>CMS Integration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#8BCDF0] flex-shrink-0" />
                    <span>1 Year Support</span>
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    href="/price-list"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 w-full md:w-auto rounded-xl bg-[#8BCDF0] text-[#072331] font-semibold hover:bg-white transition-all duration-300 group-hover:shadow-[0_0_20px_-5px_rgba(139,205,240,0.3)]"
                  >
                    Lihat Semua Paket Harga
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceListingSection;
