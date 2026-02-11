"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Andi Pratama",
    role: "Pemilik Rental Billing Playstation",
    content:
      "Pintu Digital Teknologi mengubah kehadiran online kami sepenuhnya. Website tidak hanya terlihat memukau tetapi juga meningkatkan konversi kami sebesar 45%.",
    avatar: "AP",
    color: "bg-blue-50 text-blue-600",
  },
  {
    name: "Rizky Maulana",
    role: "Pengelola Website Drone & Aerial Service",
    content:
      "Timnya paham kebutuhan bisnis kami. Website drone service kami sekarang terlihat modern dan mudah diakses oleh klien.",
    avatar: "RM",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    name: "Siti Nurhaliza",
    role: "Pemilik Landing Page Produk Digital",
    content:
      "Landing page yang dibuat sangat fokus ke konversi. Leads yang masuk jauh lebih banyak dibandingkan website sebelumnya.",
    avatar: "SN",
    color: "bg-purple-50 text-purple-600",
  },
  {
    name: "Dedi Saputra",
    role: "Owner Website Company Profile UMKM",
    content:
      "Hasilnya sesuai dengan kebutuhan bisnis kami. Website terlihat profesional dan membantu meningkatkan kepercayaan pelanggan.",
    avatar: "DS",
    color: "bg-orange-50 text-orange-600",
  },
];

// Duplikasi data untuk efek seamless looping marquee
const scrollTestimonials = [...testimonials, ...testimonials];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative py-24 overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #072331, #0a3044)" }}
    >
      {/* Background Accessories */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-[10%] w-[350px] h-[350px] bg-[#8BCDF0]/[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-10 left-[5%] w-[300px] h-[300px] bg-blue-500/[0.03] rounded-full blur-[100px]" />
        {/* Scattered dots */}
        <div className="absolute top-[15%] left-[12%] w-1 h-1 rounded-full bg-[#8BCDF0]/20" />
        <div className="absolute top-[30%] right-[18%] w-1.5 h-1.5 rounded-full bg-white/10" />
        <div className="absolute bottom-[25%] left-[30%] w-1 h-1 rounded-full bg-cyan-400/15" />
        <div className="absolute top-[50%] right-[25%] w-1 h-1 rounded-full bg-blue-300/15" />
        <div className="absolute bottom-[40%] right-[40%] w-1.5 h-1.5 rounded-full bg-[#8BCDF0]/15" />
        {/* Subtle diagonal lines */}
        <div
          className="absolute inset-0 opacity-[0.008]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(139,205,240,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-white/10 rounded-full text-slate-300 text-sm font-semibold tracking-wide uppercase border border-white/10"
          >
            Testimonial
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Kata mereka tentang{" "}
            <span className="text-[#8BCDF0]">project yang kami buat</span>
          </h2>
          {/* <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Dampak nyata yang dirasakan klien kami setelah bertransformasi digital bersama tim kami.
          </p> */}
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden group py-4">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {scrollTestimonials.map((t, index) => (
            <div
              key={index}
              className="inline-block w-[350px] md:w-[450px] mx-4 whitespace-normal"
            >
              <div className="h-full p-8 bg-white/[0.04] border border-white/[0.08] rounded-3xl hover:border-[#8BCDF0]/30 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-[#8BCDF0]/5 transition-all duration-300 backdrop-blur-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                <p className="text-slate-300 leading-relaxed text-lg mb-8 font-medium">
                  "{t.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center font-bold text-sm`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-white">{t.name}</p>
                    <p className="text-sm text-slate-400">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Fade Gradient Overlay (Kiri & Kanan) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#072331] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a3044] to-transparent z-10" />
      </div>

      {/* Stats Section - Light Version */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-12 bg-slate-50 rounded-[2rem] border border-slate-100">
          {[
            { number: "150+", label: "Klien Puas" },
            { number: "500+", label: "Proyek Selesai" },
            { number: "98%", label: "Retensi Klien" },
            { number: "12+", label: "Tahun Pengalaman" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-1">
                {stat.number}
              </div>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div> */}
    </section>
  );
}
