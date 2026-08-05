import { createServerFn } from "@tanstack/react-start";
import { setCookie, getCookie } from "vinxi/http";

export const loginFn = createServerFn({ method: "POST" })
  .validator((data: { password: string }) => data)
  .handler(async ({ data }) => {
    if (data.password === process.env.ADMIN_PASSWORD) {
      setCookie("admin_session", "authenticated", {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 días
      });
      return { success: true };
    }
    return { success: false, error: "Contraseña incorrecta" };
  });

export const logoutFn = createServerFn({ method: "POST" }).handler(async () => {
  setCookie("admin_session", "", {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 0,
  });
  return { success: true };
});

export const checkAuth = () => {
  const session = getCookie("admin_session");
  return session === "authenticated";
};
