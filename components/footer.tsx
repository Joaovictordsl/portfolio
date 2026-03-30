import { ArrowUpRight } from "lucide-react";

import { contact } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/6 py-10">
      <div className="container-shell flex flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>João Victor. DevOps portfolio com foco em cloud, automação e observabilidade.</p>
        <div className="flex flex-wrap items-center gap-5">
          <a href={`mailto:${contact.email}`} className="transition hover:text-white">
            Email
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-white">
            LinkedIn
          </a>
          <a href={contact.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 transition hover:text-white">
            GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
