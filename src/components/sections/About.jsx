import { motion } from "framer-motion";

export default function About() {
  const services = [
    {
      title: "Software Development",
      desc: "Building web applications, software solutions, and digital products using modern development technologies and clean coding practices.",
    },
    {
      title: "Application Development",
      desc: "Developing responsive web and mobile applications with a focus on usability, maintainability, and performance.",
    },
    {
      title: "System Integration & ETL",
      desc: "Working with databases, ETL processes, and system integration workflows to support reliable data processing and enterprise software solutions.",
    },
    {
      title: "Machine Learning Projects",
      desc: "Developing machine learning and computer vision applications, including predictive models and real-time detection systems.",
    },
  ];

  const technologies = [
    "Python",
    "Java",
    "SQL",
    "React",
    "JavaScript",
    "Firebase",
    "Flutter",
    "Git",
    "React.js",
    "Node.js",
  ];

  const stats = [
    {
      value: "04+",
      label: "Projects Built",
    },
    {
      value: "01",
      label: "Internship",
    },
    {
      value: "10+",
      label: "Technologies",
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
            BUILDING SOFTWARE
            <br />
            <span className="text-blue-300/60">
              THAT SOLVES
            </span>
            <br />
            REAL PROBLEMS.
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
                I am a Computer Science graduate with hands-on experience in software development,
                application development, and enterprise software solutions. During my Software
                Engineering internship, I worked on ETL processes, software debugging, SQL
                development, and system integration within an agile development environment.
              </p>

              <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
                My project experience includes machine learning applications, real-time vehicle
                registration plate detection using YOLOv8, mobile application development, and
                web-based systems. I enjoy building software that solves practical problems while
                focusing on clean, maintainable, and scalable solutions.
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
                  Latest Experience
                </span>

                <span className="text-white">
                  Digital Solution Developer (Protege)
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
                  Focus Area
                </span>

                <span className="text-blue-300">
                  Software Engineering
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