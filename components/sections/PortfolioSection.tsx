"use client";

import { ExternalLink, Sparkles, ArrowRight, Globe, Code2, Zap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const portfolioProjects = [
  {
    title: "TechFlow Analytics",
    description:
      "Dashboard analytics real-time dengan visualisasi data interaktif yang memudahkan tracking metrik bisnis",
    image: "bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500",
    tags: ["React", "Node.js", "PostgreSQL", "WebSocket"],
    link: "#",
    stats: { users: "2.5K", performance: "300%", timeline: "6 minggu" },
    icon: <Globe className="w-8 h-8" />,
  },
  {
    title: "CloudSync Platform",
    description:
      "Solusi cloud storage dengan manajemen file canggih dan enkripsi end-to-end yang aman",
    image: "bg-gradient-to-br from-cyan-400 via-teal-500 to-emerald-500",
    tags: ["Next.js", "AWS", "TypeScript", "Prisma"],
    link: "#",
    stats: { users: "10K", performance: "500%", timeline: "8 minggu" },
    icon: <Code2 className="w-8 h-8" />,
  },
  {
    title: "StartupHub Community",
    description:
      "Platform sosial yang menghubungkan entrepreneur dengan investor secara efisien",
    image: "bg-gradient-to-br from-amber-400 via-orange-500 to-red-500",
    tags: ["Next.js", "Supabase", "Tailwind", "AI Matching"],
    link: "#",
    stats: { users: "15K", performance: "250%", timeline: "5 minggu" },
    icon: <Zap className="w-8 h-8" />,
  },
  {
    title: "GrowthHub Academy",
    description:
      "Platform e-learning dengan kursus interaktif dan sertifikasi profesional",
    image: "bg-gradient-to-br from-rose-400 via-pink-500 to-fuchsia-500",
    tags: ["React", "Stripe", "Firebase", "PWA"],
    link: "#",
    stats: { users: "5K+", performance: "400%", timeline: "7 minggu" },
    icon: <Heart className="w-8 h-8" />,
  },
];

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="relative py-24 md:py-36 overflow-hidden"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
      
      {/* Floating Decorative Elements */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-20 w-32 h-32 rounded-full bg-gradient-to-r from-indigo-400/30 to-purple-400/30 blur-2xl"
      />
      <motion.div
        animate={{
          y: [0, 40, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-40 left-10 w-48 h-48 rounded-full bg-gradient-to-r from-pink-400/20 to-rose-400/20 blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400/25 to-teal-400/25 blur-2xl"
      />

      {/* Floating Shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-32 right-1/4 w-4 h-4 rounded-full bg-indigo-400/60"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-60 right-1/3 w-6 h-6 rounded-full bg-pink-400/50"
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-20 w-3 h-3 rounded-full bg-amber-400/70"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm rounded-full border border-indigo-100 shadow-sm shadow-indigo-100/50 mb-6"
          >
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-indigo-600" />
            </motion.span>
            <span className="text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              PORTFOLIO KAMI
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-slate-900">Karya yang</span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Menginspirasi
              </span>
              <motion.svg
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute -bottom-2 left-0 w-full h-3"
                viewBox="0 0 200 10"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M0,5 Q50,0 100,5 T200,5"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="50%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Setiap proyek adalah cerita unik tentang inovasi dan kreativitas
          </motion.p>
        </motion.div>

        {/* Portfolio Grid - Asymmetric Layout */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`group ${index % 2 === 1 ? 'md:-mt-12' : ''}`}
            >
              <motion.a
                href={project.link}
                className="block"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-200/50 transition-all duration-500">
                  {/* Image with Gradient */}
                  <div className={`${project.image} h-64 md:h-72 relative overflow-hidden p-8 flex items-center justify-center`}>
                    {/* Pattern Overlay */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      }} />
                    </div>
                    
                    {/* Floating Icon */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="relative bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-white"
                    >
                      {project.icon}
                    </motion.div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 space-y-5">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed font-light">
                        {project.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          whileHover={{ scale: 1.05 }}
                          className="px-4 py-2 text-sm font-medium rounded-full bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700 hover:from-indigo-100 hover:to-purple-100 hover:text-indigo-700 transition-all duration-300 cursor-pointer border border-slate-200"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Stats Bar */}
                    <div className="pt-5 border-t border-slate-100">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <div className="text-lg font-bold text-slate-900">{project.stats.users}</div>
                            <div className="text-xs text-slate-500">Pengguna</div>
                          </div>
                          <div className="w-px h-8 bg-slate-200" />
                          <div className="text-center">
                            <div className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                              {project.stats.performance}
                            </div>
                            <div className="text-xs text-slate-500">Growth</div>
                          </div>
                        </div>
                        <motion.div
                          whileHover={{ x: 4 }}
                          className="flex items-center gap-2 text-indigo-600 font-medium group-hover:text-purple-600 transition-colors"
                        >
                          <span>Detail</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 md:mt-28"
        >
          <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-[2.5rem] p-1 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient-xy" />
            <div className="relative bg-white/95 backdrop-blur-sm rounded-[2.4rem] p-8 md:p-12 text-center">
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
              >
                Mari Buat Sesuatu yang
                <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2">
                  Luar Biasa Bersama
                </span>
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-lg text-slate-600 mb-8 max-w-xl mx-auto"
              >
                Wujudkan ide Anda menjadi kenyataan dengan solusi digital yang kreatif dan inovatif
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 text-white px-10 py-7 text-lg rounded-2xl shadow-xl shadow-indigo-200/50 hover:shadow-2xl hover:shadow-indigo-300/50 transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <a href="#contact" className="flex items-center gap-3">
                    Mulai Proyek
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
