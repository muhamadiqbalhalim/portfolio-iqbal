import ProjectCard from "../ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "AI-Powered AMR Analytics Platform",
      desc: "Smart factory analytics platform leveraging AI-driven insights, Grafana visualization, and predictive monitoring for Autonomous Mobile Robot performance optimization.",
      images: ["/amr-dashboard.png"],
      tech: [
        "Python",
        "Grafana",
        "AI",
        "Machine Learning",
      ],
      link: "#",
    },

    {
      title: "RFID Rack Tracking System",
      desc: "Industrial RFID tracking solution designed to monitor rack movements during loading and unloading operations with real-time dashboard monitoring and automated status tracking.",
      images: ["/rfid-tracking.png"],
      tech: [
        "RFID",
        "IoT",
        "React",
        "Node.js",
      ],
      link: "#",
    },

    {
      title: "E-Voting Management Platform",
      desc: "Secure digital voting platform featuring authentication, real-time vote counting, Firebase integration, and administrative election management.",
      images: ["/evoting-dashboard.png"],
      tech: [
        "React",
        "Firebase",
        "Tailwind",
      ],
      link: "#",
    },

    {
      title: "Fancy Plate Detection System",
      desc: "Computer vision solution utilizing YOLOv8 to identify and classify non-compliant vehicle registration plates with automated reporting capabilities.",
      images: ["/vrpdetection.jpg"],
      tech: [
        "Python",
        "YOLOv8",
        "Android Studio",
      ],
      link: "#",
    },

    {
      title: "Campus Lost & Found Platform",
      desc: "Centralized campus item management platform with intelligent search capabilities, verification workflows, and administrative dashboards.",
      images: ["/lostfoundhomepage.png"],
      tech: [
        "PHP",
        "MySQL",
        "JavaScript",
      ],
      link:
        "https://github.com/muhamadiqbalhalim/LostFound.git",
    },
  ];

  const stats = [
    {
      value: "5+",
      label: "Projects Delivered",
    },
    {
      value: "12+",
      label: "Technologies Used",
    },
    {
      value: "4",
      label: "Specializations",
    },
    {
      value: "100%",
      label: "Built By Me",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 md:py-32 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-20">

          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-blue-400/40" />

            <span className="text-[10px] uppercase tracking-[0.4em] text-blue-300">
              Featured Work
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
            Selected
            <br />

            <span className="text-blue-300/60">
              Projects
            </span>
          </h2>

          <p
            className="
              mt-8
              max-w-2xl
              text-zinc-400
              text-lg
              leading-relaxed
            "
          >
            A collection of software engineering,
            AI analytics, RFID automation and
            enterprise-focused solutions developed
            to solve real-world operational and
            business challenges.
          </p>

        </div>

        {/* Stats */}
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-4
            mb-20
          "
        >
          {stats.map((item) => (
            <div
              key={item.label}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-6
              "
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                {item.value}
              </h3>

              <p
                className="
                  mt-2
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-zinc-500
                "
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div
          className="
            grid
            md:grid-cols-2
            gap-8
          "
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
              }}
              viewport={{
                once: true,
              }}
            >
              <ProjectCard
                {...project}
                index={index}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}