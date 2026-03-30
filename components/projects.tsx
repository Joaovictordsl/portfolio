"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, CircleAlert, FolderGit2 } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/portfolio";

const filters = ["Todos", "Cloud", "Observability", "Automation", "Platform"] as const;

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("Todos");
  const [selectedId, setSelectedId] = useState(projects[0].id);

  const visibleProjects = useMemo(() => {
    if (activeFilter === "Todos") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const selectedProject =
    visibleProjects.find((project) => project.id === selectedId) ?? visibleProjects[0] ?? projects[0];

  useEffect(() => {
    if (!visibleProjects.some((project) => project.id === selectedId) && visibleProjects[0]) {
      setSelectedId(visibleProjects[0].id);
    }
  }, [activeFilter, selectedId, visibleProjects]);

  return (
    <section id="projects" className="pt-24">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Projetos"
          title="Meus projetos pessoais e profissionais, aplicados a DevOps."
          description=""
          align="center"
          accent="orange"
        />

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                activeFilter === filter
                  ? "border-white/20 bg-white/10 text-white"
                  : "border-white/10 bg-white/4 text-slate-300 hover:border-white/20 hover:bg-white/7"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-5xl">
          <div className="grid gap-5 md:grid-cols-2">
            {visibleProjects.map((project) => (
              <article
                key={project.id}
                className="interactive-card group overflow-hidden rounded-[1.35rem] border border-white/8 bg-[#242223] transition duration-300 hover:-translate-y-1 hover:border-white/16"
              >
                <div className="relative h-48 overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(255,123,71,0.35),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(47,140,255,0.34),transparent_30%),linear-gradient(135deg,#0b0b0d,#1d1b24)]">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.03),transparent_55%)]" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-slate-300">
                    {project.category}
                  </div>
                  <div className="absolute right-5 top-5 text-slate-300">
                    <FolderGit2 className="h-5 w-5" />
                  </div>
                  <div className="absolute inset-x-5 bottom-5">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-slate-400">
                      Click here to visit
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold uppercase tracking-tight text-white">
                      {project.name}
                    </h3>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-sm leading-7 text-slate-300">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.slice(0, 4).map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => setSelectedId(project.id)}
                      className="soft-button rounded-full border border-white/10 px-4 py-2 text-sm text-white transition hover:border-white/20 hover:bg-white/8"
                    >
                      Ver mais detalhes
                    </button>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
                    >
                      GitHub
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <aside className="mt-12 rounded-[1.5rem] border border-white/8 bg-[#1f1d1e] p-6 sm:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                Projeto em destaque
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{selectedProject.name}</h3>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-300">{selectedProject.summary}</p>

            <div className="mt-6 rounded-[1.5rem] border border-orange-300/15 bg-orange-300/8 p-4">
              <div className="flex items-start gap-3">
                <CircleAlert className="mt-0.5 h-5 w-5 text-orange-200" />
                <div>
                  <p className="text-sm font-medium text-orange-100">Principais desafios</p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-orange-50/88">
                    {selectedProject.challenges.map((challenge) => (
                      <li key={challenge}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm font-medium text-white">O que foi implementado</p>
              <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-300">
                {selectedProject.implemented.map((item) => (
                  <li key={item} className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {selectedProject.metrics.map((metric) => (
                <span
                  key={metric}
                  className="rounded-full border border-cyan-300/18 bg-cyan-300/8 px-3 py-1 text-xs text-cyan-100"
                >
                  {metric}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="soft-button inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-zinc-100"
              >
                Repositório
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href={selectedProject.demo}
                target="_blank"
                rel="noreferrer"
                className="soft-button inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/8"
              >
                Abrir demo
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
