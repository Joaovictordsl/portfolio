"use client";

import { FormEvent, useState } from "react";
import { BriefcaseBusiness, FolderGit2, Mail, Send } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { contact } from "@/data/portfolio";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    window.setTimeout(() => {
      setStatus("done");
    }, 900);
  }

  return (
    <section id="contact" className="pt-24 pb-20">
      <div className="container-shell">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.52fr_0.48fr]">
          <div className="p-2 sm:p-0">
            <SectionHeading
              eyebrow="Contato"
              title="Contato"
              description="Entre em contato comigo, será um prazer conversar com você!"
              accent="white"
            />

            <div className="mt-8 space-y-4">
              <a
                href={`mailto:${contact.email}`}
                className="soft-button flex items-center gap-3 rounded-[1.3rem] border border-white/10 bg-white/4 px-4 py-4 text-sm text-slate-200 transition hover:border-white/18 hover:bg-white/6"
              >
                <Mail className="h-5 w-5 text-cyan-200" />
                {contact.email}
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="soft-button flex items-center gap-3 rounded-[1.3rem] border border-white/10 bg-white/4 px-4 py-4 text-sm text-slate-200 transition hover:border-white/18 hover:bg-white/6"
              >
                <BriefcaseBusiness className="h-5 w-5 text-cyan-200" />
                LinkedIn
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="soft-button flex items-center gap-3 rounded-[1.3rem] border border-white/10 bg-white/4 px-4 py-4 text-sm text-slate-200 transition hover:border-white/18 hover:bg-white/6"
              >
                <FolderGit2 className="h-5 w-5 text-cyan-200" />
                GitHub
              </a>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/8 bg-[#211e1f] p-8 sm:p-10">
            <div className="mb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                Formulário
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Envie uma mensagem</h3>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm text-slate-300">Nome</span>
                  <input
                    type="text"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/35"
                    placeholder="Seu nome"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm text-slate-300">Email</span>
                  <input
                    type="email"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/35"
                    placeholder="voce@empresa.com"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Mensagem</span>
                <textarea
                  required
                  rows={5}
                  className="w-full rounded-[1.6rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/35"
                  placeholder="Contexto da vaga, projeto ou contato."
                />
              </label>

              <button
                type="submit"
                className="soft-button inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100 disabled:cursor-not-allowed disabled:opacity-70"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Enviando..." : status === "done" ? "Mensagem registrada" : "Enviar mensagem"}
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
