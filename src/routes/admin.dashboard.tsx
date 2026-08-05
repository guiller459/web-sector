import { createFileRoute, useRouter, redirect } from "@tanstack/react-router";
import { getContenido } from "@/lib/db";
import { logoutFn, checkAuth } from "@/lib/auth";
import { updateContenidoFn } from "@/lib/server";
import { useState } from "react";

export const Route = createFileRoute("/admin/dashboard")({
  beforeLoad: () => {
    if (!checkAuth()) {
      throw redirect({ to: "/admin" });
    }
  },
  loader: async () => {
    const contents = await Promise.all([
      getContenido("hero"),
      getContenido("servicios"),
      getContenido("proceso"),
      getContenido("opiniones"),
      getContenido("faqs"),
    ]);

    return {
      hero: contents[0],
      servicios: contents[1],
      proceso: contents[2],
      opiniones: contents[3],
      faqs: contents[4],
    };
  },
  component: AdminDashboard,
});

function AdminDashboard() {
  const router = useRouter();
  const { hero, servicios, proceso, opiniones, faqs } = Route.useLoaderData();
  const [editing, setEditing] = useState<string | null>(null);
  const [editValues, setEditValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState<Record<string, boolean>>({});

  const contents = [
    { key: "hero", label: "Hero", data: hero },
    { key: "servicios", label: "Servicios", data: servicios },
    { key: "proceso", label: "Proceso", data: proceso },
    { key: "opiniones", label: "Opiniones", data: opiniones },
    { key: "faqs", label: "FAQs", data: faqs },
  ];

  const handleEdit = (key: string, data: any) => {
    setEditing(key);
    setEditValues({
      ...editValues,
      [key]: JSON.stringify(data?.datos || {}, null, 2),
    });
  };

  const handleCancel = (key: string) => {
    setEditing(null);
    setEditValues({ ...editValues, [key]: "" });
    setErrors({ ...errors, [key]: "" });
  };

  const handleSave = async (key: string) => {
    setSaving({ ...saving, [key]: true });
    setErrors({ ...errors, [key]: "" });

    const result = await updateContenidoFn({
      data: { clave: key, datos: editValues[key] },
    });

    if (result.success) {
      setEditing(null);
      setEditValues({ ...editValues, [key]: "" });
      router.invalidate();
    } else {
      setErrors({ ...errors, [key]: result.error || "Error al guardar" });
    }

    setSaving({ ...saving, [key]: false });
  };

  const handleLogout = async () => {
    await logoutFn();
    router.navigate({ to: "/admin" });
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Panel de Administración</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-sm font-semibold hover:bg-red-600"
          >
            Cerrar sesión
          </button>
        </div>

        <div className="space-y-8">
          {contents.map(({ key, label, data }) => (
            <div key={key} className="border border-border rounded-sm p-6 bg-card">
              <h2 className="text-xl font-semibold mb-4">{label}</h2>
              {editing === key ? (
                <div className="space-y-4">
                  <textarea
                    value={editValues[key]}
                    onChange={(e) =>
                      setEditValues({ ...editValues, [key]: e.target.value })
                    }
                    className="w-full h-64 font-mono text-sm p-4 border border-border rounded-sm bg-background"
                  />
                  {errors[key] && (
                    <p className="text-red-500 text-sm">{errors[key]}</p>
                  )}
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleSave(key)}
                      disabled={saving[key]}
                      className="bg-primary text-primary-foreground px-4 py-2 rounded-sm font-semibold disabled:opacity-50"
                    >
                      {saving[key] ? "Guardando..." : "Guardar"}
                    </button>
                    <button
                      onClick={() => handleCancel(key)}
                      className="bg-secondary text-secondary-foreground px-4 py-2 rounded-sm font-semibold"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <pre className="bg-background p-4 rounded-sm overflow-auto max-h-64 text-sm">
                    {JSON.stringify(data?.datos || {}, null, 2)}
                  </pre>
                  <button
                    onClick={() => handleEdit(key, data)}
                    className="bg-primary text-primary-foreground px-4 py-2 rounded-sm font-semibold"
                  >
                    Editar
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
