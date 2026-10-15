interface Props {
  number: string;
  title: string;
}

export default function SectionHeader({ number, title }: Props) {
  return (
    <div className="flex items-baseline gap-4 mb-16 border-b border-sand pb-4">
      <span className="text-champagne font-sans text-[11px] tracking-[0.25em]">{number}</span>
      <h2 className="text-ink font-serif text-3xl md:text-4xl tracking-tight">{title}</h2>
    </div>
  );
}