import { motion } from "framer-motion";

export default function Skills() {
  const technicalSkills = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "SQL", level: 85 },
      ],
    },

    {
      title: "Web & Application Development",
      skills: [
        { name: "React", level: 85 },
        { name: "HTML & CSS", level: 90 },
        { name: "Firebase", level: 85 },
        { name: "Flutter", level: 75 },
      ],
    },

    {
      title: "Software Engineering",
      skills: [
        { name: "ETL Development", level: 85 },
        { name: "Debugging", level: 90 },
        { name: "Software Testing", level: 80 },
        { name: "System Integration", level: 85 },
      ],
    },

    {
      title: "Database & Tools",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "Oracle APEX", level: 80 },
        { name: "Git", level: 75 },
        { name: "REST APIs", level: 80 },
      ],
    },
  ];

  const stats = [
    {
      value: "10+",
      label: "Technologies",
    },
    {
      value: "05+",
      label: "Projects",
    },
    {
      value: "02",
      label: "Industry Experiences",
    },
    {
      value: "04",
      label: "Development Areas",
    },
  ];

  const languages = [
    "Malay (Native)",
    "English (Professional)",
    "Indonesia (Basic)",
  ];

  return (
    <section
      id="skills"
      className="py-24 md:py-32 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-20">

          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-blue-400/40" />

            <span className="text-[10px] uppercase tracking-[0.4em] text-blue-300">
              Skills & Capabilities
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
            Technical
            <br />

            <span className="text-blue-300/60">
              Expertise
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
            Technologies and tools I use to develop
            software applications, build scalable systems,
            integrate databases, and deliver reliable
            digital solutions for real-world problems.
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

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-6">

          {technicalSkills.map((category, index) => (
            <motion.div
              key={category.title}
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
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
                p-8
                hover:border-blue-400/20
                transition-all
                duration-500
              "
            >
              <div className="w-10 h-[2px] bg-blue-400 mb-6" />

              <h3 className="text-xl font-semibold text-white mb-8">
                {category.title}
              </h3>

              <div className="space-y-6">

                {category.skills.map((skill) => (
                  <div key={skill.name}>

                    <div className="flex justify-between mb-2">

                      <span className="text-zinc-300">
                        {skill.name}
                      </span>

                      <span className="text-blue-300 text-sm">
                        {skill.level}%
                      </span>

                    </div>

                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">

                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        whileInView={{
                          width: `${skill.level}%`,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 1,
                          delay: 0.2,
                        }}
                        className="
                          h-full
                          rounded-full
                          bg-gradient-to-r
                          from-blue-500
                          to-blue-300
                        "
                      />

                    </div>

                  </div>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

        {/* Languages */}
        <div
          className="
            mt-20
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            p-8
          "
        >
          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.4em]
              text-zinc-500
              mb-5
            "
          >
            Languages
          </p>

          <div className="flex flex-wrap gap-3">

            {languages.map((language) => (
              <span
                key={language}
                className="
                  px-4
                  py-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  text-white
                  text-sm
                "
              >
                {language}
              </span>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}