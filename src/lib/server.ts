import { createServerFn } from "@tanstack/react-start";
import { updateContenido } from "./db";

export const updateContenidoFn = createServerFn({ method: "POST" })
  .validator((data: { clave: string; datos: string }) => data)
  .handler(async ({ data }) => {
    try {
      const parsedDatos = JSON.parse(data.datos);
      await updateContenido(data.clave, parsedDatos);
      return { success: true };
    } catch (error) {
      return { success: false, error: "JSON inválido" };
    }
  });
