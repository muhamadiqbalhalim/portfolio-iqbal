import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    "home",
    "about",
    "experience",
    "skills",
    "projects",
    "contact",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const scrollProps = {
    smooth: true,
    duration: 600,
    offset: -80,
    spy: true,
  };

  return (
    <>
      <nav
        className={`
          fixed
          top-0
          left-0
          w-full
          z-[1000]
          py-4
          transition-all
          duration-300
          ${
            scrolled
              ? "bg-black/70 backdrop-blur-md border-b border-white/10"
              : "bg-transparent"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="home"
            smooth
            duration={600}
            offset={-80}
            className="
              cursor-pointer
              text-sm
              md:text-base
              font-semibold
              tracking-[0.25em]
              uppercase
              text-white
            "
          >
            IQBAL
            <span className="text-blue-400">
              .DEV
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">

            {navItems.map((item) => (
              <Link
                key={item}
                to={item}
                {...scrollProps}
                activeClass="active-nav"
                className="
                  cursor-pointer
                  uppercase
                  text-[11px]
                  tracking-[0.25em]
                  font-medium
                  text-zinc-500
                  hover:text-white
                  transition-all
                  duration-300
                  relative
                "
              >
                {item}
              </Link>
            ))}

          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              lg:hidden
              relative
              z-[1200]
              flex
              flex-col
              gap-1.5
            "
          >
            <motion.span
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 8 : 0,
              }}
              className="w-6 h-[2px] bg-white block"
            />

            <motion.span
              animate={{
                opacity: isOpen ? 0 : 1,
              }}
              className="w-6 h-[2px] bg-white block"
            />

            <motion.span
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? -8 : 0,
              }}
              className="w-6 h-[2px] bg-white block"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>

        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="
                fixed
                inset-0
                bg-black/60
                backdrop-blur-sm
                z-[1050]
                lg:hidden
              "
            />

            {/* Drawer */}
            <motion.div
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                fixed
                top-0
                right-0
                h-screen
                w-[320px]
                max-w-[85vw]
                bg-[#0b0b0b]
                border-l
                border-white/10
                z-[1100]
                lg:hidden
                flex
                flex-col
                justify-between
                p-8
              "
            >
              <div>

                <div className="mb-12">
                  <h3 className="text-white text-lg font-medium">
                    Navigation
                  </h3>
                </div>

                <div className="space-y-6">

                  {navItems.map((item) => (
                    <Link
                      key={item}
                      to={item}
                      {...scrollProps}
                      onClick={() =>
                        setIsOpen(false)
                      }
                      className="
                        block
                        cursor-pointer
                        uppercase
                        tracking-[0.2em]
                        text-zinc-300
                        hover:text-white
                        transition
                      "
                    >
                      {item}
                    </Link>
                  ))}

                </div>
              </div>

              <div className="border-t border-white/10 pt-6">

                <p className="text-zinc-500 text-sm">
                  Kuala Lumpur, Malaysia
                </p>

                <a
                  href="mailto:muhamadiqbaljob@gmail.com"
                  className="
                    block
                    mt-3
                    text-zinc-300
                    hover:text-white
                    transition
                  "
                >
                  muhamadiqbaljob@gmail.com
                </a>

              </div>
            </motion.div>
          </>
        )}

      </AnimatePresence>
    </>
  );
}