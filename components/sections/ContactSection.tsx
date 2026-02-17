"use client";

import React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Send, ChevronDown } from "lucide-react";

const PROJECT_TYPES = [
  "Website",
  "Aplikasi Mobile",
  "AI / ML / Deep Learning",
  "UI UX & Desain",
  "Video Production",
  "Data Engineering",
] as const;

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = React.useRef<HTMLFormElement>(null);

  const scrollToForm = () => {
    if (formRef.current) {
      const yOffset = -100; // Offset for sticky header
      const element = formRef.current;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          _honeypot: honeypot,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || "Gagal mengirim pesan. Coba lagi.");
        setIsLoading(false);
        scrollToForm();
        return;
      }

      setIsSubmitted(true);
      scrollToForm();
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        message: "",
      });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch {
      setErrorMessage("Terjadi kesalahan jaringan. Silakan coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #0a3044, #0d3a54)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Sudah Mulai Yakin ?
              </h2>
              <p className="text-lg text-slate-400">
                Yuk buruan hubungi kami sekarang, kami bantu kekhawatiran anda.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-[#8BCDF0]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="w-6 h-6 text-[#8BCDF0]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <a
                    href="mailto:pintudigitalteknologi@gmail.com"
                    className="text-slate-400 hover:text-[#8BCDF0] transition-colors"
                  >
                    pintudigitalteknologi@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-[#8BCDF0]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-6 h-6 text-[#8BCDF0]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Phone</h3>
                  <a
                    href="tel:+6282332619095"
                    className="text-slate-400 hover:text-[#8BCDF0] transition-colors"
                  >
                    +62 (82) 332-619-095
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-[#8BCDF0]/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-6 h-6 text-[#8BCDF0]" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Lokasi</h3>
                  <p className="text-slate-400">
                    Jl. Gajah No 65 Pati, Jawa Tengah
                    <br />
                    Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-slate-500 mb-4">
                Follow us on social media
              </p>
              <div className="flex gap-4">
                {["Twitter", "LinkedIn", "GitHub"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    aria-label={social}
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/10 text-slate-300 hover:bg-[#8BCDF0] hover:text-[#072331] hover:border-[#8BCDF0] transition-all duration-300 flex items-center justify-center text-sm font-medium"
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="animate-slide-in-right">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6 p-8 bg-white/[0.04] backdrop-blur-sm rounded-2xl border border-white/[0.08]"
            >
              {/* Honeypot — hidden from real users, catches bots */}
              <div
                className="absolute opacity-0 pointer-events-none"
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="_honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Full Name
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nama Lengkap"
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/[0.06] text-white placeholder:text-slate-500 focus:border-[#8BCDF0]/50 focus:outline-none transition-colors disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="user@example.com"
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/[0.06] text-white placeholder:text-slate-500 focus:border-[#8BCDF0]/50 focus:outline-none transition-colors disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Company
                </label>
                <Input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nama Perusahaan Anda"
                  disabled={isLoading}
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/[0.06] text-white placeholder:text-slate-500 focus:border-[#8BCDF0]/50 focus:outline-none transition-colors disabled:opacity-50"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    No. HP / WhatsApp
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="08xx xxxx xxxx"
                    required
                    disabled={isLoading}
                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/[0.06] text-white placeholder:text-slate-500 focus:border-[#8BCDF0]/50 focus:outline-none transition-colors disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Jenis Project
                  </label>
                  <div className="relative">
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/[0.06] text-white focus:border-[#8BCDF0]/50 focus:outline-none transition-colors disabled:opacity-50 appearance-none cursor-pointer"
                    >
                      <option
                        value=""
                        disabled
                        className="bg-[#0a3044] text-slate-400"
                      >
                        Pilih jenis project
                      </option>
                      {PROJECT_TYPES.map((type) => (
                        <option
                          key={type}
                          value={type}
                          className="bg-[#0a3044] text-white"
                        >
                          {type}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Ceritakan tentang project Anda..."
                  rows={5}
                  required
                  disabled={isLoading}
                  minLength={10}
                  maxLength={2000}
                  className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/[0.06] text-white placeholder:text-slate-500 focus:border-[#8BCDF0]/50 focus:outline-none focus:ring-1 focus:ring-[#8BCDF0]/50 transition-all resize-none disabled:opacity-50"
                />
              </div>

              {/* Error message */}
              {errorMessage && (
                <div
                  className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm animate-pulse"
                  role="alert"
                >
                  ⚠️ {errorMessage}
                </div>
              )}

              <Button
                type="submit"
                disabled={isLoading || isSubmitted}
                className="w-full bg-[#8BCDF0] hover:bg-white text-[#072331] py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed transform active:scale-[0.98]"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Mengirim...</span>
                  </>
                ) : isSubmitted ? (
                  <>
                    <span>Pesan Terkirim! ✓</span>
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </Button>

              {isSubmitted && (
                <div
                  className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm text-center font-medium"
                  role="status"
                >
                  Terima kasih! Kami akan segera menghubungi Anda.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#8BCDF0]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8BCDF0]/3 rounded-full blur-3xl" />
        {/* Scattered dots */}
        <div className="absolute top-[12%] right-[15%] w-1 h-1 rounded-full bg-[#8BCDF0]/20" />
        <div className="absolute top-[30%] left-[8%] w-1.5 h-1.5 rounded-full bg-white/10" />
        <div className="absolute bottom-[20%] right-[25%] w-1 h-1 rounded-full bg-cyan-400/15" />
        <div className="absolute top-[55%] left-[20%] w-1 h-1 rounded-full bg-blue-300/15" />
        <div className="absolute bottom-[40%] left-[45%] w-1.5 h-1.5 rounded-full bg-[#8BCDF0]/15" />
        <div className="absolute top-[75%] right-[10%] w-1 h-1 rounded-full bg-white/8" />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(139,205,240,0.4) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>
    </section>
  );
}
