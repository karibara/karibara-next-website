type GlassCardProps = {
  className?: string;
  style?: React.CSSProperties;
};

export const GlassCard: React.FC<React.PropsWithChildren<GlassCardProps>> = ({
  children,
  className,
  style,
}) => {
  return (
    <div
      className={`flex flex-wrap border-8 border-white rounded-3xl  bg-gradient-to-br from-peachKari/10 via-orangeKari/10 to-neutral-300/10 backdrop-blur-md ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};
