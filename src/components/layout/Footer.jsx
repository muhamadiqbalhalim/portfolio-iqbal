import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Footer() {
  const navItems = [
    "about",
    "experience",
    "skills",
    "projects",
    "contact",
  ];

  return (
    <footer
      className="
        relative
        py-16
        md:py-20
        px-6
        md:px-20
        border-t
        border-white/10
        bg-[#080808]
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Top */}
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
            duration: 0.8,
          }}
          className="
            flex
            flex-col
            lg:flex-row
            justify-between
            gap-12
          "
        >

          {/* Left */}
          <div>

            <h2
              className="
                text-4xl
                md:text-6xl
                font-black
                tracking-tight
                text-white
              "
            >
              IQBAL
            </h2>

            <p
              className="
                mt-4
                text-zinc-500
                max-w-md
                leading-relaxed
              "
            >
              Building intelligent systems, modern web
              applications and scalable technology solutions
              that create measurable impact.
            </p>

          </div>

          {/* Right */}
          <div className="flex flex-col items-start lg:items-end">

            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.4em]
                text-zinc-600
                mb-5
              "
            >
              Navigation
            </p>

            <div
              className="
                flex
                flex-wrap
                gap-6
              "
            >
              {navItems.map((item) => (
                <Link
                  key={item}
                  to={item}
                  smooth
                  duration={700}
                  offset={-80}
                  className="
                    cursor-pointer
                    text-zinc-400
                    hover:text-white
                    transition
                    capitalize
                  "
                >
                  {item}
                </Link>
              ))}
            </div>

          </div>

        </motion.div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-white/10">

          <div
            className="
              flex
              flex-col
              md:flex-row
              justify-between
              items-center
              gap-5
            "
          >

            <p className="text-sm text-zinc-600">
              © {new Date().getFullYear()} Muhammad Iqbal. All rights reserved.
            </p>

            <Link
              to="home"
              smooth
              duration={700}
              offset={-80}
              className="
                cursor-pointer
                text-sm
                text-zinc-500
                hover:text-blue-400
                transition-all
              "
            >
              Back To Top ↑
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}