interface SectionTitleProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ children, title, subtitle, className = '' }: SectionTitleProps) {
  return (
    <div className={`text-center mb-12 lg:mb-16 ${className}`}>
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="w-4 h-1 bg-secondary rounded-full"></span>
        <span className="text-sm text-white font-medium">{subtitle}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-red-hat-text">
        <span className="text-white">{title} </span>
        <span className="text-secondary">{children}</span>
      </h2>
    </div>
  );
}