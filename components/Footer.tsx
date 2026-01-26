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
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10 text-slate-600">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Info Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex flex-col group">
              <div className="flex items-center gap-1">
                <span
                  className={`text-xl md:text-2xl font-black tracking-tighter transition-colors text-black`}
                >
                  PINTU<span className="text-[#0F3B52]"> DIGITAL</span>
                </span>
              </div>
              <span
                className={`text-[10px] font-bold uppercase tracking-[0.3em] -mt-1 transition-colors text-black`}
              >
                Teknologi
              </span>
            </Link>
            <p className="text-slate-500 leading-relaxed">
              Membangun masa depan digital melalui integrasi AI dan kreativitas
              tanpa batas. Solusi cerdas untuk bisnis modern.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Layanan Utama */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">
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
                    className="hover:text-blue-600 hover:translate-x-1 transition-all flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 bg-slate-300 rounded-full group-hover:bg-blue-600 transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bantuan & Support */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">
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
                  <a href="#" className="hover:text-blue-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div className="space-y-6">
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">
              Kontak Kami
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-600 shrink-0" size={20} />
                <span className="text-sm">
                  Jl. Gajah No.65 Juwana Pati, Jawa Tengah, Indonesia
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-blue-600 shrink-0" size={20} />
                <span className="text-sm">pintudigitalteknologi@gmail.com</span>
              </div>
            </div>

            {/* Input Newsletter Simpel */}
            <div className="relative mt-4">
              <input
                type="text"
                placeholder="Email anda..."
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20"
              />
              <button className="absolute right-2 top-2 p-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-400 uppercase tracking-widest">
          <p>© {currentYear} Pintu Digital Teknologi ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-900">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-900">
              Terms
            </a>
            <a href="#" className="hover:text-slate-900">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
