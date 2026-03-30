import { GraduationCap } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { certifications } from "@/data/portfolio";

export function Certifications() {
  return (
    <section id="certifications" className="pt-24">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Certificações e estudos"
          title="Trilhas em andamento e estudos aplicados."
          description="Mantive aqui um bloco simples, técnico e discreto, para não competir visualmente com projetos e hero."
          align="center"
          accent="white"
        />

        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((item) => (
            <article
              key={item.title}
              className="interactive-card rounded-[1.5rem] border border-white/8 bg-[#211e1f] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/16"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/4 p-3 text-white">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                  {item.status}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-cyan-100/80">{item.provider}</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
