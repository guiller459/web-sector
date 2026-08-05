import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export async function getContenido(clave: string) {
  const rows = await sql`
    SELECT * FROM contenido WHERE clave = ${clave} LIMIT 1
  `;
  return rows[0] ?? null;
}
