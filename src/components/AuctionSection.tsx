/*
 * Auction Section — JL Solution
 * Design: Dark navy background with orange accents, full-width image
 * Layout: Diagonal section cut, two-column with image and info
 */

import { useEffect, useRef, useState } from "react";
import { Gavel, CheckCircle2, ArrowRight, Calendar } from "lucide-react";

const auctionFeatures = [
  "Autos verificados y con historial limpio",
  "Precios por debajo del mercado",
  "Proceso transparente y seguro",
  "Financiamiento disponible",
  "Inspección previa permitida",
  "Documentación completa incluida",
];

const auctionCars = [
  { make: "Toyota", model: "Camry", year: 2019, price: "$8,500", img: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&q=80" },
  { make: "Honda", model: "Accord", year: 2018, price: "$7,200", img: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&q=80" },
  { make: "Ford", model: "F-150", year: 2020, price: "$15,900", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  { make: "Nissan", model: "Altima", year: 2019, price: "$6,800", img: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&q=80" },
];

export default function AuctionSection() {
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
    <section
      id="subastas"
      className="relative py-0 overflow-hidden"
      style={{ background: "oklch(0.22 0.07 245)" }}
    >
      {/* Hero image with overlay */}
      <div className="relative h-80 md:h-96 overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663469115047/VsguVjSguDvHcp4aMTBWqT/jl-car-auction-6tweBhQXg3biJR4DYWxrQT.webp"
          alt="Subasta de autos usados en New York"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.22 0.07 245 / 0.5) 0%, oklch(0.22 0.07 245 / 0.85) 100%)",
          }}
        >
          <div className="text-center px-4">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-4"
              style={{
                background: "oklch(0.62 0.19 42 / 0.25)",
                border: "1px solid oklch(0.62 0.19 42 / 0.6)",
                color: "oklch(0.85 0.12 42)",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              <Gavel size={14} />
              Subastas de Autos Usados — New York
            </div>
            <h2
              className="text-4xl md:text-6xl font-black text-white"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Encuentra Tu
              <br />
              <span style={{ color: "oklch(0.72 0.19 42)" }}>Próximo Auto</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Content */}
      <div ref={ref} className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: "all 0.6s ease",
            }}
          >
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              En JL Solution subastamos autos usados en New York con total
              transparencia. Todos nuestros vehículos pasan por un proceso de
              verificación riguroso para garantizar tu tranquilidad.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {auctionFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-2.5">
                  <CheckCircle2
                    size={18}
                    style={{ color: "oklch(0.72 0.19 42)", flexShrink: 0 }}
                  />
                  <span className="text-white/85 text-sm font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="rounded-xl p-5 mb-8"
              style={{
                background: "oklch(0.62 0.19 42 / 0.15)",
                border: "1px solid oklch(0.62 0.19 42 / 0.4)",
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <Calendar size={20} style={{ color: "oklch(0.72 0.19 42)" }} />
                <span
                  className="text-white font-bold text-lg"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Próxima Subasta
                </span>
              </div>
              <p className="text-white/80 text-sm">
                Contáctanos para conocer las fechas de nuestras próximas
                subastas y registrarte como participante.
              </p>
            </div>

            <a href="tel:+17185551234" className="jl-btn-primary">
              <Gavel size={18} />
              Participar en Subasta
            </a>
          </div>

          {/* Right: Car grid */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(30px)",
              transition: "all 0.6s ease 0.2s",
            }}
          >
            <h3
              className="text-white font-bold text-xl mb-5"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Vehículos Disponibles
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {auctionCars.map((car, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden group cursor-pointer"
                  style={{
                    background: "oklch(0.32 0.07 245)",
                    border: "1px solid oklch(1 0 0 / 0.1)",
                  }}
                  onClick={() => {
                    const el = document.querySelector("#contacto");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={car.img}
                      alt={`${car.year} ${car.make} ${car.model}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div
                      className="absolute top-2 right-2 text-white text-xs font-black px-2 py-1 rounded"
                      style={{
                        background: "oklch(0.62 0.19 42)",
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      {car.price}
                    </div>
                  </div>
                  <div className="p-3">
                    <div
                      className="text-white font-bold text-sm"
                      style={{ fontFamily: "Montserrat, sans-serif" }}
                    >
                      {car.year} {car.make}
                    </div>
                    <div className="text-white/60 text-xs">{car.model}</div>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="mt-4 flex items-center gap-2 text-sm font-bold w-full justify-center py-3 rounded-xl transition-colors"
              style={{
                color: "oklch(0.72 0.19 42)",
                border: "1px solid oklch(0.62 0.19 42 / 0.4)",
                fontFamily: "Montserrat, sans-serif",
              }}
              onClick={() => {
                const el = document.querySelector("#contacto");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Ver Todos los Vehículos
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
