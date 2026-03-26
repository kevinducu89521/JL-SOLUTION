/*
 * Floating CTA — JL Solution
 * Design: Floating phone button + WhatsApp button
 * Behavior: Always visible
 */

import { Phone, MessageCircle } from "lucide-react";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/+19292403566?text=Hola%2C%20me%20interesa%20información%20sobre%20sus%20servicios"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110"
        style={{ background: "#25D366" }}
        title="Contactar por WhatsApp"
      >
        <MessageCircle size={26} className="text-white" />
      </a>

      {/* Phone */}
      <a
        href="tel:+17185551234"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 pulse-cta"
        style={{ background: "oklch(0.62 0.19 42)" }}
        title="Llamar a JL Solution"
      >
        <Phone size={24} className="text-white" />
      </a>
    </div>
  );
}
