import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios de reformas en Valencia | Sector Reformas y Proyectos" },
      {
        name: "description",
        content:
          "Reformas integrales, baños, cocinas, albañilería, fontanería, electricidad, pintura, suelos y carpintería en Silla y provincia de Valencia.",
      },
      {
        property: "og:title",
        content: "Servicios de reformas en Valencia | Sector Reformas y Proyectos",
      },
      {
        property: "og:description",
        content:
          "Todos los gremios coordinados por un mismo equipo: reformas integrales, baños, cocinas y rehabilitación en Valencia.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/servicios" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/servicios" }],
  }),
  component: Servicios,
});

const bloques = [
  {
    title: "Reformas integrales",
    intro:
      "Renovación completa de viviendas, pisos, chalets y casas. Un proyecto llave en mano con dirección de obra y todos los gremios coordinados.",
    items: ["Viviendas y pisos", "Chalets y casas", "Redistribución de espacios", "Llave en mano"],
  },
  {
    title: "Reformas de baños",
    intro:
      "Uno de nuestros trabajos más solicitados. Desde el cambio de bañera por plato de ducha hasta la renovación completa.",
    items: [
      "Cambio de bañera por plato de ducha",
      "Alicatados y pavimentos",
      "Sanitarios y grifería",
      "Mamparas y mobiliario",
    ],
  },
  {
    title: "Reformas de cocinas",
    intro:
      "Diseñamos la cocina contigo y renovamos instalaciones, revestimientos y mobiliario en un único plazo.",
    items: ["Diseño y distribución", "Mobiliario a medida", "Encimeras", "Fontanería y electricidad"],
  },
  {
    title: "Albañilería",
    intro: "La base de cualquier reforma bien hecha, con obra ordenada y remates cuidados.",
    items: ["Tabiques y cerramientos", "Enlucidos", "Suelos", "Alicatados"],
  },
  {
    title: "Fontanería",
    intro: "Instalaciones nuevas, reparaciones y sustitución de tuberías antiguas.",
    items: ["Instalaciones completas", "Reparaciones", "Renovación de tuberías", "Desagües"],
  },
  {
    title: "Electricidad",
    intro: "Instalaciones seguras y adaptadas a normativa, con boletín cuando es necesario.",
    items: ["Renovación completa", "Cuadros eléctricos", "Iluminación LED", "Nuevos puntos de luz"],
  },
  {
    title: "Pintura y suelos",
    intro: "El acabado que se ve. Preparación de soportes y pavimentos bien nivelados.",
    items: ["Pintura interior", "Pintura exterior", "Porcelánico", "Laminado y vinílico"],
  },
  {
    title: "Carpintería",
    intro: "Puertas, armarios y muebles hechos a medida para aprovechar cada rincón.",
    items: ["Puertas", "Armarios empotrados", "Muebles de cocina", "Frentes a medida"],
  },
];

function Servicios() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-sand py-16 lg:py-20">
          <div className="container-x">
            <p className="eyebrow">Servicios</p>
            <h1 className="mt-3 max-w-3xl text-4xl leading-tight sm:text-5xl">
              Reformas y construcción para viviendas, locales y comunidades
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              Trabajamos para clientes particulares, familias que acaban de comprar vivienda,
              propietarios que reforman para alquilar, y también para empresas, locales comerciales,
              oficinas y comunidades de vecinos.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container-x grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-2">
            {bloques.map((b) => (
              <article key={b.title} className="bg-card p-8">
                <h2 className="text-xl">{b.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.intro}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {b.items.map((i) => (
                    <li
                      key={i}
                      className="rounded-sm bg-secondary px-3 py-1.5 text-xs font-semibold text-secondary-foreground"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-20">
          <div className="container-x grid items-center gap-10 lg:grid-cols-2">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/proyecto-bano.jpg"
                alt="Baño reformado en una vivienda de Valencia"
                loading="lazy"
                width={1024}
                height={1280}
                className="aspect-3/4 w-full rounded-sm object-cover"
              />
              <img
                src="/images/proyecto-cocina.jpg"
                alt="Cocina reformada con isla central"
                loading="lazy"
                width={1280}
                height={1024}
                className="aspect-3/4 w-full rounded-sm object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl">¿Tienes claro qué necesitas?</h2>
              <p className="mt-4 text-muted-foreground">
                Y si no lo tienes claro, también. Vamos a verlo, te asesoramos sobre materiales y
                distribución, y te entregamos un presupuesto detallado sin compromiso.
              </p>
              <Link
                to="/contacto"
                className="mt-7 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Pide una visita sin compromiso
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
