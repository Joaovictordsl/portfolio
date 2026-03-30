import { GraduationCap, Layers3, TerminalSquare } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";

const highlights = [
  {
    icon: GraduationCap,
    title: "Engenharia de Computação",
    text: "Base acadêmica em sistemas, arquitetura e raciocínio técnico aplicado.",
  },
  {
    icon: Layers3,
    title: "Infraestrutura moderna",
    text: "Foco em cloud, containers, pipelines e ambientes reproduzíveis.",
  },
  {
    icon: TerminalSquare,
    title: "Evolução contínua",
    text: "Perfil prático, curioso e orientado a consolidar domínio técnico com projetos reais.",
  },
];

export function About() {
  return (
    <section id="about" className="pt-24">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Sobre"
          title="Base acadêmica forte com direcionamento claro para engenharia DevOps."
          description="Estudante de Engenharia de Computação, com foco em infraestrutura moderna, automação, cloud e ambientes containerizados. Gosto de trabalhar com Linux, pipelines, arquitetura de serviços e tudo o que torna um sistema mais simples de entregar e operar."
          align="center"
          accent="white"
        />

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="interactive-card rounded-[1.5rem] border border-white/8 bg-[#211e1f] p-6 text-center transition duration-300 hover:-translate-y-1"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/6 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
