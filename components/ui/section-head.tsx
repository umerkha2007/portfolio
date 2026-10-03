export function SectionHead({
  number,
  label,
  extra,
  step,
  total = 6,
}: {
  number: string;
  label: string;
  extra?: string;
  step: number;
  total?: number;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="sec whitespace-nowrap">
        <em>{number}</em>
        <b>{label}</b>
        {extra && <span className="hidden sm:inline">{extra}</span>}
      </span>
      <span className="rail flex-none" aria-hidden>
        {Array.from({ length: total }, (_, i) => (
          <i key={i} className={i === step ? "on" : ""} />
        ))}
      </span>
    </div>
  );
}
