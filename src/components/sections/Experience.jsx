import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      year: "2025 — Present",
      title: "Network Engineer",
      company: "Telekom Malaysia",
      description:
        "Supporting enterprise network operations, infrastructure reliability, telecommunications services and digital transformation initiatives across mission-critical environments.",
    },
    {
      year: "2024 — 2025",
      title: "AI-Powered AMR Analytics Platform",
      company: "Final Year Project",
      description:
        "Developed an intelligent analytics platform for Autonomous Mobile Robots (AMR) using AI-driven monitoring, predictive analytics and Grafana visualization.",
    },
    {
      year: "2024",
      title: "RFID Rack Tracking System",
      company: "Industrial Tracking Solution",
      description:
        "Designed and developed RFID-based operational tracking for loading and unloading verification with real-time dashboard monitoring.",
    },
    {
      year: "2023 — 2024",
      title: "Full Stack Development Projects",
      company: "Academic & Personal Projects",
      description:
        "Built multiple web applications including E-Voting Platform, Lost & Found System, Fancy Plate Detection and responsive business solutions.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 md:py-32 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-20">

          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-blue-400/40" />

            <span className="text-[10px] uppercase tracking-[0.4em] text-blue-300">
              Experience
            </span>
          </div>

          <h2
            className="
              text-5xl
              md:text-7xl
              font-black
              tracking-[-0.05em]
              text-white
            "
          >
            Professional
            <br />

            <span className="text-blue-300/60">
              Journey
            </span>
          </h2>

        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Main Line */}
          <div
            className="
              absolute
              left-[14px]
              top-0
              bottom-0
              w-px
              bg-gradient-to-b
              from-blue-400/50
              via-white/10
              to-transparent
            "
          />

          <div className="space-y-12">

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
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
                  delay: index * 0.08,
                }}
                className="relative pl-14"
              >
                {/* Timeline Dot */}
                <div
                  className="
                    absolute
                    left-0
                    top-4
                    w-7
                    h-7
                    rounded-full
                    bg-[#080808]
                    border
                    border-blue-400/30
                    flex
                    items-center
                    justify-center
                  "
                >
                  <div
                    className="
                      w-2.5
                      h-2.5
                      rounded-full
                      bg-blue-400
                    "
                  />
                </div>

                {/* Card */}
                <div
                  className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    backdrop-blur-xl
                    p-6
                    md:p-8
                    hover:border-blue-400/30
                    hover:bg-white/[0.06]
                    transition-all
                    duration-500
                  "
                >
                  <span
                    className="
                      text-[11px]
                      uppercase
                      tracking-[0.35em]
                      text-blue-300
                    "
                  >
                    {exp.year}
                  </span>

                  <h3
                    className="
                      mt-4
                      text-2xl
                      md:text-3xl
                      font-bold
                      text-white
                    "
                  >
                    {exp.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-blue-400
                      font-medium
                    "
                  >
                    {exp.company}
                  </p>

                  <p
                    className="
                      mt-5
                      text-zinc-400
                      leading-relaxed
                    "
                  >
                    {exp.description}
                  </p>
                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}