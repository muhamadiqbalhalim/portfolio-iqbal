import { motion } from "framer-motion";

export default function About() {
  const services = [
    {
      title: "Network Engineering",
      desc: "Designing, optimizing and maintaining enterprise-grade network infrastructures, connectivity solutions and operational reliability.",
    },
    {
      title: "Software Development",
      desc: "Building scalable web applications, internal platforms and modern digital products with clean architecture.",
    },
    {
      title: "AI & Automation",
      desc: "Developing intelligent systems, automation workflows and data-driven solutions that improve efficiency.",
    },
    {
      title: "RFID & IoT Systems",
      desc: "Bridging physical operations and digital intelligence through smart tracking, monitoring and automation.",
    },
  ];

  const technologies = [
    "React.js",
    "Node.js",
    "Firebase",
    "Python",
    "AI Systems",
    "Cisco",
    "RFID",
    "IoT",
  ];

  const stats = [
    {
      value: "03+",
      label: "Years Experience",
    },
    {
      value: "05+",
      label: "Projects Built",
    },
    {
      value: "TM",
      label: "Current Role",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Label */}
        <div className="mb-12 flex items-center gap-4">
          <div className="w-12 h-[1px] bg-blue-400/40" />

          <span className="text-[10px] uppercase tracking-[0.4em] text-blue-300">
            About Me
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">

          {/* LEFT */}
          <div className="lg:col-span-7">

            <motion.h2
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
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-black
                leading-[0.95]
                tracking-[-0.05em]
                text-white
              "
            >
              BUILDING DIGITAL
              <br />

              <span className="text-blue-300/60">
                SOLUTIONS
              </span>

              <br />

              FOR THE FUTURE.
            </motion.h2>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 mt-10">

              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-xl
                    p-5
                    hover:border-blue-400/30
                    transition-all
                    duration-300
                  "
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {stat.value}
                  </h3>

                  <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                    {stat.label}
                  </p>
                </div>
              ))}

            </div>

            {/* Description */}
            <div className="mt-10 space-y-6">

              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                I am a Computer Science graduate currently
                working as a Network Engineer at Telekom Malaysia.
                My passion lies at the intersection of networking,
                software engineering, automation and emerging technologies.
              </p>

              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                Whether developing AI-powered analytics platforms,
                RFID tracking solutions, internal applications or
                modern web experiences, my focus remains the same:
                solving real-world problems through technology that
                delivers measurable impact.
              </p>

            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-3 mt-10">

              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    px-4
                    py-2
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.03]
                    backdrop-blur-md
                    text-xs
                    text-zinc-300
                    hover:border-blue-400/30
                    hover:bg-blue-500/5
                    transition-all
                    duration-300
                  "
                >
                  {tech}
                </span>
              ))}

            </div>

            {/* Highlights */}
            <div className="mt-10 space-y-4">

              <div className="flex flex-col sm:flex-row sm:justify-between gap-2 border-b border-white/10 pb-4">
                <span className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Current Position
                </span>

                <span className="text-white">
                  Network Engineer @ Telekom Malaysia
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between gap-2 border-b border-white/10 pb-4">
                <span className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Education
                </span>

                <span className="text-white">
                  Bachelor of Computer Science (Hons)
                </span>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between gap-2 border-b border-white/10 pb-4">
                <span className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                  Recognition
                </span>

                <span className="text-blue-300">
                  Dean's List Recipient
                </span>
              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5">

            <div
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-8
                md:p-10
                h-full
              "
            >
              <h3 className="text-xs uppercase tracking-[0.35em] text-blue-300 mb-10">
                Core Expertise
              </h3>

              <div className="space-y-10">

                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="group"
                  >
                    <div className="flex gap-4">

                      <span className="text-blue-400 text-sm font-semibold">
                        0{index + 1}
                      </span>

                      <div>
                        <h4 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                          {service.title}
                        </h4>

                        <p className="mt-3 text-zinc-500 leading-relaxed">
                          {service.desc}
                        </p>
                      </div>

                    </div>
                  </motion.div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}