"use client";

import React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to a backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", company: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Mari Bangun Sesuatu yang Menakjubkan
              </h2>
              <p className="text-lg text-foreground/70">
                Siap untuk mentransformasi kehadiran digital Anda? Hubungi tim kami hari ini. Kami akan merespons dalam waktu 24 jam.              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Email</h3>
                  <a
                    href="mailto:pintudigitalteknologi@gmail.com"
                    className="text-foreground/70 hover:text-accent transition-colors"
                  >
                    pintudigitalteknologi@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Phone</h3>
                  <a
                    href="tel:+1234567890"
                    className="text-foreground/70 hover:text-accent transition-colors"
                  >
                    +62 (82) 332-619-095
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">Location</h3>
                  <p className="text-foreground/70">
                    Pati, Jawa Tengah
                    <br />
                    Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-foreground/60 mb-4">
                Follow us on social media
              </p>
              <div className="flex gap-4">
                {["Twitter", "LinkedIn", "GitHub"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-secondary hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center text-sm font-medium"
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
              onSubmit={handleSubmit}
              className="space-y-6 p-8 bg-gradient-to-br from-secondary/50 to-secondary/20 rounded-2xl border border-border"
            >
              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Full Name
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nama Lengkap"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="user@example.com"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Company
                </label>
                <Input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nama Perusahaan Anda"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:border-accent focus:outline-none transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-white py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitted ? (
                  <>
                    <span>Message Sent! ✓</span>
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </Button>

              {isSubmitted && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                  Thank you! We'll get back to you as soon as possible.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl -z-10" />
    </section>
  );
}
