import { CheckCircle2, Send } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { challenges } from "../lib/challenges";
import { Reveal } from "./Reveal";

type FormStatus = "idle" | "sending" | "success" | "error";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  profile: "",
  city: "",
  district: "",
  interests: [] as string[],
  comments: "",
  consent: false,
};

const interestFormEndpoint =
  "https://script.google.com/macros/s/AKfycbzN4xeod0qMbNdYbpeTrW43S-XSEbkfn5sIj5gO8sKpBFMze-k99h6wbOIDDRtbEG7HQA/exec";

export function InterestForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const toggleInterest = (challengeId: string) => {
    setForm((current) => ({
      ...current,
      interests: current.interests.includes(challengeId)
        ? current.interests.filter((id) => id !== challengeId)
        : [...current.interests, challengeId],
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");
    if (!interestFormEndpoint) {
      setErrorMessage("El endpoint de registro no está configurado.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const response = await fetch(interestFormEndpoint, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(form),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
      };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "No fue posible registrar tus datos.");
      }
      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "No fue posible registrar tus datos.",
      );
      setStatus("error");
    }
  };

  return (
    <section
      id="interes"
      className="relative overflow-hidden bg-[#0e0931] py-24 sm:pt-0 sm:pb-28"
    >
      <span id="bases" className="absolute top-0" />
      <div className="dot-mesh pointer-events-none absolute inset-0 z-0 opacity-45" />
      <div className="section-shell relative z-10">
        <Reveal>
          <div className="grid overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#0e0931] via-[#1d1639] to-[#300a5b] shadow-[0_30px_100px_rgba(236,0,140,0.24)] lg:grid-cols-[0.78fr_1.22fr]">
            <div className="relative border-b border-white/10 p-7 text-white sm:p-12 lg:border-r lg:border-b-0 lg:p-14">
              <div className="absolute -top-28 -left-20 h-80 w-80 rounded-full bg-[#ec008c]/30 blur-3xl" />
              <div className="relative">
                <span className="section-eyebrow border-white/15 bg-white/10 text-[#f58220]">
                  Completa tus datos
                </span>
                <h2 className="font-display text-4xl leading-[1.05] font-semibold tracking-[-0.04em] sm:text-5xl">
                  Formulario de interés
                </h2>
                <p className="mt-6 text-sm leading-7 text-slate-300 sm:text-base">
                  Déjanos tus datos y preferencias. El equipo organizador podrá
                  contactarte cuando se habilite la convocatoria oficial.
                </p>
                <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/25 p-5 text-sm leading-7 text-slate-300 backdrop-blur-xl">
                  <p className="font-semibold text-white">
                    ¿Qué buscamos conocer?
                  </p>
                  <ul className="mt-3 space-y-2 text-slate-300">
                    <li>Tu perfil, ciudad y distrito de procedencia.</li>
                    <li>Los desafíos que más te interesan.</li>
                    <li>Ideas, preguntas u opiniones para el evento.</li>
                  </ul>
                </div>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="bg-slate-950/25 p-7 backdrop-blur-xl sm:p-12"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="sm:col-span-2">
                  <span className="text-sm font-medium text-white">
                    Nombres y apellidos *
                  </span>
                  <input
                    required
                    value={form.fullName}
                    onChange={(event) =>
                      setForm({ ...form, fullName: event.target.value })
                    }
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition focus:border-[#ec008c] focus:ring-2 focus:ring-[#ec008c]/25"
                    placeholder="Escribe tu nombre completo"
                  />
                </label>
                <label>
                  <span className="text-sm font-medium text-white">
                    Correo electrónico *
                  </span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(event) =>
                      setForm({ ...form, email: event.target.value })
                    }
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition focus:border-[#ec008c] focus:ring-2 focus:ring-[#ec008c]/25"
                    placeholder="nombre@correo.com"
                  />
                </label>
                <label>
                  <span className="text-sm font-medium text-white">
                    Celular
                  </span>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(event) =>
                      setForm({ ...form, phone: event.target.value })
                    }
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition focus:border-[#ec008c] focus:ring-2 focus:ring-[#ec008c]/25"
                    placeholder="Opcional"
                  />
                </label>
                <label>
                  <span className="text-sm font-medium text-white">
                    Perfil *
                  </span>
                  <select
                    required
                    value={form.profile}
                    onChange={(event) =>
                      setForm({ ...form, profile: event.target.value })
                    }
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-[#1d1639] px-4 py-3 text-sm text-white outline-none transition focus:border-[#ec008c]"
                  >
                    <option value="">Selecciona una opción</option>
                    <option>Estudiante</option>
                    <option>Egresado/a</option>
                    <option>Profesional de salud</option>
                    <option>Ingeniería o tecnología</option>
                    <option>Ciencias sociales</option>
                    <option>Otro perfil afín</option>
                  </select>
                </label>
                <label>
                  <span className="text-sm font-medium text-white">
                    Ciudad o región
                  </span>
                  <input
                    value={form.city}
                    onChange={(event) =>
                      setForm({ ...form, city: event.target.value })
                    }
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition focus:border-[#ec008c] focus:ring-2 focus:ring-[#ec008c]/25"
                    placeholder="Opcional"
                  />
                </label>
                <label>
                  <span className="text-sm font-medium text-white">
                    Distrito
                  </span>
                  <input
                    value={form.district}
                    onChange={(event) =>
                      setForm({ ...form, district: event.target.value })
                    }
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition focus:border-[#ec008c] focus:ring-2 focus:ring-[#ec008c]/25"
                    placeholder="Ej. San Borja"
                  />
                </label>
              </div>

              <fieldset className="mt-7">
                <legend className="text-sm font-medium text-white">
                  ¿Qué desafíos te interesan? *
                </legend>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Puedes seleccionar más de uno.
                </p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {challenges.map((challenge) => (
                    <label
                      key={challenge.id}
                      className="flex cursor-pointer gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-xs leading-5 text-slate-300 transition hover:border-[#ec008c]/55"
                    >
                      <input
                        type="checkbox"
                        checked={form.interests.includes(challenge.id)}
                        onChange={() => toggleInterest(challenge.id)}
                        className="mt-0.5 h-4 w-4 accent-[#ec008c]"
                      />
                      <span>{challenge.title}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="mt-6 block">
                <span className="text-sm font-medium text-white">
                  Ideas, preguntas u opiniones
                </span>
                <textarea
                  value={form.comments}
                  onChange={(event) =>
                    setForm({ ...form, comments: event.target.value })
                  }
                  rows={4}
                  className="mt-2 w-full resize-y rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition focus:border-[#ec008c] focus:ring-2 focus:ring-[#ec008c]/25"
                  placeholder="Cuéntanos qué te gustaría ver o aportar en el evento."
                />
              </label>
              <label className="mt-5 flex cursor-pointer gap-3 text-xs leading-5 text-slate-300">
                <input
                  required
                  type="checkbox"
                  checked={form.consent}
                  onChange={(event) =>
                    setForm({ ...form, consent: event.target.checked })
                  }
                  className="mt-0.5 h-4 w-4 accent-[#ec008c]"
                />
                <span>
                  Autorizo el tratamiento de mis datos para recibir información
                  relacionada con la Hackatón Niño San Borja.
                </span>
              </label>

              {status === "success" && (
                <p className="mt-5 flex items-center gap-2 text-sm text-emerald-300">
                  <CheckCircle2 className="h-4 w-4" />
                  Gracias. Tu interés fue registrado correctamente.
                </p>
              )}
              {status === "error" && (
                <p className="mt-5 text-sm text-amber-200">
                  {errorMessage ||
                    "No pudimos registrar tus datos. Verifica la conexión e inténtalo nuevamente."}
                </p>
              )}
              <button
                disabled={status === "sending"}
                type="submit"
                className="mt-7 bg-gradient-to-r from-[#ec008c] to-[#f58220] inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(236,0,140,0.35)] transition hover:brightness-110 disabled:cursor-wait disabled:opacity-70"
              >
                <Send className="h-4 w-4" />
                {status === "sending" ? "Enviando..." : "Registrar mi interés"}
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
