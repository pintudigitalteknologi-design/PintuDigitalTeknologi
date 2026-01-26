import {
  Users,
  DollarSign,
  Clock,
  ShieldCheck,
  Zap,
  Layers,
} from "lucide-react";

export default function WhyUsSection() {
  const whyUsFeatures = [
    {
      title: "Biaya Transparan",
      description:
        "Website berkualitas tinggi dengan investasi yang masuk akal. Tanpa biaya tersembunyi di akhir proyek.",
      icon: DollarSign,
    },
    {
      title: "Dukungan Prioritas",
      description:
        "Tim teknis kami siap membantu Anda kapan saja. Respons cepat untuk menjaga bisnis Anda tetap berjalan.",
      icon: Clock,
    },
    {
      title: "Jaminan Kualitas",
      description:
        "Kami menjamin performa dan keamanan. Jika hasil tidak sesuai kesepakatan, kami akan perbaiki.",
      icon: ShieldCheck,
    },
    {
      title: "Eksekusi Cepat",
      description:
        "Metodologi pengembangan yang efisien memastikan website Anda online sesuai jadwal tanpa mengorbankan kualitas.",
      icon: Zap,
    },
    {
      title: "Solusi Terukur",
      description:
        "Arsitektur website yang dirancang khusus untuk kebutuhan spesifik dan skalabilitas bisnis Anda.",
      icon: Layers,
    },
    {
      title: "Tim Ahli",
      description:
        "Dikerjakan oleh developer senior yang berdedikasi tinggi pada standar kode industri terkini.",
      icon: Users,
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Mengapa Memilih Pintu Digital Teknologi?
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Kami tidak sekadar membuat website. Kami membangun aset digital
              yang dirancang untuk pertumbuhan bisnis Anda melalui keahlian
              teknis dan strategi yang matang.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="h-1 w-24 bg-primary"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUsFeatures.map((feature, idx) => (
            <div
              key={feature.title}
              className="group bg-white border border-slate-200 p-8 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 rounded-lg"
            >
              <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-slate-700 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
