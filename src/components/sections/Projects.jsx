import ProjectCard from "../ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "E-Voting Management System",
      desc: "Developed a web-based voting platform for managing elections, candidate registration, voter authentication, and real-time result tracking. Built during my Digital Solution Developer programme to streamline organizational voting processes.",
      images: ["/evoting-dashboard.png"],
      tech: [
        "React",
        "Firebase",
        "JavaScript",
        "Tailwind CSS",
      ],
      link: "#",
    },

    {
      title: "QC Training Management System",
      desc: "Designed and developed a training management platform to support quality control operations. Features include training records management, user tracking, progress monitoring, and centralized administrative controls.",
      images: ["/qc-training.png"],
      tech: [
        "React",
        "Firebase",
        "JavaScript",
        "SQL",
      ],
      link: "#",
    },

    {
      title: "Real-Time Vehicle Plate Detection",
      desc: "Final Year Project involving a mobile application that detects Malaysian vehicle registration plates in real time using YOLOv8. Integrated Firebase for data storage and reporting.",
      images: ["/vrpdetection.jpg"],
      tech: [
        "Python",
        "YOLOv8",
        "Firebase",
        "Android Studio",
      ],
      link: "#",
    },

    {
      title: "Task Management System",
      desc: "Developed a task management application that enables users to organize, track, and manage daily activities efficiently through a user-friendly interface and database integration.",
      images: ["/task-management.png"],
      tech: [
        "Java",
        "HTML",
        "CSS",
        "SQL",
      ],
      link: "#",
    },

    {
      title: "Social Volunteer Application",
      desc: "Built an Android-based application that allows volunteers to register, discover, and participate in community programmes with role-based access and event management capabilities.",
      images: ["/volunteer-app.png"],
      tech: [
        "Java",
        "Android Studio",
        "SQL",
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
    link: "https://github.com/muhamadiqbalhalim/LostFound.git", 
    }, 
  ];

    const stats = [
      {
        value: "06+",
        label: "Projects Built",
      },
      {
        value: "10+",
        label: "Technologies",
      },
      {
        value: "02",
        label: "Industry Experiences",
      },
      {
        value: "100%",
        label: "Hands-On Development",
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
          A collection of software applications,
          web platforms, and machine learning
          projects developed through academic,
          internship, and industry experiences.
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