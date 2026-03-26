/*
 * Services Section — JL Solution
 * Design: "Confianza Profesional" — Grid of service cards with orange left border
 * Layout: 3-column grid on desktop, with featured "Placas el Mismo Día" card
 * Images: Generated images for key services
 */

import { useState, useEffect, useRef } from "react";
import {
  Car,
  FileText,
  Copy,
  Shield,
  Home,
  Heart,
  Stamp,
  Gavel,
  ArrowRight,
  Clock,
  Star,
} from "lucide-react";

const services = [
  {
    id: "placas",
    icon: Car,
    title: "Placas el Mismo Día",
    description:
      "Obtén tus placas de New York el mismo día de tu visita. Proceso rápido, sin citas largas ni filas interminables. Traemos la solución a tus manos.",
    badge: "Más Popular",
    badgeColor: "oklch(0.62 0.19 42)",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663469115047/VsguVjSguDvHcp4aMTBWqT/jl-plates-service-3wBLWiMo7Fex68BaiDCqEH.webp",
    featured: true,
  },
  {
    id: "registro",
    icon: FileText,
    title: "Registro & Transferencias",
    description:
      "Registra tu vehículo o transfiere la titularidad de forma rápida y sin complicaciones. Manejamos todos los trámites del DMV de New York.",
    badge: null,
    image: null,
  },
  {
    id: "duplicados",
    icon: Copy,
    title: "Duplicados",
    description:
      "¿Perdiste tu licencia, título o registro? Tramitamos duplicados de documentos vehiculares de manera eficiente y segura.",
    badge: null,
    image: null,
  },
  {
    id: "seguros-auto",
    icon: Shield,
    title: "Seguros de Auto",
    description:
      "Cotizaciones competitivas de seguros de auto en New York. Trabajamos con las mejores aseguradoras para darte la mejor cobertura al mejor precio.",
    badge: "Desde $35/mes",
    badgeColor: "oklch(0.22 0.07 245)",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663469115047/VsguVjSguDvHcp4aMTBWqT/jl-insurance-service-Q4PAypgtb2jNZmTmfDDcqB.webp",
    featured: true,
  },
  {
    id: "seguros-hogar",
    icon: Home,
    title: "Seguros del Hogar",
    description:
      "Protege tu hogar y todo lo que más quieres. Ofrecemos pólizas de seguro para propietarios e inquilinos en toda el área de New York.",
    badge: null,
    image: null,
  },
  {
    id: "seguros-salud",
    icon: Heart,
    title: "Seguros de Salud",
    description:
      "Planes de salud para individuos y familias. Te ayudamos a encontrar la cobertura médica que se adapta a tus necesidades y presupuesto.",
    badge: null,
    image: null,
  },
  {
    id: "notario",
    icon: Stamp,
    title: "Notario Público",
    description:
      "Servicios de notaría pública para documentos legales, contratos, poderes notariales y más. Certificación oficial y confiable.",
    badge: null,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663469115047/VsguVjSguDvHcp4aMTBWqT/jl-notary-service-Ga9hVa44ihqDjQS5JR76nk.webp",
    featured: true,
  },
  {
    id: "subastas",
    icon: Gavel,
    title: "Subasta de Autos Usados",
    description:
      "Participa en nuestras subastas de autos usados en New York. Encuentra el vehículo que necesitas a precios increíbles con total transparencia.",
    badge: "Próxima Subasta",
    badgeColor: "oklch(0.52 0.07 245)",
    image: null,
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
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

  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className="jl-service-card group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.5s ease ${index * 0.08}s`,
      }}
    >
      {service.image && (
        <div className="relative h-44 -mx-8 -mt-8 mb-6 overflow-hidden rounded-t-xl">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 40%, oklch(0.22 0.07 245 / 0.5) 100%)",
            }}
          />
        </div>
      )}

      <div className="flex items-start gap-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-[oklch(0.22_0.07_245)]"
          style={{ background: "oklch(0.97 0.01 80)" }}
        >
          <Icon
            size={22}
            style={{ color: "oklch(0.62 0.19 42)" }}
            className="group-hover:text-white transition-colors duration-300"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <h3
              className="font-bold text-lg text-[oklch(0.22_0.07_245)]"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {service.title}
            </h3>
            {service.badge && (
              <span
                className="text-white text-xs font-bold px-2.5 py-1 rounded-full"
                style={{
                  background: service.badgeColor || "oklch(0.62 0.19 42)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                {service.badge}
              </span>
            )}
          </div>
          <p className="text-[oklch(0.45_0.04_245)] text-sm leading-relaxed">
            {service.description}
          </p>
          <button
            className="mt-4 flex items-center gap-1.5 text-sm font-bold transition-colors"
            style={{
              color: "oklch(0.62 0.19 42)",
              fontFamily: "Montserrat, sans-serif",
            }}
            onClick={() => {
              const el = document.querySelector("#contacto");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Solicitar Información
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-[oklch(0.97_0.01_80)]">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div
              className="text-[oklch(0.62_0.19_42)] text-sm font-bold tracking-widest uppercase mb-3"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Lo Que Ofrecemos
            </div>
            <h2
              className="jl-section-title text-4xl md:text-5xl"
            >
              Nuestros
              <br />
              Servicios
            </h2>
          </div>
          <div className="flex items-center gap-3 text-sm text-[oklch(0.45_0.04_245)]">
            <Clock size={16} style={{ color: "oklch(0.62 0.19 42)" }} />
            <span>Lunes – Sábado: 9am – 7pm</span>
            <span className="text-[oklch(0.62_0.19_42)] font-bold">|</span>
            <Star size={16} style={{ color: "oklch(0.62 0.19 42)" }} />
            <span>Servicio en Español & English</span>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-16 rounded-2xl p-8 md:p-12 text-center"
          style={{
            background: "linear-gradient(135deg, oklch(0.22 0.07 245) 0%, oklch(0.32 0.07 245) 100%)",
          }}
        >
          <h3
            className="text-2xl md:text-3xl font-black text-white mb-3"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            ¿No encuentras lo que buscas?
          </h3>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Contáctanos directamente y te ayudamos a resolver cualquier trámite
            relacionado con tu vehículo o seguros en New York.
          </p>
          <a href="tel:+17185551234" className="jl-btn-primary inline-flex">
            Hablar con un Asesor
          </a>
        </div>
      </div>
    </section>
  );
}
