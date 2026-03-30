import { ArrowDownRight, Download, Mail } from "lucide-react";

import { contact } from "@/data/portfolio";

const signals = [
  { label: "Cloud-first", value: "AWS + IaC" },
  { label: "Entrega", value: "CI/CD orientado a release" },
  { label: "Observabilidade", value: "Métricas, logs e saúde" },
];

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-12 sm:pt-18">
      <div className="grid-overlay pointer-events-none absolute inset-x-0 top-0 h-[360px]" />
      <div className="container-shell relative">
        <div className="px-4 py-10 text-center sm:px-8 sm:py-16">
          <div className="mx-auto flex h-40 w-40 items-center justify-center rounded-full bg-[linear-gradient(145deg,#ff8c63,#9c45ff)] p-[1px] shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-[#141112]">
              <div className="absolute h-28 w-28 rounded-full border border-cyan-300/30" />
              <div className="absolute h-18 w-18 rounded-full border border-orange-300/35" />
              <div className="absolute inset-x-8 top-1/2 h-px -translate-y-1/2 bg-white/10" />
              <div className="absolute inset-y-8 left-1/2 w-px -translate-x-1/2 bg-white/10" />
              <div className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(76,201,240,0.7)]" />
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-4xl">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              I build reliable platforms
              <span className="block bg-gradient-to-r from-white via-orange-300 to-fuchsia-400 bg-clip-text text-transparent">
                for modern delivery.
              </span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Sou um DevOps Engineer, com foco em cloud (AWS), CI/CD,
              containers, automação de infraestrutura e observabilidade aplicada a
              projetos reais.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#projects"
                className="soft-button inline-flex min-w-44 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#151313] transition hover:bg-zinc-100"
              >
                Ver projetos
                <ArrowDownRight className="h-4 w-4" />
              </a>
              <a
                href="/JoaoLima_Resume.pdf"
                download
                className="soft-button inline-flex min-w-44 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/6"
              >
                Baixar CV
                <Download className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="soft-button inline-flex min-w-44 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/6"
              >
                Entrar em contato
                <Mail className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-18">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                Experience With
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                {signals.map((signal) => (
                  <div
                    key={signal.label}
                    className="interactive-card rounded-2xl border border-white/10 bg-[#211e1f] px-4 py-3 text-left"
                  >
                    <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                      {signal.label}
                    </p>
                    <p className="mt-2 text-sm font-medium text-white">{signal.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
