"use client";

import { CheckCircle2, ArrowRight, Calendar, Target } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const processSteps = [
  {
    number: "01",
    title: "Discovery & Strategi",
    description:
      "Kami mendalami tujuan bisnis, target audience, dan landscape pasar Anda untuk membangun fondasi yang kuat.",
    duration: "Minggu 1",
    details: [
      "Analisis pasar & kompetitor",
      "User research & interviews",
      "Goal setting & KPI definition",
      "Technical requirements gathering",
    ],
  },
  {
    number: "02",
    title: "Arsitektur & Perencanaan",
    description:
      "Membuat roadmap komprehensif yang selaras dengan tujuan bisnis dan kebutuhan user.",
    duration: "Minggu 1-2",
    details: [
      "Information architecture design",
      "User flow & journey mapping",
      "Technical stack selection",
      "Project timeline & milestones",
    ],
  },
  {
    number: "03",
    title: "Design & Prototyping",
    description:
      "Menciptakan interface yang indah dan intuitif dengan fokus pada user experience dan conversion.",
    duration: "Minggu 2-3",
    details: [
      "Low-fidelity wireframes",
      "High-fidelity UI mockups",
      "Interactive prototype",
      "Design system & component library",
    ],
  },
  {
    number: "04",
    title: "Development & Testing",
    description:
      "Membangun solusi yang robust dan scalable dengan quality assurance yang ketat.",
    duration: "Minggu 3-5",
    details: [
      "Clean code architecture",
      "Automated unit testing",
      "Performance optimization",
      "Cross-browser compatibility",
    ],
  },
  {
    number: "05",
    title: "Launch & Deployment",
    description:
      "Mendeploy website ke production dengan monitoring real-time dan optimasi SEO.",
    duration: "Minggu 5",
    details: [
      "Production deployment",
      "SEO technical implementation",
      "Analytics & tracking setup",
      "Load testing & security audit",
    ],
  },
  {
    number: "06",
    title: "Growth & Support",
    description:
      "Memberikan maintenance berkelanjutan dan improvement strategis untuk kesuksesan jangka panjang.",
    duration: "On-going",
    details: [
      "24/7 monitoring & support",
      "Monthly performance reports",
      "Feature updates & enhancement",
      "Dedicated account manager",
    ],
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative py-24 md:py-36 bg-gradient-to-b from-background via-secondary/5 to-background overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[radial-gradient(circle,_rgba(99,102,241,0.08)_0%,_transparent_60%)]" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[radial-gradient(circle,_rgba(59,130,246,0.08)_0%,_transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-24"
        >
          <div className="inline-block">
            <div className="px-6 py-2 bg-accent/10 rounded-full border border-accent/20">
              <span className="text-sm font-semibold text-accent tracking-wider">
                WORKFLOW KAMI
              </span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent animate-gradient-shift">
              Proses Teruji
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-light">
            Metodologi yang terbukti memberikan{" "}
            <span className="text-accent font-medium">eksellensi</span> di
            setiap tahap project Anda
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="relative"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary text-white flex items-center justify-center font-bold text-xl shadow-lg z-10">
                {step.number}
              </div>

              {/* Main Content */}
              <div className="relative bg-background rounded-3xl border border-border/50 hover:border-accent/40 transition-all duration-500 hover:shadow-xl ml-8">
                <div className="grid lg:grid-cols-3 gap-8 p-8 lg:p-12">
                  {/* Header */}
                  <div className="lg:col-span-1 space-y-4">
                    <div className="flex items-center gap-3 text-accent font-semibold">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{step.duration}</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-foreground/80 font-light">
                      {step.description}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-2">
                    <div className="grid md:grid-cols-2 gap-4">
                      {step.details.map((detail) => (
                        <motion.div
                          key={detail}
                          whileHover={{ scale: 1.02, x: 5 }}
                          className="p-5 rounded-xl bg-gradient-to-r from-secondary/30 to-transparent border-l-4 border-accent hover:border-primary transition-all duration-300 group/detail"
                        >
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 group-hover/detail:text-primary transition-colors" />
                            <span className="text-sm font-medium text-foreground/80 group-hover/detail:text-foreground">
                              {detail}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute -bottom-8 left-32 right-32 h-px bg-gradient-to-r from-accent/30 via-accent to-accent/30" />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-12 bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10 rounded-3xl border border-accent/20 text-center backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/20 to-transparent blur-3xl" />

          <div className="relative space-y-6">
            <div className="flex justify-center">
              <Target className="w-16 h-16 text-accent" />
            </div>
            <h3 className="text-4xl font-bold text-foreground">
              Siap Memulai Transformasi Digital?
            </h3>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-light">
              Mari diskusikan bagaimana proses teruji kami dapat mengubah visi
              Anda menjadi kenyataan
            </p>
            <Button
              size="lg"
              className="relative group bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 text-white px-12 py-7 text-xl rounded-xl shadow-2xl hover:shadow-[0_20px_60px_rgba(99,102,241,0.4)] transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="#contact" className="flex items-center gap-3">
                <span>Mulai Konsultasi Gratis</span>
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
