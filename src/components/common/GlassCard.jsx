export default function GlassCard({
  children,
  className = "",
}) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-white/10
        bg-white/[0.02]
        backdrop-blur-xl
        hover:border-white/20
        transition-all
        duration-500
        ${className}
      `}
    >
      {children}
    </div>
  );
}