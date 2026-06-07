import { motion } from "framer-motion";

export default function SectionTitle({
  label,
  title,
  subtitle,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="mb-20"
    >
      <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-6">
        {label}
      </p>

      <h2 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter leading-none text-white">
        {title}

        {subtitle && (
          <span className="block text-zinc-500 font-light">
            {subtitle}
          </span>
        )}
      </h2>
    </motion.div>
  );
}