type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  accent?: "cyan" | "orange" | "blue" | "white";
};

const accentMap = {
  cyan: "text-cyan-300/85",
  orange: "text-orange-400",
  blue: "text-blue-500",
  white: "text-slate-300",
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  accent = "cyan",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className={`mb-4 text-xs font-semibold uppercase tracking-[0.32em] ${accentMap[accent]}`}>
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
    </div>
  );
}
