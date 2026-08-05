import { createServerFn } from "@tanstack/react-start";

export const loginFn = createServerFn({ method: "POST" })
  .validator((data: { password: string }) => data)
  .handler(async ({ data, context }) => {
    if (data.password === process.env.ADMIN_PASSWORD) {
      context.cookie.admin_session.set({
        value: "authenticated",
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 días
      });
      return { success: true };
    }
    return { success: false, error: "Contraseña incorrecta" };
  });

export const logoutFn = createServerFn({ method: "POST" }).handler(async ({ context }) => {
  context.cookie.admin_session.set({
    value: "",
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 0,
  });
  return { success: true };
});

export const checkAuth = createServerFn({ method: "GET" }).handler(async ({ context }) => {
  const session = context.cookie.admin_session.get();
  return { authenticated: session === "authenticated" };
});
