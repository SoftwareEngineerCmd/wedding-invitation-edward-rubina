export const Cell = ({ value, label }: { value: number; label: string }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="font-display text-5xl md:text-6xl text-gold-shimmer tabular-nums">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-1 text-xs uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
};
