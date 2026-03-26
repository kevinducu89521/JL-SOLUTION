/*
 * Footer — JL Solution
 * Design: Dark navy with orange accents, organized columns
 * Content: Links, contact info, social media, legal
 */

import { Phone, MapPin, Mail, Clock, Facebook, Instagram } from "lucide-react";

const serviceLinks = [
  { label: "Placas el Mismo Día", href: "#placas" },
  { label: "Registro & Transferencias", href: "#registro" },
  { label: "Duplicados", href: "#duplicados" },
  { label: "Seguros de Auto", href: "#seguros-auto" },
  { label: "Seguros del Hogar", href: "#seguros-hogar" },
  { label: "Seguros de Salud", href: "#seguros-salud" },
  { label: "Notario Público", href: "#notario" },
  { label: "Subasta de Autos", href: "#subastas" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer style={{ background: "oklch(0.12 0.05 245)" }}>
      {/* Main footer content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-white text-xl"
                style={{
                  background: "oklch(0.62 0.19 42)",
                  fontFamily: "Montserrat, sans-serif",
                }}
              >
                JL
              </div>
              <div>
                <div
                  className="text-white font-black text-xl leading-none"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  JL SOLUTION
                </div>
                <div
                  className="text-[oklch(0.62_0.19_42)] text-xs font-semibold tracking-widest uppercase"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Corona, New York
                </div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Tu solución completa para trámites vehiculares, seguros y notaría
              en New York. Más de 10 años sirviendo a la comunidad con
              profesionalismo y confianza.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-[oklch(0.62_0.19_42)]"
                style={{ background: "oklch(0.22 0.07 245)" }}
              >
                <Facebook size={16} className="text-white" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors hover:bg-[oklch(0.62_0.19_42)]"
                style={{ background: "oklch(0.22 0.07 245)" }}
              >
                <Instagram size={16} className="text-white" />
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4
              className="text-white font-bold text-sm uppercase tracking-widest mb-5"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Servicios
            </h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-white/60 text-sm hover:text-[oklch(0.72_0.19_42)] transition-colors flex items-center gap-2"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "oklch(0.62 0.19 42)" }}
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4
              className="text-white font-bold text-sm uppercase tracking-widest mb-5"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Contacto
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="https://maps.google.com/?q=40-12+National+St+Corona+New+York+11368"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/60 hover:text-white/90 transition-colors"
              >
                <MapPin
                  size={16}
                  style={{ color: "oklch(0.62 0.19 42)", flexShrink: 0, marginTop: 2 }}
                />
                <span className="text-sm">
                  40-12 National St
                  <br />
                  Corona, New York 11368
                </span>
              </a>
              <a
                href="tel:+17185551234"
                className="flex items-center gap-3 text-white/60 hover:text-white/90 transition-colors"
              >
                <Phone size={16} style={{ color: "oklch(0.62 0.19 42)" }} />
                <span className="text-sm">(718) 555-1234</span>
              </a>
              <a
                href="mailto:info@jlsolutionny.com"
                className="flex items-center gap-3 text-white/60 hover:text-white/90 transition-colors"
              >
                <Mail size={16} style={{ color: "oklch(0.62 0.19 42)" }} />
                <span className="text-sm">info@jlsolutionny.com</span>
              </a>
            </div>
          </div>

          {/* Hours column */}
          <div>
            <h4
              className="text-white font-bold text-sm uppercase tracking-widest mb-5"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Horario de Atención
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <Clock
                  size={16}
                  style={{ color: "oklch(0.62 0.19 42)", flexShrink: 0, marginTop: 2 }}
                />
                <div>
                  {[
                    { day: "Lunes – Viernes", hours: "9:00am – 7:00pm" },
                    { day: "Sábado", hours: "9:00am – 5:00pm" },
                    { day: "Domingo", hours: "Cerrado" },
                  ].map((item) => (
                    <div key={item.day} className="flex justify-between gap-4 text-sm mb-1.5">
                      <span className="text-white/60">{item.day}</span>
                      <span
                        className={
                          item.hours === "Cerrado"
                            ? "text-red-400 font-semibold"
                            : "text-white font-semibold"
                        }
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="mt-2 rounded-lg p-3 text-center"
                style={{ background: "oklch(0.62 0.19 42 / 0.15)", border: "1px solid oklch(0.62 0.19 42 / 0.3)" }}
              >
                <div
                  className="text-[oklch(0.72_0.19_42)] font-bold text-sm"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  ¡Placas el Mismo Día!
                </div>
                <div className="text-white/60 text-xs mt-0.5">
                  Visítanos hoy sin cita previa
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t py-5"
        style={{ borderColor: "oklch(1 0 0 / 0.08)" }}
      >
        <div className="container flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} JL Solution. Todos los derechos reservados. Corona, New York 11368.
          </p>
          <p className="text-white/40 text-xs">
            Servicios disponibles para toda el área de New York y sus alrededores.
          </p>
        </div>
      </div>
    </footer>
  );
}
