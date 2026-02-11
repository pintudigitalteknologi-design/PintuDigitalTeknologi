"use client";

import Link from "next/link";
import {
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative border-t border-white/[0.06] pt-20 pb-10 text-slate-400"
      style={{ background: "linear-gradient(to bottom, #0d3a54, #0f4060)" }}
    >
      {/* Background Accessories */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[300px] bg-[#8BCDF0]/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-[300px] h-[250px] bg-blue-500/[0.03] rounded-full blur-[100px]" />
        <div className="absolute top-[20%] right-[10%] w-1 h-1 rounded-full bg-[#8BCDF0]/15" />
        <div className="absolute bottom-[30%] left-[15%] w-1.5 h-1.5 rounded-full bg-white/8" />
        <div className="absolute top-[50%] left-[40%] w-1 h-1 rounded-full bg-cyan-400/12" />
        <div className="absolute bottom-[50%] right-[25%] w-1 h-1 rounded-full bg-[#8BCDF0]/10" />
        <div
          className="absolute inset-0 opacity-[0.01]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(139,205,240,0.4) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Info Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex flex-col group">
              <div className="flex items-center gap-1">
                <span
                  className={`text-xl md:text-2xl font-black tracking-tighter transition-colors text-white`}
                >
                  PINTU<span className="text-[#8BCDF0]"> DIGITAL</span>
                </span>
              </div>
              <span
                className={`text-[10px] font-bold uppercase tracking-[0.3em] -mt-1 transition-colors text-white`}
              >
                Teknologi
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Membangun masa depan digital melalui integrasi AI dan kreativitas
              tanpa batas. Solusi cerdas untuk bisnis modern.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Github, label: "GitHub" },
              ].map(({ Icon, label }, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-[#8BCDF0] hover:text-[#072331] hover:border-[#8BCDF0] transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Layanan Utama */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">
              Layanan
            </h4>
            <ul className="space-y-4">
              {[
                "AI Solutions",
                "Web Development",
                "Mobile Apps",
                "Visual Design",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-[#8BCDF0] hover:translate-x-1 transition-all flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-slate-600 rounded-full group-hover:bg-[#8BCDF0] transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bantuan & Support */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">
              Bantuan
            </h4>
            <ul className="space-y-4">
              {[
                "Pusat Bantuan",
                "Syarat & Ketentuan",
                "Kebijakan Privasi",
                "Dokumentasi",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-[#8BCDF0] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div className="space-y-6">
            <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">
              Kontak Kami
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-[#8BCDF0] shrink-0" size={20} />
                <span className="text-sm">
                  Jl. Gajah No.65 Juwana Pati, Jawa Tengah, Indonesia
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-[#8BCDF0] shrink-0" size={20} />
                <span className="text-sm">pintudigitalteknologi@gmail.com</span>
              </div>
            </div>

            {/* Input Newsletter Simpel */}
            <div className="relative mt-4">
              <input
                type="email"
                placeholder="Email anda..."
                aria-label="Email Address"
                className="w-full bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#8BCDF0]/20"
              />
              <button
                className="absolute right-2 top-2 p-1.5 bg-[#8BCDF0] text-[#072331] rounded-lg hover:bg-white transition-colors"
                aria-label="Subscribe to newsletter"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500 uppercase tracking-widest">
          <p>© {currentYear} Pintu Digital Teknologi ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
