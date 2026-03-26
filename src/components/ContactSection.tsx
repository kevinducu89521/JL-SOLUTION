/*
 * Contact Section — JL Solution
 * Design: Navy background with contact form and map
 * Layout: Two-column — left info/form, right map
 */

import { useState } from "react";
import { Phone, MapPin, Clock, Mail, Send, CheckCircle2 } from "lucide-react";
import { MapView } from "./Map";

const contactInfo = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "40-12 National St, Corona, New York 11368",
    href: "https://maps.google.com/?q=40-12+National+St+Corona+New+York+11368",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "(928) 240-3566",
    href: "tel:+19292403566",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@jlsolutionny.com",
    href: "mailto:info@jlsolutionny.com",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lunes – Sábado: 9:00am – 7:00pm",
    href: null,
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
  };

  return (
    <section
      id="contacto"
      className="py-24"
      style={{ background: "oklch(0.22 0.07 245)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="text-[oklch(0.72_0.19_42)] text-sm font-bold tracking-widest uppercase mb-3"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Estamos Aquí Para Ayudarte
          </div>
          <h2
            className="text-4xl md:text-5xl font-black text-white"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Contáctanos
          </h2>
          <div
            className="w-16 h-1 mx-auto mt-4 rounded-full"
            style={{ background: "oklch(0.62 0.19 42)" }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Contact info + Form */}
          <div>
            {/* Contact info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div
                    key={item.label}
                    className="rounded-xl p-4 flex items-start gap-3 transition-all duration-300 hover:bg-[oklch(0.32_0.07_245)]"
                    style={{
                      background: "oklch(0.28 0.07 245)",
                      border: "1px solid oklch(1 0 0 / 0.08)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "oklch(0.62 0.19 42 / 0.2)" }}
                    >
                      <Icon size={18} style={{ color: "oklch(0.72 0.19 42)" }} />
                    </div>
                    <div>
                      <div
                        className="text-white/60 text-xs font-semibold uppercase tracking-wide mb-0.5"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {item.label}
                      </div>
                      <div className="text-white text-sm font-medium">
                        {item.value}
                      </div>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            {/* Contact Form */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "oklch(0.28 0.07 245)",
                border: "1px solid oklch(1 0 0 / 0.08)",
              }}
            >
              <h3
                className="text-white font-bold text-xl mb-5"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Envíanos un Mensaje
              </h3>

              {submitted ? (
                <div
                  className="rounded-xl p-6 text-center"
                  style={{ background: "oklch(0.62 0.19 42 / 0.15)", border: "1px solid oklch(0.62 0.19 42 / 0.4)" }}
                >
                  <CheckCircle2 size={40} style={{ color: "oklch(0.72 0.19 42)" }} className="mx-auto mb-3" />
                  <p className="text-white font-bold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                    ¡Mensaje enviado con éxito!
                  </p>
                  <p className="text-white/70 text-sm mt-1">
                    Te contactaremos a la brevedad posible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/70 text-xs font-semibold uppercase tracking-wide block mb-1.5"
                        style={{ fontFamily: "Montserrat, sans-serif" }}>
                        Nombre *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Tu nombre completo"
                        className="w-full px-4 py-2.5 rounded-lg text-white placeholder-white/40 text-sm outline-none focus:ring-2 transition-all"
                        style={{
                          background: "oklch(0.22 0.07 245)",
                          border: "1px solid oklch(1 0 0 / 0.15)",
                        }}
                      />
                    </div>
                    <div>
                      <label className="text-white/70 text-xs font-semibold uppercase tracking-wide block mb-1.5"
                        style={{ fontFamily: "Montserrat, sans-serif" }}>
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(718) 000-0000"
                        className="w-full px-4 py-2.5 rounded-lg text-white placeholder-white/40 text-sm outline-none focus:ring-2 transition-all"
                        style={{
                          background: "oklch(0.22 0.07 245)",
                          border: "1px solid oklch(1 0 0 / 0.15)",
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-white/70 text-xs font-semibold uppercase tracking-wide block mb-1.5"
                      style={{ fontFamily: "Montserrat, sans-serif" }}>
                      Servicio de Interés
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg text-white text-sm outline-none focus:ring-2 transition-all"
                      style={{
                        background: "oklch(0.22 0.07 245)",
                        border: "1px solid oklch(1 0 0 / 0.15)",
                        color: formData.service ? "white" : "oklch(1 0 0 / 0.4)",
                      }}
                    >
                      <option value="" style={{ background: "oklch(0.22 0.07 245)" }}>Selecciona un servicio</option>
                      <option value="placas" style={{ background: "oklch(0.22 0.07 245)" }}>Placas el Mismo Día</option>
                      <option value="registro" style={{ background: "oklch(0.22 0.07 245)" }}>Registro & Transferencias</option>
                      <option value="duplicados" style={{ background: "oklch(0.22 0.07 245)" }}>Duplicados</option>
                      <option value="seguro-auto" style={{ background: "oklch(0.22 0.07 245)" }}>Seguro de Auto</option>
                      <option value="seguro-hogar" style={{ background: "oklch(0.22 0.07 245)" }}>Seguro del Hogar</option>
                      <option value="seguro-salud" style={{ background: "oklch(0.22 0.07 245)" }}>Seguro de Salud</option>
                      <option value="notario" style={{ background: "oklch(0.22 0.07 245)" }}>Notario Público</option>
                      <option value="subasta" style={{ background: "oklch(0.22 0.07 245)" }}>Subasta de Autos</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-white/70 text-xs font-semibold uppercase tracking-wide block mb-1.5"
                      style={{ fontFamily: "Montserrat, sans-serif" }}>
                      Mensaje
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="¿En qué podemos ayudarte?"
                      className="w-full px-4 py-2.5 rounded-lg text-white placeholder-white/40 text-sm outline-none focus:ring-2 transition-all resize-none"
                      style={{
                        background: "oklch(0.22 0.07 245)",
                        border: "1px solid oklch(1 0 0 / 0.15)",
                      }}
                    />
                  </div>

                  <button type="submit" className="jl-btn-primary justify-center">
                    <Send size={16} />
                    Enviar Mensaje
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right: Map */}
          <div className="flex flex-col gap-6">
            <div
              className="rounded-2xl overflow-hidden flex-1"
              style={{
                border: "2px solid oklch(0.62 0.19 42 / 0.4)",
                minHeight: "400px",
              }}
            >
              <MapView
                onMapReady={(map: google.maps.Map) => {
                  const location = { lat: 40.7484, lng: -73.8654 };
                  map.setCenter(location);
                  map.setZoom(16);
                  new google.maps.Marker({
                    position: location,
                    map,
                    title: "JL Solution - 40-12 National St, Corona NY",
                    animation: google.maps.Animation.DROP,
                  });
                }}
              />
            </div>

            {/* Quick action */}
            <a
              href="https://maps.google.com/?q=40-12+National+St+Corona+New+York+11368"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl p-4 flex items-center gap-4 transition-all hover:bg-[oklch(0.32_0.07_245)]"
              style={{
                background: "oklch(0.28 0.07 245)",
                border: "1px solid oklch(0.62 0.19 42 / 0.4)",
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "oklch(0.62 0.19 42)" }}
              >
                <MapPin size={22} className="text-white" />
              </div>
              <div>
                <div
                  className="text-white font-bold"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Cómo Llegar
                </div>
                <div className="text-white/70 text-sm">
                  40-12 National St, Corona, NY 11368
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
