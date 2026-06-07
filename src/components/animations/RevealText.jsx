import { motion } from "framer-motion";

export default function RevealText({
  children,
  delay = 0,
}) {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{
          y: "100%",
        }}
        whileInView={{
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}