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
    <div className="flex items-center justify-between">
      <span className="sec">
        <em>{number}</em>
        <b>{label}</b>
        {extra && <span>{extra}</span>}
      </span>
      <span className="rail" aria-hidden>
        {Array.from({ length: total }, (_, i) => (
          <i key={i} className={i === step ? "on" : ""} />
        ))}
      </span>
    </div>
  );
}
