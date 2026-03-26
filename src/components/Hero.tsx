/*
 * Hero Section — JL Solution
 * Design: Full-screen hero with overlay, asymmetric text layout
 * Background: Generated image of auto registration office in NY
 * Colors: Dark overlay with white text, orange CTAs
 */

import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "Placas el Mismo Día",
  "Seguros desde $35/mes",
  "Notario Público",
  "Subastas de Autos",
];

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(https://d2xsxph8kpxj0f.cloudfront.net/310519663469115047/VsguVjSguDvHcp4aMTBWqT/jl-hero-bg-QypYjnY5jWvQX2JK39tgfN.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay with gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, oklch(0.15 0.06 245 / 0.92) 0%, oklch(0.15 0.06 245 / 0.75) 50%, oklch(0.15 0.06 245 / 0.4) 100%)",
        }}
      />

      {/* Orange accent bar on left */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1.5"
        style={{ background: "oklch(0.62 0.19 42)" }}
      />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6"
            style={{
              background: "oklch(0.62 0.19 42 / 0.2)",
              border: "1px solid oklch(0.62 0.19 42 / 0.6)",
              color: "oklch(0.85 0.12 42)",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[oklch(0.72_0.19_42)] animate-pulse" />
            Corona, New York 11368 · Abierto Hoy
          </div>

          {/* Main heading */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Tu Solución
            <br />
            <span style={{ color: "oklch(0.72 0.19 42)" }}>Completa</span>
            <br />
            en New York
          </h1>

          <p
            className="text-lg md:text-xl text-white/85 mb-8 max-w-xl leading-relaxed"
            style={{ fontFamily: "Source Sans 3, sans-serif" }}
          >
            Placas el mismo día, registros, seguros de auto, hogar y salud,
            notario público y subastas de autos usados. Todo en un solo lugar
            para toda el área de New York.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-2 mb-10 max-w-lg">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2
                  size={18}
                  style={{ color: "oklch(0.72 0.19 42)", flexShrink: 0 }}
                />
                <span
                  className="text-white/90 text-sm font-semibold"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:+17185551234"
              className="jl-btn-primary pulse-cta"
            >
              <Phone size={18} />
              Llamar Ahora
            </a>
            <button
              onClick={() => handleScroll("#servicios")}
              className="jl-btn-outline"
            >
              Ver Servicios
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div
        className="absolute bottom-0 left-0 right-0 py-5"
        style={{
          background: "oklch(0.22 0.07 245 / 0.95)",
          borderTop: "2px solid oklch(0.62 0.19 42)",
        }}
      >
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { value: "10+", label: "Años de Experiencia" },
              { value: "5,000+", label: "Clientes Atendidos" },
              { value: "Mismo Día", label: "Entrega de Placas" },
              { value: "5 Estrellas", label: "Calificación" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-2xl md:text-3xl font-black"
                  style={{
                    color: "oklch(0.72 0.19 42)",
                    fontFamily: "Montserrat, sans-serif",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-white/70 text-xs font-semibold tracking-wide uppercase mt-0.5"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
