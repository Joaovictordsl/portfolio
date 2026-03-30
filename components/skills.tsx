"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/data/portfolio";

export function Skills() {
  const [active, setActive] = useState(skillGroups[0].title);

  return (
    <section id="skills" className="pt-24">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Stack"
          title="Stack organizada para leitura rápida e aparência mais direta."
          description="Mantive a seção mais limpa e escaneável, como nas referências: poucos ruídos visuais, blocos bem definidos e foco no que realmente importa para recrutadores técnicos."
          align="center"
          accent="white"
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.38fr_0.62fr]">
          <div className="rounded-[1.75rem] border border-white/8 bg-[#211e1f] p-4">
            <div className="grid gap-3">
              {skillGroups.map((group) => {
                const isActive = group.title === active;

                return (
                  <button
                    key={group.title}
                    type="button"
                    onClick={() => setActive(group.title)}
                    className={`rounded-[1.4rem] border px-5 py-4 text-left transition ${
                      isActive
                        ? "border-white/16 bg-white/8"
                        : "border-white/8 bg-white/[0.02] hover:border-white/16 hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <h3 className="text-base font-semibold text-white">{group.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-400">{group.description}</p>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 text-slate-400 transition ${isActive ? "rotate-180" : ""}`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/8 bg-[#211e1f] p-6 sm:p-8">
            {skillGroups
              .filter((group) => group.title === active)
              .map((group) => (
                <div key={group.title}>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                    {group.title}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{group.description}</h3>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="soft-button rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-white/20 hover:bg-white/8"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
