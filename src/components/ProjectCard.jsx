import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  desc,
  link,
  images,
  tech,
  index,
}) {
  const mainImage = images?.[0];

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
      whileHover={{
        y: -8,
      }}
      className="group h-full"
    >
      <div
        className="
          h-full
          rounded-[32px]
          overflow-hidden
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          hover:border-blue-400/30
          transition-all
          duration-500
        "
      >
        {/* IMAGE */}
        <div className="relative aspect-[16/10] overflow-hidden">

          <img
            src={mainImage}
            alt={title}
            className="
              w-full
              h-full
              object-cover
              transition-all
              duration-1000
              group-hover:scale-110
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black
              via-black/20
              to-transparent
            "
          />

          <div
            className="
              absolute
              top-5
              left-5
              px-3
              py-2
              rounded-full
              bg-black/50
              backdrop-blur-md
              border
              border-white/10
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-white
            "
          >
            0{index + 1}
          </div>

          <div
            className="
              absolute
              top-5
              right-5
              px-3
              py-2
              rounded-full
              bg-blue-500/20
              border
              border-blue-400/30
              text-blue-300
              text-[10px]
              uppercase
              tracking-[0.25em]
            "
          >
            Featured
          </div>

        </div>

        {/* CONTENT */}
        <div className="p-6 md:p-8">

          <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
            {title}
          </h3>

          <p className="mt-4 text-zinc-400 leading-relaxed">
            {desc}
          </p>

          <div className="flex flex-wrap gap-2 mt-6">
            {tech?.map((item) => (
              <span
                key={item}
                className="
                  px-3
                  py-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-xs
                  text-zinc-300
                "
              >
                {item}
              </span>
            ))}
          </div>

          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="
              mt-8
              inline-flex
              items-center
              gap-3
              text-blue-300
              hover:text-white
              transition-colors
            "
          >
            View Project

            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>

        </div>
      </div>
    </motion.article>
  );
}