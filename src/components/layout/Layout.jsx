import { motion } from "framer-motion";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div
      className="
      min-h-screen
      bg-[#050505]
      text-white
      overflow-x-hidden
      selection:bg-blue-500
      selection:text-white
    "
    >
      {/* Premium Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        {/* Main Glow */}
        <div
          className="
          absolute
          top-[-200px]
          left-1/2
          -translate-x-1/2
          w-[900px]
          h-[900px]
          bg-blue-500/[0.08]
          blur-[180px]
          rounded-full
        "
        />

        {/* Secondary Glow */}
        <div
          className="
          absolute
          bottom-[-100px]
          right-[-100px]
          w-[600px]
          h-[600px]
          bg-cyan-500/[0.04]
          blur-[160px]
          rounded-full
        "
        />

        {/* Grid */}
        <div
          className="
          absolute
          inset-0
          opacity-[0.02]
          bg-[linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
        />
      </div>

      <Navbar />

      <motion.main
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
        }}
        className="relative z-10"
      >
        {children}
      </motion.main>

      <Footer />
    </div>
  );
}