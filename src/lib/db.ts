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

export async function updateContenido(clave: string, datos: unknown) {
  const sql = neon(process.env.DATABASE_URL!);
  await sql`
    UPDATE contenido SET datos = ${JSON.stringify(datos)}::jsonb
    WHERE clave = ${clave}
  `;
  return { success: true };
}
