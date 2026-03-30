import { SectionHeading } from "@/components/section-heading";
import { journey } from "@/data/portfolio";

export function Journey() {
  return (
    <section id="journey" className="pt-24">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Evolução técnica orientada por prática."
          description=""
          align="center"
          accent="blue"
        />

        <div className="mx-auto mt-12 max-w-5xl space-y-10">
          {journey.map((item) => (
            <article key={item.title} className="grid gap-4 border-b border-white/6 pb-8 md:grid-cols-[1fr_auto]">
              <div className="flex gap-4">
                <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-blue-500" />
                <div>
                  <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">{item.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.focus.map((focus) => (
                      <span
                        key={focus}
                        className="rounded-full border border-white/10 bg-white/4 px-3 py-1 text-xs text-slate-300"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-500 md:pt-1">{item.period}</p>
            </article>
          ))}
          </div>
      </div>
    </section>
  );
}
