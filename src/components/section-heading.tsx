export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="inline-flex items-center rounded-full bg-accent-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wide text-accent-600">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-950 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-7 text-brand-900/65">{subtitle}</p>}
    </div>
  );
}
