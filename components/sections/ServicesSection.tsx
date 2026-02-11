"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Cpu,
  Globe,
  Smartphone,
  Palette,
  Database,
  ArrowRight,
  CheckCircle2,
  Video,
} from "lucide-react";

const services = [
  {
    id: "ai",
    icon: Cpu,
    title: "AI, ML & Deep Learning",
    description:
      "Analisis Sentimen, Otomatisasi Proses Bisnis, Analisis Prediktif, Klasifikasi Gambar, Rekomendasi Sistem, Pembuatan Chatbot, dan lainnya",
    features: [
      "Natural Language Processing",
      "Computer Vision",
      "Predictive Models",
      "Chatbot Development",
      "Recommendation Systems",
      "Business Process Automation",
    ],
    color: "text-purple-400",
    border: "hover:border-purple-500/50",
    bg: "hover:bg-purple-500/5",
  },
  {
    id: "web",
    icon: Globe,
    title: "Web Development",
    description:
      "Web Informasi, Web Company Profile, Web Toko Online, Web Landing Page, Web Aplikasi, dan lainnya",
    features: ["SaaS Architecture", "Headless CMS", "Global CDN"],
    color: "text-blue-400",
    border: "hover:border-blue-500/50",
    bg: "hover:bg-blue-500/5",
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Aplikasi Manajemen Tugas, Aplikasi Mobile E-Commerce, Aplikasi Mobile Kesehatan, dan lainnya",
    features: ["Android", "iOS", "Cross-Platform"],
    color: "text-orange-400",
    border: "hover:border-orange-500/50",
    bg: "hover:bg-orange-500/5",
  },
  {
    id: "design",
    icon: Palette,
    title: "UI/UX & Design",
    description:
      "Desain Logo, Desain UI/UX, Desain Kemasan, Desain Banner, Desain Konten Media Sosial, dan lainnya",
    features: ["Logo Design", "UI/UX Design", "Packaging Design"],
    color: "text-pink-400",
    border: "hover:border-pink-500/50",
    bg: "hover:bg-pink-500/5",
  },
  {
    id: "video",
    icon: Video,
    title: "Video Production",
    description:
      "Video Animasi, Video Promosi, Video Edukasi, Video Company Profile, Video Iklan, dan lainnya",
    features: ["Animation Video", "Promotional Video", "Educational Video"],
    color: "text-red-400",
    border: "hover:border-red-500/50",
    bg: "hover:bg-red-500/5",
  },
  {
    id: "data",
    icon: Database,
    title: "Data Engineering",
    description:
      "Data Analisis, Data Visualisasi, Data Mining, Data Warehouse, dan lainnya",
    features: ["Data Analysis", "Data Visualization", "Data Mining"],
    color: "text-emerald-400",
    border: "hover:border-emerald-500/50",
    bg: "hover:bg-emerald-500/5",
  },
];

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.9, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale }}
      className={`group relative p-8 rounded-2xl bg-slate-900/40 border border-white/5 transition-all duration-500 ${service.border} ${service.bg}`}
    >
      <div className="flex flex-col md:flex-row gap-6">
        <div
          className={`shrink-0 w-16 h-16 rounded-xl bg-slate-800/50 flex items-center justify-center border border-white/5 ${service.color}`}
        >
          <service.icon className="w-8 h-8" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-semibold text-slate-100 group-hover:text-white transition-colors">
              {service.title}
            </h3>
            <ArrowRight
              className={`w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ${service.color}`}
            />
          </div>
          <p className="text-slate-400 leading-relaxed mb-6">
            {service.description}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {service.features.map((feat: string, i: number) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-slate-400 group-hover:text-slate-300 transition-colors"
              >
                <CheckCircle2 className={`w-4 h-4 ${service.color}`} />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ServicesSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    /* Hapus 'overflow-hidden' pada section utama agar sticky bekerja */
    <section
      ref={containerRef}
      id="services"
      className="relative py-24 md:py-32"
      style={{ background: "linear-gradient(to bottom, #050505, #072331)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          {/* LEFT COLUMN - PINNED */}
          <aside className="lg:w-1/3 lg:sticky lg:top-32 self-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-xs font-medium text-slate-300 uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                Layanan Kami
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Solusi Digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8BCDF0] via-[#8BCDF0]/60 to-[#8BCDF0]/30">
                  End-to-End.
                </span>
              </h2>

              <p className="text-lg text-slate-400 leading-relaxed">
                Kami merancang ekosistem digital yang mempercepat pertumbuhan
                bisnis Anda dengan teknologi terkini.
              </p>

              {/* Progress bar visual */}
              <div className="hidden lg:block w-full h-[2px] bg-slate-800 rounded-full mt-8 relative overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-blue-400 origin-left"
                  style={{ scaleX: scaleY }}
                />
              </div>
            </div>
          </aside>

          {/* RIGHT COLUMN - SCROLLABLE */}
          <div className="lg:w-2/3 flex flex-col gap-8 md:gap-12">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
