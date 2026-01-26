"use client";

import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  BarChart3,
  Layers,
  Code2,
  Users,
} from "lucide-react";

// --- Data & Layout Configuration ---
const features = [
  {
    title: "Performa Kilat",
    description:
      "Optimasi core vitals untuk loading time di bawah 100ms. Website yang cepat meningkatkan konversi dan SEO.",
    icon: Zap,
    className: "md:col-span-2", // Kotak Lebar
    gradient: "from-yellow-500/20 to-orange-500/20",
    iconColor: "text-yellow-400",
  },
  {
    title: "Keamanan Enterprise",
    description: "Proteksi DDoS, Enkripsi AES-256, dan audit keamanan berkala.",
    icon: ShieldCheck,
    className: "md:col-span-1", // Kotak Kecil
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  {
    title: "Skalabilitas",
    description:
      "Arsitektur yang siap menangani jutaan request tanpa downtime.",
    icon: Layers,
    className: "md:col-span-1", // Kotak Kecil
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-400",
  },
  {
    title: "Clean Code",
    description:
      "Struktur kode modular yang mudah di-maintenance dan dikembangkan oleh tim manapun di masa depan.",
    icon: Code2,
    className: "md:col-span-2", // Kotak Lebar
    gradient: "from-emerald-500/20 to-green-500/20",
    iconColor: "text-emerald-400",
  },
  {
    title: "Analitik Mendalam",
    description:
      "Integrasi analitik untuk wawasan pengguna dan optimasi berkelanjutan.",
    icon: BarChart3,
    className: "md:col-span-1", // Kotak Kecil
    gradient: "from-pink-500/20 to-red-500/20",
    iconColor: "text-pink-400",
  },
  {
    title: "Dukungan 24/7",
    description:
      "Tim support siap membantu kapan saja untuk memastikan operasional bisnis Anda berjalan lancar.",
    icon: Users,
    className: "md:col-span-1", // Kotak Kecil
    gradient: "from-teal-500/20 to-cyan-500/20",
    iconColor: "text-teal-400",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative py-24 bg-[#072331] overflow-hidden"
    >
      {/* Background Decor (Static) */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Kenapa Memilih Kami?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Kami tidak hanya membangun software, kami membangun pondasi
            teknologi yang kokoh untuk masa depan bisnis Anda.
          </p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group relative rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-sm overflow-hidden hover:border-white/20 transition-colors ${feature.className}`}
            >
              {/* Inner Gradient Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative p-8 h-full flex flex-col items-start">
                <div
                  className={`p-3 rounded-xl bg-white/5 border border-white/10 mb-6 ${feature.iconColor}`}
                >
                  <feature.icon size={32} />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Bottom Line */}
                <div
                  className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${feature.gradient.split(" ")[0].replace("/20", "")} to-transparent transition-all duration-700 group-hover:w-full`}
                />
              </div>
            </motion.div>
          ))}

          {/* Special Stat Card (Optional - untuk variasi visual) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-1 rounded-3xl bg-gradient-to-br from-[#8BCDF0]/10 to-[#8BCDF0]/30 p-8 flex flex-col justify-center items-center text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            <div className="relative z-10">
              <div className="text-5xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-100 font-medium">Uptime Guarantee</div>
              <div className="mt-6 inline-flex items-center gap-2 text-xs text-blue-200 bg-white/10 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Live Monitoring
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
