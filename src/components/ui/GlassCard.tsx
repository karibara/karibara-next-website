type GlassCardProps = {
  className?: string;
};

export const GlassCard: React.FC<React.PropsWithChildren<GlassCardProps>> = ({
  children,
  className,
}) => {
  return (
    <div
      // glass card css settings below
      // className={`flex flex-wrap border border-peachKari rounded-3xl shadow-[0_10px_30px_rgba(212,181,162,0.6)] bg-gradient-to-br from-pink-300/10 via-purple-400/10 to-neutral-300/10 backdrop-blur-md ${className}`}
      className={`flex flex-wrap border-8 border-white rounded-3xl  bg-gradient-to-br from-peachKari/10 via-orangeKari/10 to-neutral-300/10 backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
};
