interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <div className={`text-center mb-12 lg:mb-16 ${className}`}>
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="w-4 h-1 bg-secondary rounded-full"></span>
        <span className="text-sm text-secondary font-medium">Aqui o servidor público tem voz</span>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
        <span className="text-white">Nossa </span>
        <span className="text-secondary">{children}</span>
      </h2>
    </div>
  );
}