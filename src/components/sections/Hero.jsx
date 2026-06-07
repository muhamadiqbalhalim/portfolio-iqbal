import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const roles = [
    "Software Engineer",
    "Software Developer",
    "Application Developer",
    "Digital Solution Developer",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#080808] px-6 md:px-12 xl:px-20 pb-10"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[140px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-400/5 blur-[100px] rounded-full" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_60%)]" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-8 items-center">

        {/* LEFT */}
        <div className="lg:col-span-7 order-2 lg:order-1">

          {/* Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />

            <p className="text-[10px] uppercase tracking-[0.45em] text-zinc-500">
              Open To Opportunities
            </p>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              text-6xl
              sm:text-7xl
              md:text-[6rem]
              lg:text-[7rem]
              xl:text-[8rem]
              font-black
              tracking-[-0.05em]
              leading-[0.9]
              uppercase
              text-white
            "
          >
            MUHAMAD
            <br />

            <span className="text-blue-200/40 font-light">
              IQBAL
            </span>
          </motion.h1>

          {/* Role */}
          <div className="mt-6 h-[60px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={roles[index]}
                initial={{
                  y: 50,
                  opacity: 0,
                  filter: "blur(10px)",
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  filter: "blur(0px)",
                }}
                exit={{
                  y: -50,
                  opacity: 0,
                  filter: "blur(10px)",
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  text-xl
                  md:text-3xl
                  text-blue-300
                  font-light
                "
              >
                {roles[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="
            mt-5
            max-w-3xl
            text-zinc-400
            text-sm
            md:text-base
            leading-6
          "
        >
          Computer Science graduate with experience in software
          development, system integration, and enterprise applications.

          Skilled in Python, Java, SQL, and modern development
          technologies with hands-on experience in ETL development,
          machine learning projects, web applications, and mobile
          application development.
        </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="
              grid
              grid-cols-3
              gap-4
              mt-8
              max-w-xl
            "
          >
            <div
              className="
                border border-white/10
                rounded-2xl
                p-4
                bg-white/[0.03]
                backdrop-blur-md
                hover:border-blue-400/30
                transition-all
                duration-300
              "
            >
              <h3 className="text-2xl font-semibold text-white">
                5+
              </h3>

              <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 mt-1">
                Projects
              </p>
            </div>

            <div
              className="
                border border-white/10
                rounded-2xl
                p-4
                bg-white/[0.03]
                backdrop-blur-md
                hover:border-blue-400/30
                transition-all
                duration-300
              "
            >
              <h3 className="text-2xl font-semibold text-white">
                2
              </h3>

              <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 mt-1">
                Industry
              </p>
            </div>

            <div
              className="
                border border-white/10
                rounded-2xl
                p-4
                bg-white/[0.03]
                backdrop-blur-md
                hover:border-blue-400/30
                transition-all
                duration-300
              "
            >
              <h3 className="text-2xl font-semibold text-white">
                10+
              </h3>

              <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 mt-1">
                Technologies
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap items-center gap-6 mt-7"
          >
            <a
              href="#projects"
              className="
                px-8
                py-3
                rounded-full
                bg-blue-500
                text-white
                text-xs
                uppercase
                tracking-[0.25em]
                font-medium
                hover:bg-blue-400
                hover:scale-105
                transition-all
              "
            >
              View Projects
            </a>

            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-sm
                text-zinc-400
                hover:text-white
                transition
              "
            >
              Download Resume →
            </a>
          </motion.div>
        </div>

       {/* IMAGE */}
        <div className="lg:col-span-5 order-1 lg:order-2">
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="
              relative
              flex
              justify-center
              items-center
              py-8
            "
          >

            {/* Main Glow */}
            <div
              className="
                absolute
                w-[320px]
                h-[320px]
                md:w-[420px]
                md:h-[420px]
                rounded-full
                bg-blue-500/20
                blur-[120px]
              "
            />

            {/* Secondary Glow */}
            <div
              className="
                absolute
                w-[250px]
                h-[250px]
                md:w-[320px]
                md:h-[320px]
                rounded-full
                bg-blue-300/10
                blur-[80px]
              "
            />

            {/* Ring */}
            <div
              className="
                absolute
                w-[280px]
                h-[280px]
                md:w-[380px]
                md:h-[380px]
                rounded-full
                border
                border-blue-400/20
              "
            />

            {/* Ring 2 */}
            <div
              className="
                absolute
                w-[320px]
                h-[320px]
                md:w-[430px]
                md:h-[430px]
                rounded-full
                border
                border-white/5
              "
            />

            {/* Profile Image */}
            <img
              src="/Profile.png"
              alt="Muhamad Iqbal"
              className="
                relative
                z-10
                w-[300px]
                md:w-[400px]
                lg:w-[500px]
                object-contain
                drop-shadow-[0_0_40px_rgba(59,130,246,0.35)]
              "
            />

          </motion.div>
        </div>

      </div>

      {/* Scroll */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-3 opacity-30">
        <span className="text-[9px] tracking-[0.5em] uppercase text-white">
          Scroll
        </span>

        <div className="w-[1px] h-10 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}