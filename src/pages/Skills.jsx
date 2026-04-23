export default function Skills() {
  const skills = ["React.js", "Tailwind CSS", "Node.js", "JavaScript", "Python", "SQL"];

  return (
    <section className="relative w-full max-w-4xl mx-auto p-10 md:p-16 mt-16 rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl shadow-2xl">
      
      <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white tracking-tight">
        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Skills</span>
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div 
            key={skill} 
            className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-indigo-500/50 transition-all duration-300 text-center overflow-hidden"
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <span className="relative z-10 font-medium text-gray-200 group-hover:text-white transition-colors">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}