import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax({
  children,
  offset = 100,
}) {
  const { scrollY } = useScroll();

  const y = useTransform(
    scrollY,
    [0, 1000],
    [0, offset]
  );

  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  );
}