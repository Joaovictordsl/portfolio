"use client";

import { navigation } from "@/data/portfolio";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[rgba(27,24,24,0.92)] backdrop-blur-xl">
      <div className="container-shell flex flex-col items-center justify-between gap-4 py-4 md:h-18 md:flex-row md:py-0">
        <a href="#hero" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/3 text-sm font-semibold tracking-[0.22em] text-white">
            JV
          </span>
          <span className="hidden text-sm font-medium tracking-[0.24em] text-slate-300 sm:block">
            JOÃO VICTOR
          </span>
        </a>

        <nav
          aria-label="Navegação principal"
          className="flex max-w-full items-center gap-1 overflow-x-auto text-center [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="soft-button shrink-0 rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="soft-button rounded-full border border-white/18 bg-white/4 px-4 py-2 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/8"
        >
          Falar comigo
        </a>
      </div>
    </header>
  );
}
