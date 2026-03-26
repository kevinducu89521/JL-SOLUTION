/*
 * Urgency Banner — JL Solution
 * Design: Orange full-width banner with key selling points
 * Placement: Between Hero and Services
 */

import { Zap, Shield, Award } from "lucide-react";

const points = [
  { icon: Zap, text: "Placas el Mismo Día — Sin Cita" },
  { icon: Shield, text: "Seguros desde $35/mes" },
  { icon: Award, text: "10+ Años de Experiencia en NY" },
];

export default function UrgencyBanner() {
  return (
    <div
      className="py-5"
      style={{ background: "oklch(0.62 0.19 42)" }}
    >
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          {points.map((point, i) => {
            const Icon = point.icon;
            return (
              <div key={i} className="flex items-center gap-2.5">
                <Icon size={20} className="text-white flex-shrink-0" />
                <span
                  className="text-white font-bold text-sm tracking-wide"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  {point.text}
                </span>
                {i < points.length - 1 && (
                  <span className="hidden sm:block text-white/40 ml-6">|</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
