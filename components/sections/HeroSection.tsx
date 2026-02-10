"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Play, MousePointer2, Sparkles } from "lucide-react";
import { motion, cubicBezier } from "framer-motion";
import Image from "next/image";

export function HeroSection() {
  // Animasi Slide Up yang ringan
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: cubicBezier(0.21, 0.47, 0.32, 0.98),
      },
    }),
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/herosection.jpg"
          alt="Background"
          fill
          priority
          className="object-cover opacity-40 scale-105"
        />
        {/* Deep Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(99,102,241,0.15),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full pt-20">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* 1. Animated Badge */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl"
          >
            <Sparkles className="w-4 h-4 text-[#8BCDF0]" />
            <span className="text-xs font-bold text-blue-100 tracking-[0.2em] uppercase">
              The Next Gen Digital Agency
            </span>
          </motion.div>

          {/* 2. Headline with High Contrast */}
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white leading-[0.95]">
              TRANSFORMASI <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8BCDF0] via-[#8BCDF0]/60 to-[#8BCDF0]/30">
                TANPA BATAS.
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-light leading-relaxed">
              Kami menyatukan{" "}
              <span className="text-white font-medium">
                Artificial Intelligence
              </span>{" "}
              dan desain kelas dunia untuk membangun ekosistem digital yang
              mendominasi pasar.
            </p>
          </motion.div>

          {/* 3. Interactive CTA Section */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <Button
              size="lg"
              className="h-16 px-10 bg-[#8BCDF0]/20 hover:bg-[#8BCDF0]/50 text-white rounded-2xl text-lg font-bold transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] group"
              asChild
            >
              <a href="#contact">
                Mulai Proyek
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <button className="flex items-center gap-3 px-8 py-4 text-white font-semibold hover:text-[#8BCDF0] transition-colors group">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-blue-600/20 transition-all">
                <Play className="w-4 h-4 fill-current" />
              </div>
              Lihat Showreel
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom Gradient Line */}
      {/* <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" /> */}
    </section>
  );
}
