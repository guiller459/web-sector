import { neon } from "@neondatabase/serverless";
import { createServerFn } from "@tanstack/react-start";

export const getContenido = createServerFn({ method: "GET" })
  .validator((clave: string) => clave)
  .handler(async ({ data: clave }) => {
    const sql = neon(process.env.DATABASE_URL!);
    const rows = await sql`
      SELECT * FROM contenido WHERE clave = ${clave} LIMIT 1
    `;
    return rows[0] ?? null;
  });

export const updateContenido = createServerFn({ method: "POST" })
  .validator((data: { clave: string; datos: unknown }) => data)
  .handler(async ({ data }) => {
    const sql = neon(process.env.DATABASE_URL!);
    await sql`
      UPDATE contenido SET datos = ${JSON.stringify(data.datos)}::jsonb
      WHERE clave = ${data.clave}
    `;
    return { success: true };
  });
