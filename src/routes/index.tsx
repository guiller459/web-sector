import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Bath,
  Blocks,
  ChefHat,
  Droplets,
  Hammer,
  Paintbrush,
  PanelsTopLeft,
  Plug,
  Ruler,
  Star,
  CheckCircle2,
  ShieldCheck,
  Clock3,
  Users,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { getContenido } from "@/lib/db";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Reformas en Silla y Valencia | Sector Reformas y Proyectos" },
      {
        name: "description",
        content:
          "Empresa de reformas integrales en Silla (Valencia): baños, cocinas, viviendas y rehabilitación. Presupuesto gratuito y proyectos llave en mano. 961 21 10 02.",
      },
      { property: "og:title", content: "Reformas en Silla y Valencia | Sector Reformas y Proyectos" },
      {
        property: "og:description",
        content:
          "Reformas integrales, baños y cocinas en Silla y toda la provincia de Valencia. Plazos cumplidos y acabados cuidados.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "GeneralContractor",
          name: "Sector Reformas y Proyectos",
          legalName: "Sector Reformas y Proyectos S.L.",
          telephone: "+34961211002",
          email: "oscar@sectorreformas.es",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Plaza Manuel Sanchis Guarner, 1",
            postalCode: "46460",
            addressLocality: "Silla",
            addressRegion: "Valencia",
            addressCountry: "ES",
          },
          areaServed: [
            "Silla",
            "Valencia",
            "Catarroja",
            "Albal",
            "Picassent",
            "Torrent",
            "Alzira",
            "Sueca",
          ],
          openingHours: "Mo-Fr 09:30-13:30,17:00-20:00",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.7",
            reviewCount: "15",
          },
        }),
      },
    ],
  }),
  loader: async () => {
    const heroData = await getContenido("hero");
    console.log("heroData:", heroData);
    return { heroData };
  },
  component: Home,
});

const servicios = [
  {
    icon: Blocks,
    title: "Reformas integrales",
    text: "Viviendas, pisos, chalets y casas. Proyecto llave en mano con todos los gremios coordinados.",
  },
  {
    icon: Bath,
    title: "Reformas de baños",
    text: "Cambio de bañera por plato de ducha, alicatados, sanitarios, mamparas y mobiliario.",
  },
  {
    icon: ChefHat,
    title: "Reformas de cocinas",
    text: "Diseño a medida, mobiliario, encimeras, fontanería y electricidad renovadas.",
  },
  {
    icon: Hammer,
    title: "Albañilería",
    text: "Tabiques, enlucidos, suelos y alicatados con acabados limpios y bien rematados.",
  },
  {
    icon: Droplets,
    title: "Fontanería",
    text: "Instalaciones, reparaciones y renovación completa de tuberías.",
  },
  {
    icon: Plug,
    title: "Electricidad",
    text: "Renovación de instalación, cuadros eléctricos e iluminación LED.",
  },
  {
    icon: Paintbrush,
    title: "Pintura y suelos",
    text: "Pintura interior y exterior, porcelánico, laminado y vinílico.",
  },
  {
    icon: PanelsTopLeft,
    title: "Carpintería",
    text: "Puertas, armarios a medida y muebles de cocina.",
  },
];

const proceso = [
  {
    n: "01",
    title: "Visita sin compromiso",
    text: "Vamos a tu vivienda o local, tomamos medidas y escuchamos qué necesitas.",
  },
  {
    n: "02",
    title: "Presupuesto detallado",
    text: "Partidas claras, materiales concretos y plazos por escrito. Sin sorpresas.",
  },
  {
    n: "03",
    title: "Planificación y permisos",
    text: "Organizamos gremios y nos encargamos de la gestión de licencias necesarias.",
  },
  {
    n: "04",
    title: "Ejecución de la obra",
    text: "Un responsable de obra y comunicación constante sobre el avance.",
  },
  {
    n: "05",
    title: "Entrega y garantía",
    text: "Repaso final contigo, limpieza de obra y garantía sobre el trabajo realizado.",
  },
];

const opiniones = [
  {
    nombre: "Alberto",
    texto: "Muy contento con el trabajo y los plazos. Profesionales 100%.",
  },
  {
    nombre: "Cristina Cots",
    texto:
      "Me han reformado tanto el baño como la cocina. Muy buenos profesionales. Recomendados al 100 %. Gracias por todo Óscar.",
  },
  {
    nombre: "José Manuel Barberán Ramos",
    texto:
      "Mi experiencia es positiva. Óscar es un gran profesional y nos aconsejó prácticamente en todo. El baño quedó genial.",
  },
];

const faqs = [
  {
    q: "¿Realizáis presupuestos gratuitos?",
    a: "Sí. Visitamos la vivienda o el local sin compromiso y entregamos un presupuesto detallado y por escrito, sin coste.",
  },
  {
    q: "¿Cuánto tarda una reforma integral?",
    a: "Una vivienda completa suele estar entre 8 y 14 semanas según superficie y acabados. Un baño, entre 1 y 2 semanas; una cocina, entre 2 y 4. El plazo se fija en el presupuesto.",
  },
  {
    q: "¿Trabajáis en toda Valencia?",
    a: "Sí. Nuestra oficina está en Silla y trabajamos en Valencia capital, Catarroja, Albal, Beniparrell, Picassent, Alcàsser, Paiporta, Massanassa, Sedaví, Torrent, Alzira, Sueca y alrededores.",
  },
  {
    q: "¿Gestionáis todos los gremios?",
    a: "Sí. Albañilería, fontanería, electricidad, carpintería, pintura y climatización. Tú tratas con un único interlocutor.",
  },
  {
    q: "¿Ofrecéis garantía?",
    a: "Todos nuestros trabajos e instalaciones cuentan con garantía, además de la garantía propia de los materiales y equipos instalados.",
  },
  {
    q: "¿Puedo seguir viviendo durante la reforma?",
    a: "En reformas parciales (un baño, una cocina) normalmente sí, protegiendo el resto de la vivienda. En reformas integrales lo habitual es desalojar; lo valoramos contigo antes de empezar.",
  },
  {
    q: "¿Os encargáis de los permisos?",
    a: "Sí. Tramitamos las licencias y declaraciones responsables necesarias ante el ayuntamiento y la comunidad.",
  },
];

function Home() {
  const { heroData } = Route.useLoaderData();

  const eyebrow = heroData?.eyebrow || "Silla · Valencia · Desde la primera visita";
  const titulo = heroData?.titulo || "Reformas integrales con plazos que se cumplen";
  const texto = heroData?.texto || "Somos Sector Reformas y Proyectos, empresa de reformas de viviendas, baños y cocinas en Silla. Coordinamos todos los gremios y te acompañamos de principio a fin.";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="container-x grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_1fr] lg:py-24">
            <div>
              <p className="eyebrow">{eyebrow}</p>
              <h1 className="mt-5 text-balance font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
                {titulo}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {texto}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="/contacto"
                  className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-soft transition-opacity hover:opacity-90"
                >
                  Contáctenos
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href="tel:+34961211002"
                  className="inline-flex items-center gap-2 rounded-sm border border-foreground/20 px-6 py-3.5 font-semibold transition-colors hover:bg-secondary"
                >
                  961 21 10 02
                </a>
              </div>
              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 rule-top pt-6">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                    Valoración
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-bold">4,7 / 5</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                    Reseñas
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-bold">15</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                    Gremios
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-bold">Todos</dd>
                </div>
              </dl>
            </div>
            <div className="relative">
              <img
                src="/images/hero-reforma.jpg"
                alt="Salón y cocina de una vivienda reformada en Valencia"
                width={1600}
                height={1104}
                className="aspect-4/3 w-full rounded-sm object-cover shadow-lift"
              />
              <div className="absolute -bottom-5 left-5 hidden rounded-sm bg-card px-5 py-4 shadow-lift sm:block">
                <div className="flex items-center gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-1.5 text-sm font-semibold">Reformas llave en mano</p>
                <p className="text-xs text-muted-foreground">Baños · Cocinas · Viviendas</p>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="bg-sand py-20">
          <div className="container-x">
            <p className="eyebrow">Servicios</p>
            <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl">
              Todo lo que necesita tu reforma, bajo un mismo equipo
            </h2>
            <div className="mt-12 grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2 lg:grid-cols-4">
              {servicios.map((s) => (
                <div key={s.title} className="bg-card p-7">
                  <s.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  <h3 className="mt-5 text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              ))}
            </div>
            <Link
              to="/servicios"
              className="mt-10 inline-flex items-center gap-2 font-semibold text-primary hover:underline"
            >
              Ver todos los servicios en detalle
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* Por qué elegirnos */}
        <section className="py-20">
          <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow">Por qué elegirnos</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">
                Trato cercano, obra ordenada y ningún plazo al aire
              </h2>
              <p className="mt-5 text-muted-foreground">
                Óscar Peris, responsable de la empresa, participa personalmente en cada proyecto.
                Es lo que más repiten nuestros clientes: asesoramiento honesto y comunicación
                constante durante toda la obra.
              </p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-sm bg-border sm:grid-cols-2">
              {[
                {
                  icon: Users,
                  t: "Un solo interlocutor",
                  d: "Nada de coordinar tú a cada gremio: nos ocupamos nosotros.",
                },
                {
                  icon: Clock3,
                  t: "Plazos cumplidos",
                  d: "Calendario cerrado en el presupuesto y revisiones semanales.",
                },
                {
                  icon: Ruler,
                  t: "Asesoramiento real",
                  d: "Te ayudamos a decidir materiales y distribución según tu presupuesto.",
                },
                {
                  icon: ShieldCheck,
                  t: "Garantía por escrito",
                  d: "Trabajos, instalaciones y materiales con garantía.",
                },
              ].map((b) => (
                <div key={b.t} className="bg-card p-7">
                  <b.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h3 className="mt-4 text-base">{b.t}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Galería */}
        <section className="bg-ink py-20 text-ink-foreground">
          <div className="container-x">
            <p className="eyebrow">Proyectos</p>
            <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl">
              Reformas terminadas en Silla y comarca
            </h2>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              <figure className="md:row-span-2">
                <img
                  src="/images/proyecto-bano.jpg"
                  alt="Baño reformado con plato de ducha y mueble suspendido"
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full rounded-sm object-cover"
                />
                <figcaption className="mt-3 text-sm text-ink-foreground/60">
                  Reforma de baño · Silla
                </figcaption>
              </figure>
              <figure>
                <img
                  src="/images/proyecto-cocina.jpg"
                  alt="Cocina reformada con isla y encimera de piedra"
                  loading="lazy"
                  width={1280}
                  height={1024}
                  className="aspect-4/3 w-full rounded-sm object-cover"
                />
                <figcaption className="mt-3 text-sm text-ink-foreground/60">
                  Reforma de cocina · Catarroja
                </figcaption>
              </figure>
              <figure>
                <img
                  src="/images/proyecto-salon.jpg"
                  alt="Salón comedor de vivienda reformada con suelo de madera"
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="aspect-4/3 w-full rounded-sm object-cover"
                />
                <figcaption className="mt-3 text-sm text-ink-foreground/60">
                  Reforma integral · Picassent
                </figcaption>
              </figure>
              <figure className="md:col-span-2">
                <img
                  src="/images/proyecto-obra.jpg"
                  alt="Trabajos de albañilería durante una reforma"
                  loading="lazy"
                  width={1280}
                  height={1024}
                  className="aspect-21/9 w-full rounded-sm object-cover"
                />
                <figcaption className="mt-3 text-sm text-ink-foreground/60">
                  Albañilería y redistribución · Valencia
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Proceso */}
        <section className="py-20">
          <div className="container-x">
            <p className="eyebrow">Proceso de trabajo</p>
            <h2 className="mt-3 max-w-2xl text-3xl sm:text-4xl">De la primera visita a las llaves</h2>
            <ol className="mt-12 grid gap-8 md:grid-cols-5">
              {proceso.map((p) => (
                <li key={p.n} className="rule-top pt-5">
                  <span className="font-display text-sm font-bold text-primary">{p.n}</span>
                  <h3 className="mt-2 text-base">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Opiniones */}
        <section className="bg-sand py-20">
          <div className="container-x">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow">Opiniones</p>
                <h2 className="mt-3 text-3xl sm:text-4xl">Lo que dicen nuestros clientes</h2>
              </div>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="flex text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </span>
                4,7 sobre 5 · 15 reseñas
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {opiniones.map((o) => (
                <blockquote key={o.nombre} className="rounded-sm bg-card p-7 shadow-soft">
                  <div className="flex text-primary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="mt-4 leading-relaxed">“{o.texto}”</p>
                  <footer className="mt-5 text-sm font-semibold">{o.nombre}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="eyebrow">Preguntas frecuentes</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">Resolvemos tus dudas</h2>
              <p className="mt-5 text-muted-foreground">
                ¿No encuentras lo que buscas? Llámanos al 961 21 10 02 y te lo explicamos sin
                compromiso.
              </p>
            </div>
            <div className="divide-y divide-border border-y border-border">
              {faqs.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold">
                    {f.q}
                    <span className="text-primary transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 pr-8 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Zona de trabajo + CTA */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container-x grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-3xl sm:text-4xl">Empieza hoy tu reforma</h2>
              <p className="mt-4 max-w-xl text-primary-foreground/85">
                Cuéntanos tu proyecto y concertamos una visita sin compromiso. Trabajamos en Silla,
                Valencia, Catarroja, Albal, Beniparrell, Picassent, Alcàsser, Paiporta, Massanassa,
                Sedaví, Torrent, Alzira, Sueca y alrededores.
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                {["Presupuesto gratuito", "Visita sin compromiso", "Proyectos llave en mano"].map(
                  (t) => (
                    <li key={t} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                      {t}
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-2 rounded-sm bg-background px-6 py-3.5 font-semibold text-foreground transition-opacity hover:opacity-90"
              >
                Cuéntanos tu proyecto
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="tel:+34961211002"
                className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/40 px-6 py-3.5 font-semibold"
              >
                961 21 10 02
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
