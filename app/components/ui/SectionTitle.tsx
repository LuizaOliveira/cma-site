interface SectionTitleProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
  dark?: boolean;
  center?: boolean;
}

export function SectionTitle({ children, title, subtitle, className = '', dark = false, center = false }: SectionTitleProps) {
  return (
    <div className={`${ center ? 'text-center' : ''} mb-12 lg:mb-16 ${className}`}>
      <div className={`flex items-center gap-2 mb-4 ${center ? 'justify-center' : ''}`}>
        <span className="w-4 h-1 bg-secondary rounded-full"></span>
        <span className={`font-normal text-lg ${dark ? 'text-white' : 'text-darkgray'}`}>{subtitle}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-red-hat-text ">
        <span className={` ${dark ? 'text-white' : 'text-primary'}`}>{title} </span>
        <span className="text-secondary">{children}</span>
      </h2>
    </div>
  );
}