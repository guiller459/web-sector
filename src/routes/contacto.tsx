import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Clock, Send, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto y presupuesto gratuito | Sector Reformas y Proyectos" },
      {
        name: "description",
        content:
          "Solicita tu presupuesto de reforma en Silla y Valencia. Plaza Manuel Sanchis Guarner, 1, Silla. Teléfono 961 21 10 02 · oscar@sectorreformas.es",
      },
      { property: "og:title", content: "Contacto y presupuesto gratuito | Sector Reformas y Proyectos" },
      {
        property: "og:description",
        content:
          "Cuéntanos tu proyecto de reforma en Valencia. Visita sin compromiso y presupuesto detallado gratuito.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contacto" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: Contacto,
});

const servicios = [
  "Reforma integral",
  "Reforma de baño",
  "Reforma de cocina",
  "Albañilería",
  "Fontanería",
  "Electricidad",
  "Pintura y suelos",
  "Carpintería",
  "Otro",
];

function Contacto() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    localidad: "",
    servicio: servicios[0],
    mensaje: "",
  });

  const mailto = () => {
    const body = [
      `Nombre: ${form.nombre}`,
      `Teléfono: ${form.telefono}`,
      `Email: ${form.email}`,
      `Localidad: ${form.localidad}`,
      `Servicio: ${form.servicio}`,
      "",
      form.mensaje,
    ].join("\n");
    return `mailto:oscar@sectorreformas.es?subject=${encodeURIComponent(
      `Solicitud de presupuesto — ${form.servicio}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = mailto();
    setSent(true);
  };

  const field =
    "mt-1.5 w-full rounded-sm border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary";
  const label = "text-xs font-semibold uppercase tracking-wider text-muted-foreground";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-sand py-16">
          <div className="container-x">
            <p className="eyebrow">Contacto</p>
            <h1 className="mt-3 max-w-2xl text-4xl leading-tight sm:text-5xl">
              Contáctenos
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              Cuéntanos qué quieres reformar. Te llamamos, concertamos una visita sin compromiso y
              preparamos un presupuesto detallado.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              {sent ? (
                <div className="rounded-sm border border-border bg-card p-8 shadow-soft">
                  <CheckCircle2 className="h-8 w-8 text-primary" aria-hidden="true" />
                  <h2 className="mt-4 text-2xl">Gracias por escribirnos</h2>
                  <p className="mt-3 text-muted-foreground">
                    Se ha abierto tu programa de correo con la solicitud preparada. Si no se abre,
                    escríbenos a{" "}
                    <a href="mailto:oscar@sectorreformas.es" className="text-primary underline">
                      oscar@sectorreformas.es
                    </a>{" "}
                    o llámanos al 961 21 10 02.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="rounded-sm border border-border bg-card p-8 shadow-soft">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className={label} htmlFor="nombre">
                        Nombre
                      </label>
                      <input
                        id="nombre"
                        required
                        className={field}
                        value={form.nombre}
                        onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className={label} htmlFor="telefono">
                        Teléfono
                      </label>
                      <input
                        id="telefono"
                        required
                        type="tel"
                        className={field}
                        value={form.telefono}
                        onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className={label} htmlFor="email">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className={field}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className={label} htmlFor="localidad">
                        Localidad
                      </label>
                      <input
                        id="localidad"
                        className={field}
                        placeholder="Silla, Valencia…"
                        value={form.localidad}
                        onChange={(e) => setForm({ ...form, localidad: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label className={label} htmlFor="servicio">
                      Tipo de reforma
                    </label>
                    <select
                      id="servicio"
                      className={field}
                      value={form.servicio}
                      onChange={(e) => setForm({ ...form, servicio: e.target.value })}
                    >
                      {servicios.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-5">
                    <label className={label} htmlFor="mensaje">
                      Cuéntanos tu proyecto
                    </label>
                    <textarea
                      id="mensaje"
                      rows={5}
                      className={field}
                      placeholder="Metros aproximados, qué quieres reformar, plazos deseados…"
                      value={form.mensaje}
                      onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-7 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Enviar solicitud
                    <Send className="h-4 w-4" aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>

            <aside className="space-y-8">
              <div className="rounded-sm border border-border bg-card p-7">
                <h2 className="text-lg">Oficina en Silla</h2>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      Plaza Manuel Sanchis Guarner, 1<br />
                      46460 Silla, Valencia (España)
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <a href="tel:+34961211002" className="font-semibold hover:underline">
                      961 21 10 02
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <a href="mailto:oscar@sectorreformas.es" className="hover:underline">
                      oscar@sectorreformas.es
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>
                      Lunes a viernes: 9:30–13:30 y 17:00–20:00
                      <br />
                      Sábado y domingo: cerrado
                    </span>
                  </li>
                </ul>
              </div>

              <div className="overflow-hidden rounded-sm border border-border">
                <iframe
                  title="Ubicación de Sector Reformas y Proyectos en Silla, Valencia"
                  src="https://www.google.com/maps?q=Plaza%20Manuel%20Sanchis%20Guarner%201%2C%2046460%20Silla%2C%20Valencia&output=embed"
                  loading="lazy"
                  className="h-72 w-full"
                />
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
