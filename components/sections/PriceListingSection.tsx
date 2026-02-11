"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CreditCard,
  Globe,
  Smartphone,
  Palette,
  Sparkles,
  Star,
} from "lucide-react";
import Link from "next/link";

const pricingCards = [
  {
    icon: Smartphone,
    title: "Mobile App",
    subtitle: "iOS & Android",
    description: "Aplikasi mobile cross-platform dengan performa native.",
    startingPrice: "350.000",
    priceSuffix: "rb",
    features: [
      "MVP Starter",
      "Cross-Platform",
      "Push Notifications",
      "API Integration",
      "Store Submission",
    ],
    recommended: { name: "Cross-Platform", price: "Rp 350.000 rb" },
    gradient: "from-[#8BCDF0] via-cyan-400 to-teal-400",
    glowFrom: "cyan",
    iconBg: "bg-[#8BCDF0]/10 group-hover:bg-[#8BCDF0]/20",
    iconColor: "text-[#8BCDF0]",
    checkColor: "text-[#8BCDF0]",
    popular: false,
  },
  {
    icon: Globe,
    title: "Web Development",
    subtitle: "Website & Web App",
    description: "Bangun kehadiran digital dengan website performa tinggi.",
    startingPrice: "150.000",
    priceSuffix: "rb",
    features: [
      "Landing Page",
      "Company Profile",
      "Custom Web App",
      "CMS Integration",
      "SEO Optimization",
    ],
    recommended: { name: "Company Profile", price: "Rp 150.000 rb" },
    gradient: "from-blue-600 via-blue-500 to-cyan-400",
    glowFrom: "blue",
    iconBg: "bg-blue-500/10 group-hover:bg-blue-500/20",
    iconColor: "text-blue-400",
    checkColor: "text-blue-400",
    popular: true,
  },
  {
    icon: Palette,
    title: "Creative & Design",
    subtitle: "Branding & UI/UX",
    description: "Desain visual memukau yang memperkuat identitas brand.",
    startingPrice: "75.000",
    priceSuffix: "rb",
    features: [
      "Logo & Branding",
      "UI/UX Design",
      "Design System",
      "Social Media Kit",
      "Interactive Prototype",
    ],
    recommended: { name: "UI/UX Design", price: "Rp 75.000 rb" },
    gradient: "from-pink-500 via-rose-500 to-orange-400",
    glowFrom: "pink",
    iconBg: "bg-pink-500/10 group-hover:bg-pink-500/20",
    iconColor: "text-pink-400",
    checkColor: "text-pink-400",
    popular: false,
  },
];

const PriceListingSection = () => {
  return (
    <section
      id="pricing"
      className="relative py-28 md:py-36 bg-[#072331] overflow-hidden"
    >
      {/* Ambient background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#8BCDF0]/[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-500/[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-pink-500/[0.02] rounded-full blur-[100px]" />
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139,205,240,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,205,240,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8BCDF0]/[0.08] border border-[#8BCDF0]/20 text-xs font-semibold text-[#8BCDF0] uppercase tracking-[0.2em] mb-7"
          >
            <CreditCard className="w-3.5 h-3.5" />
            Pricing
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" as const }}
            className="text-4xl md:text-[3.25rem] font-bold text-white leading-[1.15] mb-5 tracking-tight"
          >
            Harga yang
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8BCDF0] to-cyan-300">
              Kami Tawarkan
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: "easeOut" as const,
            }}
            className="text-base md:text-lg text-slate-400/90 leading-relaxed"
          >
            Harga yang jelas & terukur, tanpa biaya tersembunyi dan penawaran
            menarik.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-start">
          {pricingCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: "easeOut" as const,
              }}
              className={`group relative rounded-[1.25rem] transition-all duration-500 ${
                card.popular ? "md:-mt-4 md:mb-[-1rem]" : ""
              }`}
            >
              {/* Gradient border wrapper for popular */}
              {card.popular && (
                <div className="absolute -inset-[1px] rounded-[1.25rem] bg-gradient-to-b from-[#8BCDF0]/50 via-[#8BCDF0]/20 to-transparent pointer-events-none" />
              )}

              {/* Popular badge */}
              {card.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.4,
                    ease: "easeOut" as const,
                  }}
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20"
                >
                  <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#8BCDF0] to-cyan-400 text-[#072331] text-[11px] font-bold uppercase tracking-wider shadow-xl shadow-[#8BCDF0]/25">
                    <Sparkles className="w-3.5 h-3.5" />
                    Most Popular
                  </div>
                </motion.div>
              )}

              <div
                className={`relative h-full flex flex-col rounded-[1.25rem] overflow-hidden transition-all duration-500 ${
                  card.popular
                    ? "bg-[#0c2d3f] shadow-2xl shadow-[#8BCDF0]/10"
                    : "bg-slate-900/50 border border-white/[0.06] hover:border-white/[0.12] hover:shadow-xl hover:shadow-black/20"
                }`}
              >
                {/* Top gradient accent */}
                <div
                  className={`h-1 w-full bg-gradient-to-r ${card.gradient} ${
                    card.popular
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  } transition-opacity duration-500`}
                />

                <div className="flex-1 p-7 md:p-8 pt-6 md:pt-7">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-xl ${card.iconBg} flex items-center justify-center transition-colors duration-300`}
                      >
                        <card.icon className={`w-5 h-5 ${card.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="text-[15px] font-bold text-white leading-tight">
                          {card.title}
                        </h3>
                        <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wider mt-0.5">
                          {card.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-[13px] text-slate-400 leading-relaxed mb-7">
                    {card.description}
                  </p>

                  {/* Price block */}
                  <div className="mb-7">
                    <div className="text-[11px] text-slate-500 uppercase tracking-widest font-medium mb-2">
                      Mulai dari
                    </div>
                    <div className="flex items-end gap-1">
                      <span className="text-sm text-slate-400 font-medium self-start mt-2">
                        Rp
                      </span>
                      <span
                        className={`text-[2.75rem] font-extrabold leading-none tracking-tight ${
                          card.popular
                            ? "text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80"
                            : "text-white"
                        }`}
                      >
                        {card.startingPrice}
                      </span>
                      <span className="text-base text-slate-400 font-semibold mb-1">
                        {card.priceSuffix}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div
                    className={`h-px mb-7 ${
                      card.popular
                        ? "bg-gradient-to-r from-transparent via-[#8BCDF0]/20 to-transparent"
                        : "bg-white/[0.06]"
                    }`}
                  />

                  {/* Features */}
                  <ul className="space-y-3 mb-7">
                    {card.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5">
                        <div
                          className={`w-4.5 h-4.5 rounded-full flex items-center justify-center`}
                        >
                          <Check
                            className={`w-3.5 h-3.5 ${card.checkColor}`}
                            strokeWidth={3}
                          />
                        </div>
                        <span className="text-[13px] text-slate-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Recommendation pill */}
                  <div
                    className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs ${
                      card.popular
                        ? "bg-[#8BCDF0]/[0.08] border border-[#8BCDF0]/15"
                        : "bg-white/[0.03] border border-white/[0.06]"
                    }`}
                  >
                    <Star
                      className={`w-3.5 h-3.5 ${card.iconColor} shrink-0`}
                    />
                    <span className="text-slate-400">
                      Rekomendasi{" "}
                      <span className="text-slate-200 font-semibold">
                        {card.recommended.name}
                      </span>{" "}
                      —{" "}
                      <span
                        className={`${card.popular ? "text-[#8BCDF0]" : card.iconColor} font-bold`}
                      >
                        {card.recommended.price}
                      </span>
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <div className="px-7 md:px-8 pb-7 md:pb-8">
                  <Link
                    href="/price-list"
                    className={`relative flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 overflow-hidden ${
                      card.popular
                        ? "bg-gradient-to-r from-[#8BCDF0] to-cyan-400 text-[#072331] hover:shadow-[0_8px_30px_-6px_rgba(139,205,240,0.35)] hover:scale-[1.02] active:scale-[0.98]"
                        : "bg-white/[0.05] text-white border border-white/[0.08] hover:bg-white/[0.1] hover:border-white/[0.15] hover:scale-[1.02] active:scale-[0.98]"
                    }`}
                  >
                    Lihat Detail Paket
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" as const }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mt-16 pt-10 border-t border-white/[0.04]"
        >
          {[
            { label: "Konsultasi Gratis", icon: "💬" },
            { label: "Tanpa Hidden Fees", icon: "🔒" },
            { label: "Revisi Included", icon: "✏️" },
            { label: "Support Setelah Launch", icon: "🚀" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-sm text-slate-500"
            >
              <span className="text-base">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PriceListingSection;
