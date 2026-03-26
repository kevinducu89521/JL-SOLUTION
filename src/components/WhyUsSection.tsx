/*
 * Why Us Section — JL Solution
 * Design: Cream background with navy cards, orange accents
 * Layout: Asymmetric with large image on one side
 */

import { useEffect, useRef, useState } from "react";
import { Zap, Users, Award, HeadphonesIcon, Star } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Rapidez Garantizada",
    description:
      "Placas el mismo día, sin esperas innecesarias. Tu tiempo es valioso y lo respetamos.",
  },
  {
    icon: Users,
    title: "Atención Bilingüe",
    description:
      "Servicio completo en Español e Inglés. Nuestro equipo entiende tus necesidades.",
  },
  {
    icon: Award,
    title: "10+ Años de Experiencia",
    description:
      "Más de una década sirviendo a la comunidad de Corona y toda el área de New York.",
  },
  {
    icon: HeadphonesIcon,
    title: "Asesoría Personalizada",
    description:
      "Te guiamos en cada paso del proceso, desde el trámite hasta la entrega final.",
  },
];

const testimonials = [
  {
    name: "María González",
    location: "Corona, Queens",
    text: "Excelente servicio. Llegué a las 10am y a las 11am ya tenía mis placas. Muy recomendado para toda la comunidad latina.",
    stars: 5,
  },
  {
    name: "Carlos Ramírez",
    location: "Jackson Heights, NY",
    text: "Me ayudaron con el seguro de mi auto y del hogar. Precios muy competitivos y el trato fue muy profesional.",
    stars: 5,
  },
  {
    name: "Ana Martínez",
    location: "Flushing, Queens",
    text: "El notario fue muy eficiente y rápido. Todos los documentos quedaron perfectos. Definitivamente volveré.",
    stars: 5,
  },
];

export default function WhyUsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Why Us */}
      <section
        id="nosotros"
        className="py-24"
        style={{ background: "oklch(0.93 0.015 80)" }}
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image */}
            <div
              ref={ref}
              className="relative"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-40px)",
                transition: "all 0.7s ease",
              }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663469115047/VsguVjSguDvHcp4aMTBWqT/jl-insurance-service-Q4PAypgtb2jNZmTmfDDcqB.webp"
                  alt="Equipo de JL Solution atendiendo clientes"
                  className="w-full h-96 object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, oklch(0.22 0.07 245 / 0.6) 0%, transparent 60%)",
                  }}
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <div
                    className="text-white font-black text-2xl"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Tu Confianza, Nuestra Prioridad
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -top-5 -right-5 w-28 h-28 rounded-full flex flex-col items-center justify-center shadow-xl"
                style={{
                  background: "oklch(0.62 0.19 42)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                <div className="text-white font-black text-3xl leading-none">
                  10+
                </div>
                <div className="text-white/90 text-xs font-bold text-center leading-tight">
                  Años
                  <br />
                  Sirviendo
                </div>
              </div>
            </div>

            {/* Right: Reasons */}
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(40px)",
                transition: "all 0.7s ease 0.2s",
              }}
            >
              <div
                className="text-[oklch(0.62_0.19_42)] text-sm font-bold tracking-widest uppercase mb-3"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                ¿Por Qué Elegirnos?
              </div>
              <h2 className="jl-section-title text-4xl md:text-5xl mb-8">
                La Diferencia
                <br />
                JL Solution
              </h2>

              <div className="flex flex-col gap-6">
                {reasons.map((reason, i) => {
                  const Icon = reason.icon;
                  return (
                    <div
                      key={i}
                      className="flex gap-4 items-start"
                      style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(20px)",
                        transition: `all 0.5s ease ${0.3 + i * 0.1}s`,
                      }}
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "oklch(0.62 0.19 42 / 0.12)" }}
                      >
                        <Icon
                          size={22}
                          style={{ color: "oklch(0.62 0.19 42)" }}
                        />
                      </div>
                      <div>
                        <h3
                          className="font-bold text-[oklch(0.22_0.07_245)] mb-1"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                          {reason.title}
                        </h3>
                        <p className="text-[oklch(0.45_0.04_245)] text-sm leading-relaxed">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="py-20"
        style={{ background: "oklch(0.97 0.01 80)" }}
      >
        <div className="container">
          <div className="text-center mb-12">
            <div
              className="text-[oklch(0.62_0.19_42)] text-sm font-bold tracking-widest uppercase mb-3"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Lo Que Dicen Nuestros Clientes
            </div>
            <h2
              className="text-3xl md:text-4xl font-black text-[oklch(0.22_0.07_245)]"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Testimonios
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-md"
                style={{
                  borderTop: "3px solid oklch(0.62 0.19 42)",
                }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      fill="oklch(0.72 0.19 42)"
                      style={{ color: "oklch(0.72 0.19 42)" }}
                    />
                  ))}
                </div>
                <p className="text-[oklch(0.35_0.04_245)] text-sm leading-relaxed mb-5 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{
                      background: "oklch(0.22 0.07 245)",
                      fontFamily: "Montserrat, sans-serif",
                    }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div
                      className="font-bold text-sm text-[oklch(0.22_0.07_245)]"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {t.name}
                    </div>
                    <div className="text-xs text-[oklch(0.55_0.04_245)]">
                      {t.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
