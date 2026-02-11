"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Cpu,
  Globe,
  Smartphone,
  Palette,
  Database,
  Terminal,
  Layers,
  Code2,
  ArrowRight,
  Video,
} from "lucide-react";
import Image from "next/image";

// Struktur Data Baru: Fokus pada Tool & Logo
const techCategories = [
  {
    title: "AI & Machine Learning",
    icon: <Cpu className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    tool: [
      { name: "Python", logo: "/logo/python.svg", level: "Core" },
      {
        name: "TensorFlow",
        logo: "/logo/tensorflow.svg",
        level: "Library",
      },
      { name: "PyTorch", logo: "/logo/PyTorch.svg", level: "Library" },
      { name: "OpenCV", logo: "/logo/opencv.svg", level: "Vision" },
      { name: "Jupyter", logo: "/logo/Jupyter.svg", level: "Env" },
      {
        name: "Scikit-Learn",
        logo: "/logo/scikit-learn.svg",
        level: "ML",
      },
    ],
  },
  {
    title: "Full Stack Development",
    icon: <Globe className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    tool: [
      { name: "Next.js", logo: "/logo/nextjs.svg", level: "Frontend" },
      { name: "Laravel", logo: "/logo/Laravel.svg", level: "Backend" },
      { name: "React", logo: "/logo/React.svg", level: "UI" },
      {
        name: "TypeScript",
        logo: "/logo/TypeScript.svg",
        level: "Lang",
      },
      { name: "Supabase", logo: "/logo/supabase.svg", level: "BaaS" },
      { name: "MongoDB", logo: "/logo/MongoDB.svg", level: "NoSQL" },
      {
        name: "ExpressJS",
        logo: "/logo/Express.svg",
        level: "Backend",
      },
    ],
  },
  {
    title: "UI/UX & Brand Design",
    icon: <Palette className="w-6 h-6" />,
    color: "from-pink-500 to-rose-500",
    tool: [
      { name: "Figma", logo: "/logo/Figma.svg", level: "Design" },
      { name: "Adobe XD", logo: "/logo/AdobeXD.svg", level: "Proto" },
      {
        name: "Illustrator",
        logo: "/logo/AdobeIllustrator.svg",
        level: "Vector",
      },
      {
        name: "Photoshop",
        logo: "/logo/photoshop.svg",
        level: "Raster",
      },
      { name: "Framer", logo: "/logo/framer.svg", level: "Interact" },
    ],
  },
  {
    title: "Video & Photo Editing",
    icon: <Video className="w-6 h-6" />,
    color: "from-red-500 to-orange-500",
    tool: [
      {
        name: "Premiere",
        logo: "/logo/AdobePremierePro.svg",
        level: "Editor",
      },
      {
        name: "After Effects",
        logo: "/logo/AfterEffects.svg",
        level: "VFX",
      },
      {
        name: "Illustrator",
        logo: "/logo/AdobeIllustrator.svg",
        level: "Vector",
      },
      {
        name: "Photoshop",
        logo: "/logo/photoshop.svg",
        level: "Raster",
      },
    ],
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="w-6 h-6" />,
    color: "from-indigo-500 to-purple-500",
    tool: [
      {
        name: "Flutter",
        logo: "/logo/Flutter.svg",
        level: "Cross-Platform",
      },
      {
        name: "React Native",
        logo: "/logo/React.svg",
        level: "Cross-Platform",
      },
      {
        name: "Android Studio",
        logo: "/logo/Android.svg",
        level: "Native",
      },
      {
        name: "Firebase",
        logo: "/logo/Firebase.svg",
        level: "Backend",
      },
    ],
  },
];

const TechCard = ({ category, index }: { category: any; index: number }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.95, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale }}
      className="p-8 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-sm mb-10"
    >
      <div className="flex items-center gap-4 mb-10">
        <div
          className={`p-3 rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-xl`}
        >
          {category.icon}
        </div>
        <h3 className="text-3xl font-bold text-white tracking-tight">
          {category.title}
        </h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {category.tool.map((tool: any, i: number) => (
          <div
            key={i}
            className="group relative flex flex-col items-center p-6 rounded-2xl bg-slate-800/20 border border-white/5 hover:border-[#8BCDF0]/40 transition-all duration-300"
          >
            <Image
              src={tool.logo}
              alt={tool.name}
              width={40}
              height={40}
              className="w-10 h-10 mb-4 text-slate-400 group-hover:text-[#8BCDF0] transition-colors"
            />
            <p className="text-sm font-bold text-slate-200 text-center">
              {tool.name}
            </p>
            <span className="text-[10px] text-slate-400 uppercase tracking-tighter mt-1">
              {tool.level}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default function TechStackSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const progressLine = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section
      ref={containerRef}
      id="techstack"
      className="relative bg-[#072331] py-24 md:py-36 overflow-visible"
    >
      {/* Decorative Background Accessories */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glow orbs */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-500/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-40 -left-20 w-[400px] h-[400px] bg-[#8BCDF0]/[0.04] rounded-full blur-[100px]" />
        {/* Dot particles */}
        <div className="absolute top-32 left-[15%] w-1.5 h-1.5 rounded-full bg-[#8BCDF0]/20" />
        <div className="absolute top-[20%] right-[20%] w-1 h-1 rounded-full bg-purple-400/25" />
        <div className="absolute top-[45%] left-[8%] w-2 h-2 rounded-full bg-blue-400/15" />
        <div className="absolute bottom-[30%] right-[12%] w-1.5 h-1.5 rounded-full bg-cyan-400/20" />
        <div className="absolute bottom-[15%] left-[25%] w-1 h-1 rounded-full bg-[#8BCDF0]/25" />
        <div className="absolute top-[60%] right-[35%] w-1 h-1 rounded-full bg-white/10" />
        {/* Subtle crosshatch lines */}
        <div
          className="absolute inset-0 opacity-[0.012]"
          style={{
            backgroundImage:
              "linear-gradient(45deg, rgba(139,205,240,0.5) 1px, transparent 1px), linear-gradient(-45deg, rgba(139,205,240,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* HEADER: STICKY LEFT */}
          <aside className="lg:w-1/3 lg:sticky lg:top-32 self-start">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[#8BCDF0] text-xs font-bold uppercase tracking-widest">
                <Terminal className="w-3 h-3" /> Expertise
              </span>

              <h2 className="text-5xl font-bold text-white leading-tight">
                Modern <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8BCDF0] via-[#8BCDF0]/60 to-[#8BCDF0]/30">
                  Tech Stack.
                </span>
              </h2>

              <p className="text-lg text-slate-400 leading-relaxed">
                Kami memilih instrumen terbaik untuk membangun skalabilitas,
                keamanan, dan performa tinggi pada produk digital Anda.
              </p>

              <div className="pt-8 space-y-4">
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-[#8BCDF0]" />
                  </div>
                  <span className="text-sm font-medium">
                    Clean Code Standards
                  </span>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                    <Layers className="w-5 h-5 text-[#8BCDF0]" />
                  </div>
                  <span className="text-sm font-medium">
                    Scalable Architecture
                  </span>
                </div>
              </div>

              {/* Progress Scroll Visual */}
              <div className="hidden lg:block pt-12">
                <div className="h-[1px] w-full bg-slate-800 relative">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-[#8BCDF0] origin-left"
                    style={{ scaleX: progressLine }}
                  />
                </div>
                <p className="text-[10px] text-slate-400 mt-2 tracking-widest uppercase">
                  Scroll to explore tools
                </p>
              </div>
            </div>
          </aside>

          {/* GRID: SCROLLABLE RIGHT */}
          <div className="lg:w-2/3 flex flex-col gap-10">
            {techCategories.map((cat, idx) => (
              <TechCard key={idx} category={cat} index={idx} />
            ))}

            {/* CTA Box */}
            <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-600/20 to-[#8BCDF0]/10 border border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-xl font-bold text-white italic">
                  Punya spesifikasi teknologi khusus?
                </h4>
                <p className="text-slate-400 text-sm mt-1">
                  Kami siap beradaptasi dengan stack pilihan perusahaan Anda.
                </p>
              </div>
              <button className="px-6 py-3 bg-[#8BCDF0] text-[#072331] rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-white transition-colors">
                Konsultasi Stack <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
