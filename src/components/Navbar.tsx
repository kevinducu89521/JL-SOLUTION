/*
 * Navbar — JL Solution
 * Design: "Confianza Profesional" — Navy blue sticky navbar with orange accents
 * Behavior: Transparent on top, solid navy on scroll; mobile hamburger menu
 */

import { useState, useEffect } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  {
    label: "Servicios",
    href: "#servicios",
    children: [
      { label: "Placas el Mismo Día", href: "#placas" },
      { label: "Registro & Transferencias", href: "#registro" },
      { label: "Seguros de Auto", href: "#seguros-auto" },
      { label: "Seguros del Hogar", href: "#seguros-hogar" },
      { label: "Seguros de Salud", href: "#seguros-salud" },
      { label: "Notario Público", href: "#notario" },
    ],
  },
  { label: "Subastas", href: "#subastas" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setActiveDropdown(null);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.22_0.07_245)] shadow-2xl"
          : "bg-[oklch(0.22_0.07_245/0.95)]"
      }`}
    >
      {/* Top bar */}
      <div className="bg-[oklch(0.62_0.19_42)] py-1.5 px-4 text-white text-sm hidden md:block">
        <div className="container flex justify-between items-center">
          <span className="font-semibold tracking-wide">
            📍 40-12 National St, Corona, New York 11368
          </span>
          <a
            href="tel:+17185551234"
            className="flex items-center gap-1.5 font-bold hover:underline"
          >
            <Phone size={14} />
            Llámanos Ahora
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); handleNavClick("#inicio"); }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-[oklch(0.62_0.19_42)] rounded-lg flex items-center justify-center font-black text-white text-lg"
              style={{ fontFamily: 'Montserrat, sans-serif' }}>
              JL
            </div>
            <div>
              <div className="text-white font-black text-xl leading-none"
                style={{ fontFamily: 'Montserrat, sans-serif' }}>
                JL SOLUTION
              </div>
              <div className="text-[oklch(0.62_0.19_42)] text-xs font-semibold tracking-widest uppercase">
                Corona, New York
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {link.children ? (
                  <>
                    <button
                      className="flex items-center gap-1 text-white/90 hover:text-[oklch(0.72_0.19_42)] px-3 py-2 text-sm font-semibold transition-colors"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                      onMouseEnter={() => setActiveDropdown(link.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {link.label}
                      <ChevronDown size={14} />
                    </button>
                    <div
                      className={`absolute top-full left-0 bg-white rounded-lg shadow-2xl py-2 min-w-[220px] transition-all duration-200 ${
                        activeDropdown === link.label
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                      onMouseEnter={() => setActiveDropdown(link.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={(e) => { e.preventDefault(); handleNavClick(child.href); }}
                          className="block px-4 py-2.5 text-sm text-[oklch(0.22_0.07_245)] hover:bg-[oklch(0.97_0.01_80)] hover:text-[oklch(0.62_0.19_42)] font-semibold transition-colors border-l-2 border-transparent hover:border-[oklch(0.62_0.19_42)] ml-2"
                          style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-white/90 hover:text-[oklch(0.72_0.19_42)] px-3 py-2 text-sm font-semibold transition-colors"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+17185551234"
              className="jl-btn-primary text-xs py-2.5 px-5 pulse-cta"
            >
              <Phone size={14} />
              Llamar Ahora
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[oklch(0.18_0.07_245)] border-t border-white/10">
          <div className="container py-4 flex flex-col gap-1">
            <div className="text-[oklch(0.62_0.19_42)] text-xs font-bold tracking-widest uppercase px-3 py-2">
              📍 40-12 National St, Corona, NY
            </div>
            {navLinks.map((link) => (
              <div key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="block text-white font-semibold px-3 py-2.5 rounded-lg hover:bg-white/10 transition-colors"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {link.label}
                </a>
                {link.children && (
                  <div className="pl-4 border-l-2 border-[oklch(0.62_0.19_42)] ml-3 mt-1 mb-2">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={(e) => { e.preventDefault(); handleNavClick(child.href); }}
                        className="block text-white/70 text-sm font-medium px-3 py-2 hover:text-[oklch(0.72_0.19_42)] transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="tel:+17185551234"
              className="jl-btn-primary mt-3 justify-center"
            >
              <Phone size={16} />
              Llamar Ahora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
