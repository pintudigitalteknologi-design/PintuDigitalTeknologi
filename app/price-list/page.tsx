"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Shield,
  Zap,
  Globe,
  Smartphone,
  Palette,
} from "lucide-react";
import Link from "next/link";

const pricingData = [
  {
    category: "Web Development",
    icon: Globe,
    description: "Bangun website performa tinggi dengan teknologi modern.",
    plans: [
      {
        name: "Landing Page",
        price: "Rp 3.500.000",
        description: "Perfect for marketing campaigns and portfolios.",
        features: [
          "One Page Design",
          "Mobile Responsive",
          "Contact Form",
          "Basic SEO",
          "Fast Loading",
        ],
        highlight: false,
      },
      {
        name: "Company Profile",
        price: "Rp 7.000.000",
        description: "Professional presence for your growing business.",
        features: [
          "Up to 5 Pages",
          "CMS Integration",
          "Blog Functionality",
          "Analytics Setup",
          "WhatsApp Widget",
        ],
        highlight: true,
      },
      {
        name: "Custom Web App",
        price: "Custom",
        description: "Tailored solutions for complex requirements.",
        features: [
          "Custom Database",
          "User Authentication",
          "API Integration",
          "Dashboard Admin",
          "Cloud Hosting Setup",
        ],
        highlight: false,
      },
    ],
  },
  {
    category: "Mobile Application",
    icon: Smartphone,
    description:
      "Aplikasi mobile native & cross-platform untuk iOS dan Android.",
    plans: [
      {
        name: "MVP Starter",
        price: "Rp 15.000.000",
        description: "Validasi ide aplikasi Anda dengan cepat.",
        features: [
          "Core Features",
          "Android Only",
          "Basic UI/UX",
          "Local Database",
          "PlayStore Submission",
        ],
        highlight: false,
      },
      {
        name: "Cross-Platform",
        price: "Rp 25.000.000",
        description: "Running di iOS dan Android dengan satu codebase.",
        features: [
          "React Native / Flutter",
          "iOS & Android",
          "Push Notifications",
          "Api Integration",
          "App Store & Playstore",
        ],
        highlight: true,
      },
    ],
  },
  {
    category: "Creative & Design",
    icon: Palette,
    description: "Desain visual yang memukau dan berorientasi konversi.",
    plans: [
      {
        name: "Logo & Branding",
        price: "Rp 2.500.000",
        description: "Identitas visual yang kuat untuk brand Anda.",
        features: [
          "3 Logo Concepts",
          "Brand Guidelines",
          "Stationery Design",
          "Social Media Kit",
          "Vector Files",
        ],
        highlight: false,
      },
      {
        name: "UI/UX Design",
        price: "Rp 5.000.000",
        description: "Desain antarmuka aplikasi/web yang user-friendly.",
        features: [
          "User Research",
          "Wireframing",
          "High-Fidelity Mockups",
          "Interactive Prototype",
          "Design System",
        ],
        highlight: true,
      },
    ],
  },
];

export default function PriceListPage() {
  return (
    <main
      className="min-h-screen bg-[#072331] text-white selection:bg-[#8BCDF0]/30"
      style={{ background: "linear-gradient(to top, #050505, #072331)" }}
    >
      {/* Header Section */}
      <section className="relative py-24 px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8BCDF0]/10 border border-[#8BCDF0]/20 text-[#8BCDF0] text-sm font-bold uppercase tracking-widest mb-6">
              <Zap className="w-4 h-4" />
              Simple Pricing
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Investasi Transparan <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8BCDF0] to-blue-400">
                Tanpa Hidden Fees.
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Kami
              menawarkan solusi fleksibel dengan hasil berkualitas tinggi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Modules */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 pb-32 space-y-24">
        {pricingData.map((section, sIdx) => (
          <section
            key={sIdx}
            className="scroll-mt-32"
            id={section.category.toLowerCase().replace(/\s+/g, "-")}
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 rounded-2xl bg-slate-800 text-[#8BCDF0]">
                <section.icon className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">
                  {section.category}
                </h2>
                <p className="text-slate-400 mt-1">{section.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.plans.map((plan, pIdx) => (
                <motion.div
                  key={pIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: pIdx * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col p-8 rounded-3xl border ${plan.highlight ? "bg-slate-800/50 border-[#8BCDF0]/50 shadow-2xl shadow-[#8BCDF0]/5" : "bg-slate-900/20 border-white/5 hover:border-white/10"} transition-all duration-300`}
                >
                  {plan.highlight && (
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-2 px-3 py-1 bg-[#8BCDF0] text-[#072331] text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
                      Recommended
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    <div className="text-3xl font-bold text-[#8BCDF0] mb-2">
                      {plan.price}
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  <div className="flex-1 space-y-4 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-3 text-sm text-slate-300"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#8BCDF0]/80 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/#contact"
                    className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold transition-all duration-300 ${plan.highlight ? "bg-[#8BCDF0] text-[#072331] hover:bg-white" : "bg-slate-800 text-white hover:bg-slate-700"}`}
                  >
                    Pilih Paket <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        ))}

        {/* FAQ / Trust Section */}
        <section className="bg-slate-900/30 rounded-3xl p-8 md:p-12 border border-white/5 text-center">
          <Shield className="w-12 h-12 text-[#8BCDF0] mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Butuh Penawaran Khusus?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            Kami mengerti setiap bisnis unik. Jika paket di atas tidak sesuai
            dengan kebutuhan spesifik Anda, silakan hubungi kami untuk diskusi
            lebih lanjut.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#8BCDF0] text-[#072331] rounded-xl font-bold hover:bg-white transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
            Konsultasi Gratis
          </Link>
        </section>
      </div>
    </main>
  );
}
