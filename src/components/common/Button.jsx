import { motion } from "framer-motion";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
}) {
  const baseStyles =
    "inline-flex items-center justify-center px-8 py-4 rounded-full text-xs uppercase tracking-[0.3em] transition-all duration-500";

  const variants = {
    primary:
      "bg-white text-black hover:scale-105",

    secondary:
      "border border-white/10 text-white hover:bg-white hover:text-black",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        href={href}
        className={styles}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={styles}
    >
      {children}
    </motion.button>
  );
}