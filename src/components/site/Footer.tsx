import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-x grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-lg font-bold uppercase tracking-[0.12em]">
            Sector Reformas y Proyectos
          </p>
          <p className="mt-3 max-w-sm text-sm text-ink-foreground/70">
            Reformas integrales, baños, cocinas y rehabilitación en Silla y toda la provincia de
            Valencia. Un único interlocutor de principio a fin.
          </p>
          <p className="mt-4 text-xs text-ink-foreground/50">
            Sector Reformas y Proyectos S.L. · CIF B75549535
          </p>
        </div>

        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-ink-foreground/60">
            Contacto
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>
                Plaza Manuel Sanchis Guarner, 1
                <br />
                46460 Silla, Valencia
              </span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <a href="tel:+34961211002" className="hover:underline">
                961 21 10 02
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <a href="mailto:oscar@sectorreformas.es" className="hover:underline">
                oscar@sectorreformas.es
              </a>
            </li>
            <li className="flex gap-2.5">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>
                Lunes a viernes
                <br />
                9:30–13:30 · 17:00–20:00
              </span>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-ink-foreground/60">
            Navegación
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/servicios" className="hover:underline">
                Servicios
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:underline">
                Contacto y presupuesto
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10">
        <div className="container-x py-5 text-xs text-ink-foreground/50">
          © {new Date().getFullYear()} Sector Reformas y Proyectos S.L. · Silla, Valencia
        </div>
      </div>
    </footer>
  );
}
